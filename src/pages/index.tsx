/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'

import api from '@/services/api'
import { useFetch } from '@/hooks/useFetch'
import { mutate as mutateGlobal } from 'swr'
import { useSelector, useDispatch } from 'react-redux'

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
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { readTools } from '@/store/modules/tools/actions'
import Switch from '@/components/Switch'
import ModalDeleteTools from '@/components/ModalDeleteTools'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [currentTool, setCurrentTool] = useState<ToolsInterface>(
    {} as ToolsInterface
  )
  const [filterByTag, setFilterByTag] = useState(false)
  const { data } = useFetch<ToolsInterface[]>('tools')

  const searchValue = useSelector<GlobalStateInterface, string>(state =>
    state.search.toLowerCase()
  )
  const tools = useSelector<GlobalStateInterface, ToolsInterface[]>(state =>
    state.tools.filter(tool => {
      return !filterByTag
        ? tool.title.toLowerCase().includes(searchValue) ||
        tool.description.toLowerCase().includes(searchValue) ||
        tool.tags.toString().toLowerCase().includes(searchValue)
        : tool.tags.toString().toLowerCase().includes(searchValue)
    })
  )

  useEffect(() => {
    if (data) {
      dispatch(readTools(data))
    }
  }, [data, dispatch])

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
      highlightTitle="VUTTR"
      description="Get to know the best and most useful tools to development"
    >
      <Row wrap align="center" justify="spaceAround">
        <ContainerTitle>Very Useful Tools to Remember</ContainerTitle>
        <Switch
          isOn={filterByTag}
          handleToggle={() => setFilterByTag(!filterByTag)}
        />
        <AddButton
          buttonType="primaryNeutral"
          onClick={() => setOpenModal(true)}
        >
          Add Tool
        </AddButton>
      </Row>
      <FullCardList>
        {tools?.map((item, index) => {
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
                    <DeleteButton
                      onClick={() => {
                        setOpenDeleteModal(true)
                        setCurrentTool(item)
                      }}
                    />
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
          onClose={() => setOpenModal(false)}
        />
      ) : null}
      {openDeleteModal ? (
        <ModalDeleteTools
          title="Remove tool"
          toolTitle={currentTool.title}
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          onConfirm={() => {
            handleDeleteTool(currentTool)
            setOpenDeleteModal(false)
          }}
        />
      ) : null}
    </Layout>
  )
}

export default Home
