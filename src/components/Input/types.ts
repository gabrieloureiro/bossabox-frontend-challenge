import { Theme } from '@/styles/styled'
import { HtmlHTMLAttributes } from 'react'

export interface InputInterface extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  fieldError?: boolean
  theme?: Theme
}
