import styled from 'styled-components'
import { SidebarInterface } from './types'

export const StyledSidebar = styled.div`
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  width: 100px;
  position: fixed;
  height: calc(100% - 64px);
  text-align: center;
  z-index: 5;
  border: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  top: 64px;
  padding: 12px 0;
  transition: all 0.5s ease-out;
  transform: ${(props: SidebarInterface) =>
    props.collapsed ? 'translateX(-100px)' : 'translateX(0px)'};
`
export const Navigation = styled.nav``

export const NavigationList = styled.ul``

export const NavigationItem = styled.li`
  margin: 0 6px;
  margin-bottom: 22px;
  transition: all 0.2s ease;

  &:last-child {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    transform: translateY(-3px);
  }
`
