import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { useDispatch } from 'react-redux'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Container from '@/components/Container'
import { Chat } from '@/components/Icons'

import { FloatChat, Message } from './styles'

import { LayoutInterface } from './types'
import { readSearchValue } from '@/store/modules/search/actions'

const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  highlightTitle,
  children
}) => {
  const [collapsed, setCollapsed] = useState(true)
  const dispatch = useDispatch()
  const [searchableTool, setSearchableTool] = useState('')
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
    dispatch(readSearchValue(searchableTool))
  }, [dispatch])

  useEffect(() => {
    if (width <= 767) {
      setCollapsed(false)
    } else {
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
        value={searchableTool}
        defaultValue={searchableTool}
        onChange={(tool: any) => setSearchableTool(tool)}
        highlightTitle={highlightTitle}
        collapsed={collapsed}
        handleCollapsed={handleCollapsed}
      />
      <Container sideBarCollapsed={collapsed}>{children}</Container>
      <FloatChat
        aria-label="whatsapp"
        target="_blank"
        rel="noopener noreferrer external"
        href="https://api.whatsapp.com/send?phone=5585999134041"
      >
        <Message>
          Hello, my name is <strong>Gabriel Loureiro</strong>. Did you enjoy my
          job? Click here or in the button below and talk to me!
        </Message>
        <Chat />
      </FloatChat>
    </>
  )
}

export default Layout
