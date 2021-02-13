import styled from 'styled-components'
import { SidebarInterface } from './types'

export const StyledSidebar = styled.div`
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  width: 101px;
  position: fixed;
  height: calc(100% - 100px);
  text-align: center;
  z-index: 2;
  border-right: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  top: 99px;
  left: 0;
  padding: 30.5px 0;
  transition: all 0.5s ease-out;
  transform: ${(props: SidebarInterface) =>
    props.collapsed ? 'translateX(-100px)' : 'translateX(0px)'};
`
export const Navigation = styled.nav``

export const NavigationList = styled.ul``

export const NavigationItem = styled.li`
  margin-bottom: 39.39px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:nth-last-child(-n + 2) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 105px;
  }

  &:last-child {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 35px;
  }

  &:hover {
    transform: translateY(-3px);
  }
`

export const IconWrapper = styled.div``
