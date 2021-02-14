import styled from 'styled-components'

import { Col } from '@/components/Col'

interface TagInterface {
  backgroundColor: string
}

export const FullCardList = styled.ul``

export const FullCardListItem = styled.li``

export const FullCard = styled(Col)`
  padding: 24px;
  height: 180px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px #0000000d;
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 20px 25px #0000001a;
    border-color: ${props => props.theme.colors.lightInk};
  }
`
export const CardAnchorTitle = styled.a`
  font-size: 20px;
  width: auto;
  font-weight: bold;
  color: ${props => props.theme.colors.darkBlue};

  &:hover {
    color: ${props => props.theme.colors.ink};
  }
`

export const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.darkBlue};

  &:hover {
    color: ${props => props.theme.colors.ink};
  }
`

export const CardDescription = styled.span`
  margin: 12px 0;
  font-size: 18px;
  color: ${props => props.theme.colors.ink};
`

export const CardTag = styled.span`
  border-radius: 5px;
  padding: 6px 12px;
  margin-right: 12px;
  background: ${(props: TagInterface) => props.backgroundColor};
  color: ${props => props.theme.colors.white};
`
