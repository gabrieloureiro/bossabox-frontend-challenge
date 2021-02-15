import { HTMLAttributes, ReactNode } from 'react'

export interface ButtonInterface extends HTMLAttributes<HTMLButtonElement> {
  buttonType?: string
  children: ReactNode
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
