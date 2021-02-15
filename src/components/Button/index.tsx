import React from 'react'

import { ButtonInterface } from './types'

import { StyledButton } from './styles'

const Button: React.FC<ButtonInterface> = ({
  buttonType,
  children,
  ...rest
}: ButtonInterface) => {
  return (
    <StyledButton buttonType={buttonType} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
