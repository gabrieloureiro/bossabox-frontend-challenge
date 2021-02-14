import React from 'react'

import { TopbarInterface } from './types'

import {
  Chevronleft,
  Menuitem,
  Logobossabox,
  Chevrondown
} from '@/components/Icons'
import Searchbar from '@/components/SearchBar'

import {
  StyledBar,
  CollapseTrigger,
  LogoWrapper,
  Title,
  UserDropdown,
  Username,
  Avatar,
  AlertNotifications
} from './styles'

const Topbar: React.FC<TopbarInterface> = ({
  highlightTitle,
  collapsed,
  handleCollapsed
}) => {
  return (
    <StyledBar>
      <LogoWrapper>
        <Logobossabox />
      </LogoWrapper>
      <CollapseTrigger onClick={handleCollapsed}>
        {collapsed ? <Chevronleft /> : <Menuitem />}
      </CollapseTrigger>
      <Title>{highlightTitle}</Title>
      <Searchbar />
      <UserDropdown>
        <Username>Dalos</Username>
        <Chevrondown />
      </UserDropdown>
      <Avatar />
      <AlertNotifications />
    </StyledBar>
  )
}

export default Topbar