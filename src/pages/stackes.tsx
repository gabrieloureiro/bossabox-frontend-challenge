import React from 'react'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/Layout'), { ssr: false })

const Stackes: React.FC = () => {
  return (
    <Layout
      title="Stackes | Gabriel Loureiro"
      highlightTitle="About me"
      description="Some info about the creator of platform"
    >
      <span>a</span>
    </Layout>
  )
}

export default Stackes
