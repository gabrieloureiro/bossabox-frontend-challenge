/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import { InputInterface } from './types'

export const Label = styled.label`
  font: normal normal 600 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.ink};
`

export const StyledInput = styled.input`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 12px 0;
  padding: 12px 21px;
  background: ${(props: InputInterface) =>
    props.fieldError ? props.theme.colors.mostLightestRed : props.theme.colors.darkerWhite} 0% 0% no-repeat padding-box;
  border: 1px solid ${(props: InputInterface) =>
    props.fieldError ? props.theme.colors.red : props.theme.colors.darkestWhite};
  border-radius: 5px;
  transition: all 0.2s ease;
  color: ${props => props.theme.colors.ink};
  font: normal normal normal 20px/25px Source Sans Pro;
  letter-spacing: 0px;

  &::-webkit-input-placeholder {
    border-color: ${(props: InputInterface) =>
    props.fieldError ? props.theme.colors.red : props.theme.colors.darkestWhite};
    color: ${(props: InputInterface) =>
    props.fieldError ? props.theme.colors.red : props.theme.colors.lighterInk};
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    background: ${props => props.theme.colors.darkestWhite};

    &::-webkit-input-placeholder {
      color: ${props => props.theme.colors.lightInk};
    }
  }
`
