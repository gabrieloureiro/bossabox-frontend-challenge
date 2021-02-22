import styled from 'styled-components'

import { SidebarInterface, ItemInterface } from './types'

export const StyledSidebar = styled.div`
  background: ${props => props.theme.colors.white} 0% 0% no-repeat padding-box;
  width: 101px;
  position: fixed;
  height: calc(100% - 100px);
  text-align: center;
  z-index: 2;
  border-right: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  top: 100px;
  left: 0;
  padding: 30.5px 0;
  transition: all 0.5s ease-out;
  transform: ${(props: SidebarInterface) =>
    props.collapsed ? 'translateX(-100px)' : 'translateX(0px)'};

  @media screen and (max-height: 531px) {
    overflow-y: auto;
  }
`
export const Navigation = styled.nav``

export const NavigationList = styled.ul``

export const NavigationItem = styled.li`
  margin-bottom: 39.39px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  position: relative;

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
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }

  ${(props: ItemInterface) =>
    props.activeRoute &&
    `


    &::before {
      content: '';
      width: 4px;
      height: 28px;
      background: #170C3A;
      border-radius: 12px;
      position: absolute;
      top: 42.5%;
      right: 0;
      transform: translateY(-50%);
    }

    &:hover {
      &::before {
        background: #365DF0;
      }
    }

  `}

  @media screen and (max-height: 531px) {
    &:nth-last-child(-n + 2),
    &:last-child {
      position: unset;
    }
  }
`

export const Tooltip = styled.div`
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100px;
  line-height: 20px;
  font-size: 14px;
  background: ${props => props.theme.colors.darkWhite};
  z-index: 10;
  opacity: 0;
  padding: 6px;
  border: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  transition: 300ms linear;
  border-radius: 5px;
  left: 110px;
  top: -10px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -4px;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors.darkWhite};
    border-bottom: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
    border-left: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  }
`
