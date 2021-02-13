import React from 'react'

import { TopbarInterface } from './types'

import { Chevronleft, Menuitem, Logobossabox } from '@/components/Icons'

import { StyledBar, CollapseTrigger, LogoWrapper, Title } from './styles'

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
    </StyledBar>
  )
}

export default Topbar
