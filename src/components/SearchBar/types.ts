import { InputHTMLAttributes } from 'react'

export interface SearchbarInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  defaultValue: string
}
