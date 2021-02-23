import styled from 'styled-components'

import theme from '@/styles/theme'

import { CheckCircle, Close, Danger, Info, Warning } from '@/components/Icons'
import { Row as StyledRow } from '../Row'

import { BannerNotificationInterface, HandleType } from './types'

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  padding: 24px;

  @media screen and (max-width: 542px) {
    padding: 16px;
  }
`

export const BannerHolder = styled.div`
  position: relative;
  z-index: 999;

  width: 489px;
  min-height: 253px;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  background: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).background};
  color: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001a;

  & + div {
    margin-top: 12px;
  }

  @media screen and (max-width: 542px) {
    /* padding: 24px; */
    width: 100%;
  }
`
export const Title = styled.span`
  text-align: center;
  font: normal normal 600 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
`

export const Message = styled.span`
  text-align: left;
  padding-left: 96px;
  font: normal normal normal 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
`

export const Button = styled.button`
  outline: 0;
  border: 0;
  font-weight: bold;
  width: 158px;
  height: 35px;
  padding: 6px 18px;
  border-radius: 5px;
  background: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).buttonBackground};
  color: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).buttonColor};
`

export const Row = styled(StyledRow)`
  @media screen and (max-width: 351px) {
    justify-content: center;
  }
`

export const CloseIcon = styled(Close)`
  stroke: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  cursor: pointer;
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 2px;
`
export const WarningIcon = styled(Warning)`
  stroke: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).background};
  fill: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  stroke-miterlimit: 10;
  stroke-width: 2px;
`
export const DangerIcon = styled(Danger)`
  stroke: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).background};
  fill: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  stroke-miterlimit: 10;
  stroke-width: 2px;
`

export const InfoIcon = styled(Info)`
  stroke: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).background};
  fill: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  stroke-miterlimit: 10;
  stroke-width: 2px;
`

export const CheckCircleIcon = styled(CheckCircle)`
  stroke: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).background};
  fill: ${(props: BannerNotificationInterface) =>
    handleType(props.toast).color};
  stroke-miterlimit: 10;
  stroke-width: 2px;
`

const handleType = (type: string): HandleType => {
  switch (type) {
    case 'warning': {
      return {
        background: theme.colors.yellow,
        color: theme.colors.white,
        buttonBackground: theme.colors.lighterYellow,
        buttonColor: theme.colors.yellow
      }
    }
    case 'error': {
      return {
        background: theme.colors.red,
        color: theme.colors.white,
        buttonBackground: theme.colors.mostLightestRed,
        buttonColor: theme.colors.red
      }
    }
    case 'success': {
      return {
        background: theme.colors.green,
        color: theme.colors.white,
        buttonBackground: theme.colors.mostLightestGreen,
        buttonColor: theme.colors.green
      }
    }
    case 'info': {
      return {
        background: theme.colors.lighterInk,
        color: theme.colors.white,
        buttonBackground: theme.colors.darkestWhite,
        buttonColor: theme.colors.lighterInk
      }
    }
    default: {
      return {
        background: theme.colors.white,
        color: theme.colors.lightInk,
        buttonBackground: theme.colors.lighterBlue,
        buttonColor: theme.colors.blue
      }
    }
  }
}
