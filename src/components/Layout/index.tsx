import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

import { Chat } from '@/components/Icons'

import { Container, FloatChat } from './styles'
import { LayoutInterface } from './types'

const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  highlightTitle,
  children
}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  const handleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false)
      return collapsed
    }
    setCollapsed(true)
    return collapsed
  }

  const handleWindowSize = () => {
    if (typeof window.innerWidth === 'number') {
      setWidth(window.innerWidth)
    } else {
      if (document.documentElement && document.documentElement.clientWidth) {
        setWidth(document.documentElement.clientWidth)
      } else {
        if (document.body && document.body.clientWidth) {
          setWidth(document.body.clientWidth)
        }
      }
    }
  }

  useEffect(() => {
    if (width <= 767) {
      setCollapsed(false)
    } else if (width >= 768) {
      setCollapsed(true)
    }
  }, [width])

  useEffect(() => {
    handleWindowSize()
  }, [])

  window.addEventListener('resize', handleWindowSize)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
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
