import React from 'react'

import Layout from '@/components/Layout'
import { Card } from '@/components/Card'
import { Row } from '@/components/Row'

const Cards: React.FC = () => {
  return (
    <Layout title="Cards" highlightTitle="Cards">
      <Row>
        <Card />
        <Card elevation="1" />
        <Card elevation="2" />
        <Card elevation="3" />
        <Card elevation="4" />
      </Row>
    </Layout>
  )
}

export default Cards
