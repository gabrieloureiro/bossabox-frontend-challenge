/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components'
import { ContainerInterface } from './types'

const fadeout = keyframes`
  from   { opacity: 1; visibility: visible; transform: translateX(0px) }
  to { opacity: 0; visibility: hidden; transform: translateX(12px) }
`

export const StyledContainer = styled.div`
  display: block;
  max-width: 100%;
  min-height: 100%;
  padding: 124px 24px 24px;
  background: ${props => props.theme.colors.darkWhite};
  transition: padding 0.5s ease;

  .banner-opened {
    animation: ${fadeout} 1s;
  }

  @media screen and (min-width: 767px) {
    padding: ${({ sideBarCollapsed }: ContainerInterface) =>
    sideBarCollapsed ? '124px 24px 24px 124px' : '124px 24px 24px 24px'};
  }
`
