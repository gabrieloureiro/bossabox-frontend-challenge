import React from 'react'
import Link from 'next/link'

import { SidebarInterface } from './types'

import AVAILABLE_ROUTES from '@/services/contentProvider'

import {
  StyledSidebar,
  Navigation,
  NavigationItem,
  NavigationList
} from './styles'

const Sidebar: React.FC<SidebarInterface> = ({ collapsed }) => {
  return (
    <StyledSidebar collapsed={!collapsed}>
      <Navigation>
        <NavigationList>
          {AVAILABLE_ROUTES.map((item, index) => {
            return (
              <NavigationItem key={item.icon + index}>
                <Link href={item.path}>{item.title}</Link>
              </NavigationItem>
            )
          })}
        </NavigationList>
      </Navigation>
    </StyledSidebar>
  )
}

export default Sidebar
