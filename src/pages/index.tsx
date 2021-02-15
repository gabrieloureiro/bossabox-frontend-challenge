/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef, useState } from 'react'
import { useFetch } from '@/hooks/useFetch'
import { v4 as uuid } from 'uuid'
import { mutate as mutateGlobal } from 'swr'
import toolsSchema from '@/utils/toolsSchema'
import api from '@/services/api'
import getValidationErrors from '@/utils/getValidationErrors'

import { ToolsInterface, formToolsItems } from '@/models/tools'

import selectColor from '@/utils/selectColor'

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
  IconsWrapper,
  EditButton,
  DeleteButton, Form, CancelButton, ConfirmButton
} from '@/styles/pages/Home'

const Home: React.FC = () => {
  const formRef = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [currentTool, setCurrentTool] = useState<ToolsInterface>({} as ToolsInterface)
  const { data, mutate } = useFetch<ToolsInterface[]>('tools')

  const handleOpenModal = (): void => {
    setOpenModal(true)
  }

  const handleCloseModal = (): void => {
    setOpenModal(false)
  }

  const handleCloseEditModal = (): void => {
    setOpenEditModal(false)
  }

  const handleOpenEditModal = async (id: string) => {
    const response = await api.get(`tools/${id}`)
    const editedData = {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      link: response.data.link,
      tags: response.data.tags.toString()
    }
    setCurrentTool(editedData)
    setOpenEditModal(true)
  }

  const handleAddTool = useCallback(
    async (tool: ToolsInterface) => {
      await api.post('tools', tool)
      mutateGlobal('tools')
    },
    [data, mutate]
  )

  const handleSubmit = useCallback(
    async (formData: ToolsInterface, { reset }) => {
      try {
        formRef.current?.setErrors({})

        const editedFormData: ToolsInterface = {
          id: uuid(),
          title: formData.title,
          description: formData.description,
          link: formData.link,
          tags: formData.tags.toString() !== '' ? formData.tags.split(',') : ''
        }
        await toolsSchema.validate(editedFormData, { abortEarly: false })

        await handleAddTool(editedFormData)

        handleCloseModal()
        reset()
      } catch (err) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    },
    []
  )

  const handleEdit = useCallback(
    async (formData: ToolsInterface, { reset }) => {
      try {
        console.log(1)
        formRef.current?.setErrors({})
        console.log(2)
        const editedFormData: ToolsInterface = {
          id: currentTool.id,
          title: formData.title,
          description: formData.description,
          link: formData.link,
          tags: formData.tags.toString() !== '' ? formData.tags.split(',') : ''
        }
        console.log(3)
        console.log(editedFormData)
        await toolsSchema.validate(editedFormData, { abortEarly: false })
        console.log(4)
        await api.put(`tools/${currentTool.id}`, editedFormData)
        console.log(5)
        mutateGlobal('tools')

        handleCloseEditModal()
        reset()
      } catch (err) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    },
    []
  )

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
        <AddButton buttonType="primaryNeutral" onClick={handleOpenModal}>
          Add Tool
        </AddButton>
      </Row>
      <FullCardList>
        {data?.map((item, index) => {
          return (
            <FullCardListItem key={`${item.id}_${index}`}>
              <Fade delay={`${index}0`}>
                <FullCard>
                  <Row justify="spaceBetween">
                    {item.link ? (
                      <CardAnchorTitle
                        aria-label={item.title}
                        target="_blank"
                        rel="noopener noreferrer external"
                        href={item.link}
                      >
                        {item.title}
                      </CardAnchorTitle>
                    ) : (
                        <CardTitle>{item.title}</CardTitle>
                      )}
                    <IconsWrapper>
                      <EditButton onClick={() => handleOpenEditModal(item.id)} />
                      <DeleteButton />
                    </IconsWrapper>
                  </Row>
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
      {openModal ? (
        <Modal title="Add new tool" open={openModal} onClose={handleCloseModal}>
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
              <CancelButton buttonType="primaryDanger" onClick={handleCloseModal}>
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
      {openEditModal ? (
        <Modal title="Edit this tool" open={openEditModal} onClose={handleCloseEditModal}>
          <Form initialData={currentTool} ref={formRef} onSubmit={handleEdit}>
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
              <CancelButton buttonType="primaryDanger" onClick={handleCloseEditModal}>
                Cancel
          </CancelButton>
              <ConfirmButton
                buttonType="primarySuccess"
                onClick={() => handleEdit}
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
