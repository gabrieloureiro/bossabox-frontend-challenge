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
import { useBanner } from '@/hooks/useBanner'

const Topbar: React.FC<TopbarInterface> = ({
  highlightTitle,
  collapsed,
  value,
  defaultValue,
  onChange,
  handleCollapsed
}) => {
  const { addBanner } = useBanner()

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
      <UserDropdown
        onClick={() =>
          addBanner({
            title: "Ops! This doesn't work",
            description:
              "This component doesn't have a onClick event, please contact the creator of platform",
            type: 'warning'
          })
        }
      >
        <Username>Gabriel</Username>
        <Chevrondown />
      </UserDropdown>
      <Avatar
        src="/images/gl.jpg"
        alt="avatar"
        onClick={() =>
          addBanner({
            title: 'Hey! Do you like me? ;)',
            description: 'Check the About me page and contact',
            type: 'warning'
          })
        }
      />
      <AlertNotifications
        onClick={() =>
          addBanner({
            title: 'Do you want see notifications?',
            description:
              "Sorry. This paltform it's ficticious, but, if you hire me, I do it for you",
            type: 'warning'
          })
        }
      />
    </StyledBar>
  )
}

export default Topbar
