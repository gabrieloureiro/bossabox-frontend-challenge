import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { stackes } from '@/models/stackes'

import Tag from '@/components/Tag'
import { Col } from '@/components/Col'
import { Row } from '@/components/Row'
import { Fade } from 'react-reveal'

import {
  GithubIcon,
  Image,
  LargeText,
  LinkedinIcon,
  MediumText,
  SmallText,
  Anchor
} from '@/styles/pages/About'
import BannerNotification from '@/components/BannerNotification'
import { useBanner } from '@/hooks/useBanner'

const Layout = dynamic(() => import('@/components/Layout'), { ssr: false })

const Stackes: React.FC = () => {
  // const [openBanner, setOpenBanner] = useState(true)
  // const [closeBanner, setCloseBanner] = useState(false)
  const { addBanner } = useBanner()

  useEffect(() => {
    addBanner()
  }, [])

  return (
    <Layout
      title="About me | Gabriel Loureiro"
      highlightTitle="About me"
      description="Some info about the creator of platform"
    >
      <Col justify="center" align="center">
        <Fade>
          <Image src="/images/gl-@2x.jpg" alt="avatar-stackes" />
        </Fade>
        <Fade delay={50}>
          <LargeText>Gabriel Loureiro</LargeText>
        </Fade>
        <Fade delay={100}>
          <MediumText
            style={{ color: '#ccc', marginBottom: '0', fontSize: '20px' }}
          >
            Frontend Developer
          </MediumText>
        </Fade>
        <Fade delay={150}>
          <SmallText>Brazilian, single, 22 years</SmallText>
        </Fade>
        <Fade delay={200}>
          <Row wrap justify="center" align="center">
            <Anchor
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer external"
              href="https://www.linkedin.com/in/gabrieloureiro/"
            >
              <LinkedinIcon />
            </Anchor>
            <Anchor
              aria-label="github"
              target="_blank"
              rel="noopener noreferrer external"
              href="https://github.com/gabrieloureiro"
            >
              <GithubIcon />
            </Anchor>
          </Row>
        </Fade>
        <Fade delay={250}>
          <MediumText>I have knowledge in</MediumText>
        </Fade>
        <Row wrap justify="center" align="center" style={{ maxWidth: '500px' }}>
          {stackes.map((item, index) => {
            return (
              <Tag
                key={`${item.name}_${index}`}
                textColor={item.textColor}
                backgroundColor={item.backgroundColor}
              >
                <Fade delay={Number(`${index}0`)}>{item.name}</Fade>
              </Tag>
            )
          })}
        </Row>
        {/* <BannerNotification
            className={closeBanner ? 'banner-opened' : ''}
            title="Hey! Changing the scope."
            bannerType="info"
            onClose={() => setOpenBanner(false)}
            message="This page is not part of the scope of the project."
          />
        ) : null} */}
      </Col>
    </Layout>
  )
}

export default Stackes
