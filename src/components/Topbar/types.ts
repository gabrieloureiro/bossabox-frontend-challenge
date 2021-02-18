import { ChangeEvent, HtmlHTMLAttributes } from 'react'

export interface TopbarInterface {
  highlightTitle: string
  collapsed: boolean
  handleCollapsed: () => void
  value: string
  defaultValue: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
