/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { ButtonInterface, HandleType } from './types'

import theme from '@/styles/theme'

export const StyledButton = styled.button`
  font: normal normal 600 18px/24px Source Sans Pro;
  font-family: Source Sans Pro, sans-serif;
  letter-spacing: 0.36px;
  border-radius: 5px;
  border: 0;
  padding: ${(props: ButtonInterface) => handleType(props.buttonType).padding};
  background: ${(props: ButtonInterface) =>
    handleType(props.buttonType).background};
  color: ${(props: ButtonInterface) => handleType(props.buttonType).color};

  &:hover {
    background: ${(props: ButtonInterface) =>
    handleType(props.buttonType).hoverBackground};
    color: ${(props: ButtonInterface) => handleType(props.buttonType).hoverColor};
  }

  &:focus {
    background: ${(props: ButtonInterface) =>
    handleType(props.buttonType).focusBackground};
    color: ${(props: ButtonInterface) => handleType(props.buttonType).focusColor};
  }

  &:disabled {
    background: ${(props: ButtonInterface) =>
    handleType(props.buttonType).disabledBackground};
    color: ${(props: ButtonInterface) => handleType(props.buttonType).disabledColor};
  }
`

const handleType = (type: string): HandleType => {
  switch (type) {
    // Primary
    case 'primaryNeutral': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.blue,
        color: theme.colors.white,
        hoverBackground: theme.colors.darkBlue,
        hoverColor: theme.colors.white,
        focusBackground: theme.colors.darkerBlue,
        focusColor: theme.colors.white,
        disabledBackground: theme.colors.lighterBlue,
        disabledColor: theme.colors.mostLightestBlue
      }
    }

    case 'primaryDanger': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.red,
        color: theme.colors.white,
        hoverBackground: theme.colors.darkRed,
        hoverColor: theme.colors.white,
        focusBackground: theme.colors.darkerRed,
        focusColor: theme.colors.white,
        disabledBackground: theme.colors.lighterRed,
        disabledColor: theme.colors.mostLightestRed
      }
    }

    case 'primarySuccess': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.green,
        color: theme.colors.white,
        hoverBackground: theme.colors.darkGreen,
        hoverColor: theme.colors.white,
        focusBackground: theme.colors.darkerGreen,
        focusColor: theme.colors.white,
        disabledBackground: theme.colors.lighterGreen,
        disabledColor: theme.colors.mostLightestGreen
      }
    }

    // Secondary
    case 'secondaryNeutral': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.mostLightestBlue,
        color: theme.colors.blue,
        hoverBackground: theme.colors.lightestBlue,
        hoverColor: theme.colors.blue,
        focusBackground: theme.colors.lighterBlue,
        focusColor: theme.colors.blue,
        disabledBackground: theme.colors.mostLightestBlue,
        disabledColor: theme.colors.lighterBlue
      }
    }
    case 'secondaryDanger': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.mostLightestRed,
        color: theme.colors.red,
        hoverBackground: theme.colors.lightestRed,
        hoverColor: theme.colors.red,
        focusBackground: theme.colors.lighterRed,
        focusColor: theme.colors.red,
        disabledBackground: theme.colors.mostLightestRed,
        disabledColor: theme.colors.lighterRed
      }
    }
    case 'secondarySuccess': {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.mostLightestGreen,
        color: theme.colors.green,
        hoverBackground: theme.colors.lightestGreen,
        hoverColor: theme.colors.green,
        focusBackground: theme.colors.lighterGreen,
        focusColor: theme.colors.green,
        disabledBackground: theme.colors.mostLightestGreen,
        disabledColor: theme.colors.lighterGreen
      }
    }

    // Terciary
    case 'terciaryNeutral': {
      return {
        padding: '6px 18px',
        background: theme.colors.mostLightestBlue,
        color: theme.colors.blue,
        hoverBackground: theme.colors.lightestBlue,
        hoverColor: theme.colors.blue,
        focusBackground: theme.colors.lighterBlue,
        focusColor: theme.colors.blue,
        disabledBackground: theme.colors.mostLightestBlue,
        disabledColor: theme.colors.lighterBlue
      }
    }
    case 'terciaryDanger': {
      return {
        padding: '6px 18px',
        background: theme.colors.mostLightestRed,
        color: theme.colors.red,
        hoverBackground: theme.colors.lightestRed,
        hoverColor: theme.colors.red,
        focusBackground: theme.colors.lighterRed,
        focusColor: theme.colors.red,
        disabledBackground: theme.colors.mostLightestRed,
        disabledColor: theme.colors.lighterRed
      }
    }
    case 'terciarySuccess': {
      return {
        padding: '6px 18px',
        background: theme.colors.mostLightestGreen,
        color: theme.colors.green,
        hoverBackground: theme.colors.lightestGreen,
        hoverColor: theme.colors.green,
        focusBackground: theme.colors.lighterGreen,
        focusColor: theme.colors.green,
        disabledBackground: theme.colors.mostLightestGreen,
        disabledColor: theme.colors.lighterGreen
      }
    }

    // Quartiary
    case 'quartiaryNeutral': {
      return {
        padding: '0px',
        background: 'transparent',
        color: theme.colors.blue,
        hoverBackground: 'transparent',
        hoverColor: theme.colors.blue,
        focusBackground: 'transparent',
        focusColor: theme.colors.blue,
        disabledBackground: 'transparent',
        disabledColor: theme.colors.lightBlue
      }
    }
    case 'quartiaryDanger': {
      return {
        padding: '0px',
        background: 'transparent',
        color: theme.colors.red,
        hoverBackground: 'transparent',
        hoverColor: theme.colors.red,
        focusBackground: 'transparent',
        focusColor: theme.colors.red,
        disabledBackground: 'transparent',
        disabledColor: theme.colors.lightRed

      }
    }
    case 'quartiarySuccess': {
      return {
        padding: '0px',
        background: 'transparent',
        color: theme.colors.green,
        hoverBackground: 'transparent',
        hoverColor: theme.colors.green,
        focusBackground: 'transparent',
        focusColor: theme.colors.green,
        disabledBackground: 'transparent',
        disabledColor: theme.colors.lightGreen
      }
    }
    default: {
      return {
        padding: '14px 26px 13px',
        background: theme.colors.ink,
        color: theme.colors.white,
        hoverBackground: theme.colors.ink,
        hoverColor: theme.colors.white,
        focusBackground: theme.colors.ink,
        focusColor: theme.colors.white,
        disabledBackground: theme.colors.lighterInk,
        disabledColor: theme.colors.lightInk
      }
    }
  }
}
