import styled from 'styled-components'

import Button from '@/components/Button'
import { Form as StyledForm } from '@unform/web'

export const Form = styled(StyledForm)`
  display: block;
`

export const CancelButton = styled(Button)`
  margin: 10px 0;
`

export const ConfirmButton = styled(Button)`
  margin: 10px 0 10px 10px;
`

export const InfoLabel = styled.label`
  text-align: right;
  font: normal normal normal 14px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: ${props => props.theme.colors.ink};
`
