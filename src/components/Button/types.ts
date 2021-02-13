import { ReactNode } from 'react'

export interface ButtonInterface {
  buttonType?: string
  children: ReactNode
  disabled?: boolean
}

export interface HandleType {
  padding?: string
  background?: string
  color?: string
  hoverBackground?: string
  hoverColor?: string
  focusBackground?: string
  focusColor?: string
  disabledBackground?: string
  disabledColor?: string
}
