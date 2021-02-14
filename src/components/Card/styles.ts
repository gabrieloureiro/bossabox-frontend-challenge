import styled from 'styled-components'

import { CardInterface } from './types'

export const StyledCard = styled.div`
  box-shadow: ${(props: CardInterface) => handleElevation(props.elevation)};
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  border-radius: 5px;
  width: 387px;
  height: 283px;
  padding: 16px;
`

const handleElevation = (elevation: string) => {
  switch (elevation) {
    case '1': {
      return '0px 5px 7px #0000000D'
    }
    case '2': {
      return '0px 10px 10px #0000000D'
    }
    case '3': {
      return '0px 15px 20px #00000012'
    }
    case '4': {
      return '0px 20px 25px #0000001A'
    }
    default: {
      return 'none'
    }
  }
}
