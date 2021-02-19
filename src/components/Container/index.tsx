import React from 'react'

import { StyledContainer } from './styles'

import { ContainerInterface } from './types'

const Container: React.FC<ContainerInterface> = ({
  children,
  sideBarCollapsed
}) => {
  return (
    <StyledContainer sideBarCollapsed={sideBarCollapsed}>
      <main>{children}</main>
    </StyledContainer>
  )
}

export default Container
