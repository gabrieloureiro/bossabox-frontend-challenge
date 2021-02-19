/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { ContainerInterface } from './types'

export const StyledContainer = styled.div`
  display: block;
  max-width: 100%;
  min-height: 100%;
  padding: 124px 24px 24px;
  background: ${props => props.theme.colors.darkWhite};
  transition: padding 0.5s ease;

  @media screen and (min-width: 767px) {
    padding: ${({ sideBarCollapsed }: ContainerInterface) =>
    sideBarCollapsed ? '124px 24px 24px 124px' : '124px 24px 24px 24px'};
  }
`
