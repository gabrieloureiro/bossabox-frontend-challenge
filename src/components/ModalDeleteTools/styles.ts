import styled from 'styled-components'

import Button from '@/components/Button'

export const Message = styled.span`
  font-size: 16px;
  display: block;
  height: calc(100% - 135px);
  color: ${props => props.theme.colors.ink};
`
export const CancelButton = styled(Button)`
  margin: 10px 0;
`

export const ConfirmButton = styled(Button)`
  margin: 10px 0 10px 10px;
`
