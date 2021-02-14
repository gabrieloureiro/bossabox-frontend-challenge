/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '@/hooks/useFetch'

import { ToolsInterface } from '@/@types/tools'

import selectColor from '@/utils/selectColor'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { Row } from '@/components/Row'

import {
  FullCardList,
  FullCardListItem,
  FullCard,
  CardAnchorTitle,
  CardTitle,
  CardDescription,
  CardTag
} from '@/styles/pages/Home'

const Home: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch<ToolsInterface[]>('tools')

  if (!data) {
    return <Loader />
  }

  return (
    <Layout title="VUTTR | Very Useful Tools to Remember" highlightTitle="Very Useful Tools to Remember">
      <h2></h2>
      <FullCardList>
        {data.map((item, index) => {
          return (
            <FullCardListItem key={`${item.id}_${index}`}>
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
                        backgroundColor={`${selectColor(
                          Math.floor(Math.random() * 999),
                          10
                        )}`}
                        key={`${tag}_${index}`}
                      >
                        {tag}
                      </CardTag>
                    )
                  })}
                </Row>
              </FullCard>
            </FullCardListItem>
          )
        })}
      </FullCardList>
    </Layout>
  )
}

export default Home
