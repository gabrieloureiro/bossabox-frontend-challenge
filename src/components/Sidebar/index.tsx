/* eslint-disable prettier/prettier */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SidebarInterface } from './types'

import AVAILABLE_ROUTES from '@/services/contentProvider'

import { Roadmap, Send, Stackes, Settings, Help } from '@/components/Icons'
import {
  StyledSidebar,
  Navigation,
  NavigationItem,
  NavigationList,
  Tooltip
} from './styles'
import { useBanner } from '@/hooks/useBanner'

const Sidebar: React.FC<SidebarInterface> = ({ collapsed }) => {
  const router = useRouter()
  const { addBanner } = useBanner()

  const icons = {
    roadmap: <Roadmap />,
    stackes: <Stackes />,
    send: <Send />,
    settings: <Settings />,
    help: <Help />
  }

  return (
    <StyledSidebar collapsed={!collapsed}>
      <Navigation>
        <NavigationList>
          {AVAILABLE_ROUTES.map((item, index) => {
            return (
              <Link key={item.icon + index} href={item.path}>
                <NavigationItem
                  activeRoute={router.pathname === item.path}
                  key={item.icon + index}
                  onClick={() => {
                    return !item.path
                      ? addBanner({
                        title: "This page doesn't exists",
                        description: `The page ${item.title} doesn't a pathname, please contact the creator of platform.`,
                        type: 'warning'
                      })
                      : {}
                  }}
                >
                  {icons[item.icon]}
                  {item.icon && item.title && <Tooltip>{item.title}</Tooltip>}
                </NavigationItem>
              </Link>
            )
          })}
        </NavigationList>
      </Navigation>
    </StyledSidebar>
  )
}

export default Sidebar
