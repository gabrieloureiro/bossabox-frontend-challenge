/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

import { animated } from 'react-spring'

import theme from '@/styles/theme'

import { CheckCircle, Close, Danger, Info, Warning } from '@/components/Icons'

import { HolderProps, ButtonProps } from './types'

export const Holder = styled(animated.div) <HolderProps>`
  position: relative;

  width: 489px;
  min-height: 253px;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001a;

  & + div {
    margin-top: 12px;
  }

  @media screen and (max-width: 542px) {
    width: 100%;
  }

  ${props => bannerVariations[props.type || '']}
`
export const Title = styled.span<HolderProps>`
  text-align: left;
  font: normal normal 600 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  padding: 0 12px 0 60px;

  @media screen and (max-width: 319px) {
    padding-left: 35px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 293px) {
    font-size: 14px;
    line-height: 18px;
  }

  ${props => bannerVariations[props.type || '']}
`

export const Description = styled.span<HolderProps>`
  text-align: left;
  padding: 30px 0 30px 60px;
  font: normal normal normal 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;

  @media screen and (max-width: 319px) {
    padding-left: 35px;
  }

  @media screen and (max-width: 293px) {
    padding: 30px 0;
  }
`

export const Button = styled.button<ButtonProps>`
  outline: 0;
  border: 0;
  font-weight: bold;
  width: 158px;
  height: 35px;
  padding: 6px 18px;
  border-radius: 5px;
  margin-left: 60px;

  @media screen and (max-width: 319px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 293px) {
    margin: 0 auto;
  }
`

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke: ${(props: HolderProps) =>
    props.type === 'neutral' ? theme.colors.lightInk : theme.colors.white};
`
export const WarningIcon = styled(Warning) <HolderProps>`
  position: absolute;
  top: 32px;
  left: 32px;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  ${props => bannerVariations[props.type || '']}
`
export const DangerIcon = styled(Danger) <HolderProps>`
  position: absolute;
  top: 32px;
  left: 32px;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  ${props => bannerVariations[props.type || '']}
`

export const InfoIcon = styled(Info) <HolderProps>`
  position: absolute;
  top: 32px;
  left: 32px;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  ${props => bannerVariations[props.type || '']}
`

export const CheckCircleIcon = styled(CheckCircle) <HolderProps>`
  position: absolute;
  top: 32px;
  left: 32px;
  stroke-miterlimit: 10;
  stroke-width: 2px;

  ${props => bannerVariations[props.type || '']}
`

const bannerVariations = {
  info: css`
    background: ${props => props.theme.colors.lighterInk};
    color: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.lighterInk};
    fill: ${props => props.theme.colors.white};

    button {
      background: ${props => props.theme.colors.darkestWhite};
      color: ${props => props.theme.colors.lighterInk};
    }
  `,
  success: css`
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.green};
    fill: ${props => props.theme.colors.white};

    button {
      background: ${props => props.theme.colors.mostLightestGreen};
      color: ${props => props.theme.colors.green};
    }
  `,

  error: css`
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.red};
    fill: ${props => props.theme.colors.white};

    button {
      background: ${props => props.theme.colors.mostLightestRed};
      color: ${props => props.theme.colors.red};
    }
  `,
  warning: css`
    background: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.yellow};
    fill: ${props => props.theme.colors.white};

    button {
      background: ${props => props.theme.colors.lighterYellow};
      color: ${props => props.theme.colors.yellow};
    }
  `,
  neutral: css`
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.ink};

    span {
      padding-left: 0;
    }

    span + span {
      color: ${props => props.theme.colors.lightInk};
    }

    button {
      background: ${props => props.theme.colors.mostLightestBlue};
      color: ${props => props.theme.colors.blue};
      margin-left: 0;
    }
  `
}
