/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'

import api from '@/services/api'
import { useFetch } from '@/hooks/useFetch'
import { mutate as mutateGlobal } from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { readTools } from '@/store/modules/tools/actions'

import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { ToolsInterface } from '@/models/tools'

import selectColor from '@/utils/selectColor'

import Layout from '@/components/Layout'
import ModalTools from '@/components/ModalTools'
import Loader from '@/components/Loader'
import Tag from '@/components/Tag'
import Switch from '@/components/Switch'
import ModalDeleteTools from '@/components/ModalDeleteTools'
import { Row } from '@/components/Row'
import { Fade } from 'react-reveal'

import {
  FullCardList,
  FullCardListItem,
  FullCard,
  CardAnchorTitle,
  CardTitle,
  CardDescription,
  ContainerTitle,
  AddButton,
  DeleteButton
} from '@/styles/pages/Home'
import { useBanner } from '@/hooks/useBanner'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { data } = useFetch('tools')
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [currentTool, setCurrentTool] = useState<ToolsInterface>(
    {} as ToolsInterface
  )
  const [filterByTag, setFilterByTag] = useState(false)
  const { addBanner } = useBanner()
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

  const handleDeleteTool = useCallback(
    async (tool: ToolsInterface) => {
      await api.delete(`tools/${tool.id}`, { data: tool }).then(response => {
        if (response.status === 200) {
          addBanner({
            title: 'This was a complete success',
            description: `The tool ${tool.title} was deleted with success.`,
            type: 'success'
          })
        } else {
          addBanner({
            title: 'An error just happened!',
            description: `The tool ${tool.title} has  not been deleted.`,
            type: 'error'
          })
        }
      })
      mutateGlobal('tools', false)
    },
    [data]
  )

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="Home | Very Useful Tools to Remember"
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
              <Fade delay={Number(`${index}0`)}>
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
                        <Tag
                          key={`${tag}_${index}`}
                          textColor="#fff"
                          backgroundColor={`${selectColor(
                            Math.floor(Math.random() * 999),
                            10
                          )}`}
                        >
                          {tag}
                        </Tag>
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
