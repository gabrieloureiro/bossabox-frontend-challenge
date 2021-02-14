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
  transition: padding 0.5s ease;

  @media screen and (min-width: 767px) {
    padding: ${({ sideBarCollapsed }: ContainerInterface) =>
    sideBarCollapsed ? '124px 24px 24px 124px' : '124px 24px 24px 24px'};
  }
`

export const FloatChat = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  padding: 14px 12.5px 14.25px 12px;
  background: ${props => props.theme.colors.blue}
    0% 0% no-repeat padding-box;
  border-radius: 5px;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.ink};
  }
`
