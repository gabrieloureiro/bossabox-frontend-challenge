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

const Sidebar: React.FC<SidebarInterface> = ({ collapsed }) => {
  const router = useRouter()

  const handleIcon: React.FC<string> = (icon: string) => {
    switch (icon) {
      case 'roadmap': {
        return <Roadmap />
      }
      case 'stackes': {
        return <Stackes />
      }
      case 'send': {
        return <Send />
      }
      case 'settings': {
        return <Settings />
      }
      case 'help': {
        return <Help />
      }
      default: {
        return null
      }
    }
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
                >
                  {handleIcon(item.icon)}
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
