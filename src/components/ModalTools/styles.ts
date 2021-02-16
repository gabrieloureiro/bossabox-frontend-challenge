import styled from 'styled-components'

import Button from '@/components/Button'
import { Form as StyledForm } from '@unform/web'

export const Form = styled(StyledForm)`
  display: block;
`

export const CancelButton = styled(Button)`
  margin-bottom: 12px;
`

export const ConfirmButton = styled(Button)`
  margin: 0 0 12px 12px;
`
