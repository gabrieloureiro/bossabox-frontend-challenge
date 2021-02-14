import React, { useState } from 'react'
import Head from 'next/head'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

import { Chat } from '@/components/Icons'

import { Container, FloatChat } from './styles'
import { LayoutInterface } from './types'

const Layout: React.FC<LayoutInterface> = ({
  title,
  highlightTitle,
  children
}) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false)
      return collapsed
    }
    setCollapsed(true)
    return collapsed
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar collapsed={collapsed} />
      <Topbar
        highlightTitle={highlightTitle}
        collapsed={collapsed}
        handleCollapsed={handleCollapsed}
      />
      <Container sideBarCollapsed={collapsed}>
        <main>{children}</main>
      </Container>
      <FloatChat>
        <Chat />
      </FloatChat>
    </>
  )
}

export default Layout
