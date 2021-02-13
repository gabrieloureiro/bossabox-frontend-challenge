import React from 'react'

import { ButtonInterface } from './types'

import { StyledButton } from './styles'

const Button: React.FC<ButtonInterface> = ({
  buttonType,
  children,
  disabled,
  ...rest
}: ButtonInterface) => {
  return (
    <StyledButton buttonType={buttonType} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
