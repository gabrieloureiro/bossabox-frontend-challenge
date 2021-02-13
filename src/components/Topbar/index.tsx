import React from 'react'

import { TopbarInterface } from './types'
import { StyledBar, CollapseTrigger, BossaBoxLogo } from './styles'

const Topbar: React.FC<TopbarInterface> = ({ collapsed, handleCollapsed }) => {
  return (
    <StyledBar>
      <BossaBoxLogo />
      <CollapseTrigger onClick={handleCollapsed}>
        {collapsed ? <p>aberto</p> : <p>fechado</p>}
      </CollapseTrigger>
    </StyledBar>
  )
}

export default Topbar
