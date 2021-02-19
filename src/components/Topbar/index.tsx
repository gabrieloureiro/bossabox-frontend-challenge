import React from 'react'

import { TopbarInterface } from './types'

import {
  Chevronleft,
  Menuitem,
  Logobossabox,
  Chevrondown
} from '@/components/Icons'

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
import Searchbar from '../SearchBar'

const Topbar: React.FC<TopbarInterface> = ({
  highlightTitle,
  collapsed,
  value,
  defaultValue,
  onChange,
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
      <Searchbar
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <UserDropdown>
        <Username>Gabriel</Username>
        <Chevrondown />
      </UserDropdown>
      <Avatar src="/images/gl.jpg" alt="avatar" />
      <AlertNotifications />
    </StyledBar>
  )
}

export default Topbar
