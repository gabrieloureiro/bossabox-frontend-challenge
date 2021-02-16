/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'

import api from '@/services/api'
import { useFetch } from '@/hooks/useFetch'
import { mutate as mutateGlobal } from 'swr'

import { ToolsInterface } from '@/models/tools'

import selectColor from '@/utils/selectColor'

import Layout from '@/components/Layout'
import ModalTools from '@/components/ModalTools'
import Loader from '@/components/Loader'
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
  DeleteButton
} from '@/styles/pages/Home'

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const { data } = useFetch<ToolsInterface[]>('tools')

  const handleOpenModal = (): void => {
    setOpenModal(true)
  }

  const handleCloseModal = (): void => {
    setOpenModal(false)
  }

  const handleDeleteTool = useCallback(async (tool: ToolsInterface) => {
    await api.delete(`tools/${tool.id}`, { data: tool })
    mutateGlobal('tools', false)
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
                    <DeleteButton onClick={() => handleDeleteTool(item)} />
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
        <ModalTools
          title="Add a tool"
          open={openModal}
          onClose={handleCloseModal}
        />
      ) : null}
    </Layout>
  )
}

export default Home
