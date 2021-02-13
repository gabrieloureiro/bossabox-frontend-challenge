import React, { useState } from 'react'
import Head from 'next/head'

import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

import { Container } from './styles'
import { LayoutInterface } from './types'

const Layout: React.FC<LayoutInterface> = ({ title, children }) => {
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
      <Topbar collapsed={collapsed} handleCollapsed={handleCollapsed} />
      <Container sideBarCollapsed={collapsed}>{children}</Container>
    </>
  )
}

export default Layout
