import styled, { keyframes } from 'styled-components'

import { LoaderInterface } from './types'
const load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const handleSize = (size: string) => {
  switch (size) {
    case 'small': {
      return '35px'
    }
    case 'large': {
      return '130px'
    }
    default: {
      return '70px'
    }
  }
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.mostDarkestWhite};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(106,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23244aa8'/%3E%3Cstop offset='1' stop-color='%239aaef7'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(42,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23170c3a'/%3E%3Cstop offset='1' stop-color='%238f8a9b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='22.439999999999998'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='7.48' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='6.8'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='14.96' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`

export const StyledLoader = styled.div`
  border-radius: 50%;
  width: ${(props: LoaderInterface) => handleSize(props.size)};
  height: ${(props: LoaderInterface) => handleSize(props.size)};
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid ${props => props.theme.colors.blue};
  border-right: 5px solid ${props => props.theme.colors.blue};
  border-bottom: 5px solid ${props => props.theme.colors.blue};
  border-left: 5px solid transparent;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load} 1s infinite linear;
  animation: ${load} 1s infinite linear;

  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`
