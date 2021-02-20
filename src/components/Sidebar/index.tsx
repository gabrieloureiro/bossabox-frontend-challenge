import React from 'react'

import Link from 'next/link'
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
              <NavigationItem
                activeRoute={window.location.pathname === item.path}
                key={item.icon + index}
              >
                {item.path && item.icon && item.title && (
                  <Tooltip>{item.title}</Tooltip>
                )}
                <Link href={item.path}>{handleIcon(item.icon)}</Link>
              </NavigationItem>
            )
          })}
        </NavigationList>
      </Navigation>
    </StyledSidebar>
  )
}

export default Sidebar
