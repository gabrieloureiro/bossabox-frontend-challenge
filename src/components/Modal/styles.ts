import styled from 'styled-components'

import { ModalInterface } from './types'

import { Close } from '@/components/Icons'

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 5;
`

export const ModalHolder = styled.div`
  padding: 30px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 20px 25px #0000001a;
  overflow: hidden;
  width: ${({ size }: ModalInterface) => handleSize(size).width};
  height: ${({ size }: ModalInterface) => handleSize(size).height};
  border-radius: 5px;
  overflow-y: auto;

  @media screen and (max-width: 632px) {
    width: calc(100vw - 64px);
    margin: 0 24px;
  }
`

export const ModalTitle = styled.h5`
  color: ${props => props.theme.colors.ink};
  margin: 0;
`

export const CloseIcon = styled(Close)`
  stroke: ${props => props.theme.colors.lightInk};
  cursor: pointer;
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  &:hover {
    stroke: ${props => props.theme.colors.red};
  }
`
const handleSize = (size: string) => {
  switch (size) {
    case 'primary': {
      return {
        width: '570px',
        height: '616px'
      }
    }
    case 'danger': {
      return {
        width: '400px',
        height: '332px'
      }
    }
    case 'small': {
      return {
        width: '400px',
        height: '332px'
      }
    }
    case 'large': {
      return {
        width: '960px',
        height: '283px'
      }
    }
    default: {
      return {
        width: '570px',
        height: '616px'
      }
    }
  }
}
