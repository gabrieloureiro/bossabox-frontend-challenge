import styled from 'styled-components'

import Button from '@/components/Button'
import { Col } from '@/components/Col'
import { Form as StyledForm } from '@unform/web'
import { Delete, Edit } from '@/components/Icons'

interface TagInterface {
  backgroundColor: string
}

export const AddButton = styled(Button)`
  margin-left: auto;
`

export const Form = styled(StyledForm)`
  display: block;
`

export const CancelButton = styled(Button)`
  margin-bottom: 12px;
`

export const ConfirmButton = styled(Button)`
  margin: 0 0 12px 12px;
`

export const IconsWrapper = styled.div``

export const EditButton = styled(Edit)`
  fill: ${props => props.theme.colors.lightInk};
  cursor: pointer;

  &:hover {
    fill: ${props => props.theme.colors.darkerYellow};
  }
`

export const DeleteButton = styled(Delete)`
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke: ${props => props.theme.colors.lightInk};
  margin-left: 12px;
  cursor: pointer;

  &:hover {
    stroke: ${props => props.theme.colors.darkerRed};
  }
`

export const FullCard = styled(Col)`
  padding: 24px;
  min-height: 180px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px #0000000d;
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  transition: all 0.5s ease;

  &:hover {
    transform: translateX(5px);
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
  margin: 0 12px 12px 0;
  background: ${(props: TagInterface) => props.backgroundColor};
  color: ${props => props.theme.colors.white};
`

export const ContainerTitle = styled.h2``

export const FullCardList = styled.ul``

export const FullCardListItem = styled.li``
