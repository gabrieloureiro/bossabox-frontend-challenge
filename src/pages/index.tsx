/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '@/hooks/useFetch'
import { v4 as uuid } from 'uuid'
import api from '@/services/api'
import { mutate as mutateGlobal } from 'swr'

import { ToolsInterface, formToolsItems } from '@/models/tools'

import selectColor from '@/utils/selectColor'
import getValidationErrors from '@/utils/getValidationErrors'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { Row } from '@/components/Row'
import { Fade } from 'react-reveal'

import {
  FullCardList,
  FullCardListItem,
  FullCard,
  CardAnchorTitle,
  CardTitle,
  CardDescription,
  CardTag,
  ContainerTitle,
  AddButton,
  Form,
  CancelButton,
  ConfirmButton
} from '@/styles/pages/Home'

const Home: React.FC = () => {
  const formRef = useRef(null)
  const [openAddModal, setOpenAddModal] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const { data, mutate } = useFetch<ToolsInterface[]>('tools')

  const handleOpenAddModal = (): void => {
    setOpenAddModal(true)
  }

  const handleCloseAddModal = (): void => {
    setOpenAddModal(false)
  }

  const updateTools = async () => {
    const response = await api.get('tools')
    return await response.data
  }

  const handleAddTool = useCallback(
    async (tool: ToolsInterface) => {
      api.post('tools', tool)
      await updateTools()
    }, [data, mutate]
  )

  const handleSubmit = useCallback(async (formData: ToolsInterface) => {
    try {
      formRef.current?.setErrors({})

      const editedFormData: ToolsInterface = {
        id: uuid(),
        title: formData.title,
        description: formData.description,
        link: formData.link,
        tags: formData.tags.split(',')
      }

      handleAddTool(editedFormData)
      handleCloseAddModal()
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="VUTTR | Very Useful Tools to Remember"
      highlightTitle="Tools"
    >
      <Row wrap align="center" style={{ marginBottom: '24px' }}>
        <ContainerTitle>Very Useful Tools to Remember</ContainerTitle>
        <AddButton buttonType="primaryNeutral" onClick={handleOpenAddModal}>
          Add Tool
        </AddButton>
      </Row>
      <FullCardList>
        {data?.map((item, index) => {
          return (
            <FullCardListItem key={`${item.id}_${index}`}>
              <Fade delay={`${index}0`}>
                <FullCard>
                  {item.link ? (
                    <Row>
                      <CardAnchorTitle
                        aria-label={item.title}
                        target="_blank"
                        rel="noopener noreferrer external"
                        href={item.link}
                      >
                        {item.title}
                      </CardAnchorTitle>
                    </Row>
                  ) : (
                      <CardTitle>{item.title}</CardTitle>
                    )}
                  <CardDescription>{item.description}</CardDescription>
                  <Row wrap>
                    {item.tags.map((tag, index) => {
                      return (
                        <CardTag
                          key={`${tag}_${index}`}
                          backgroundColor={`${selectColor(
                            Math.floor(Math.random() * 999),
                            10
                          )}`}
                        >
                          {tag}
                        </CardTag>
                      )
                    })}
                  </Row>
                </FullCard>
              </Fade>
            </FullCardListItem>
          )
        })}
      </FullCardList>
      {openAddModal ? (
        <Modal
          title="Add new tool"
          open={openAddModal}
          onClose={handleCloseAddModal}
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            {formToolsItems.map((item, index) => {
              return (
                <Input
                  key={`${item.label}_${index}`}
                  label={item.label}
                  required
                  name={item.name}
                />
              )
            })}
            <Row wrap align="center" justify="end">
              <CancelButton
                buttonType="primaryDanger"
                onClick={handleCloseAddModal}
              >
                Cancel
              </CancelButton>
              <ConfirmButton
                buttonType="primarySuccess"
                onClick={() => handleSubmit}
              >
                Confirm
              </ConfirmButton>
            </Row>
          </Form>
        </Modal>
      ) : null}
    </Layout>
  )
}

export default Home
