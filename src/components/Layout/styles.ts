/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { ContainerInterface } from './types'

export const Container = styled.div`
  display: block;
  max-width: 100%;
  min-height: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
  padding: 124px 24px 24px;
  background: ${props => props.theme.colors.darkWhite};
  transition: padding 0.5s;

  @media screen and (min-width: 767px) {
    padding: ${({ sideBarCollapsed }: ContainerInterface) =>
    sideBarCollapsed ? '124px 24px 24px 124px' : '124px 24px 24px 24px'};
  }
`
