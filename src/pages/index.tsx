/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'

import api from '@/services/api'
import { useFetch } from '@/hooks/useFetch'

import { useSelector, useDispatch } from 'react-redux'
import { readTools } from '@/store/modules/tools/actions'

import { ToolsInterface } from '@/models/tools'
import { StateInterface } from '@/store'

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
  IconsWrapper,
  EditButton,
  DeleteButton
} from '@/styles/pages/Home'
import { getCurrentTool } from '@/store/modules/currentTool/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const { data, mutate } = useFetch<ToolsInterface[]>('tools')
  const allTools = useSelector<StateInterface, ToolsInterface[]>(
    state => state.tools
  )
  const currentTool = useSelector<StateInterface, ToolsInterface>(
    state => state.currentTool
  )

  useEffect(() => {
    if (data) {
      dispatch(readTools(data))
    }
  }, [data, dispatch])

  const handleOpenModal = (): void => {
    setOpenModal(true)
  }

  const handleCloseModal = (): void => {
    setOpenModal(false)
  }

  const handleCloseEditModal = (): void => {
    setOpenEditModal(false)
  }

  const handleOpenEditModal = useCallback(async (tool: ToolsInterface) => {
    dispatch(getCurrentTool(tool))
    const editedData = {
      id: currentTool.id,
      title: currentTool.title,
      description: currentTool.description,
      link: currentTool.link,
      tags: currentTool.tags?.toString()
    }
    setOpenEditModal(true)
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
                    <IconsWrapper>
                      <EditButton onClick={() => handleOpenEditModal(item)} />
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
        <ModalTools
          title="Add a tool"
          open={openModal}
          onClose={handleCloseModal}
        />
      ) : null}
      {openEditModal ? (
        <ModalTools
          title="Edit this tool"
          initialData={currentTool}
          open={openEditModal}
          onClose={handleCloseEditModal}
        />
      ) : null}
    </Layout>
  )
}

export default Home
