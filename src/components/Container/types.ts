import { HtmlHTMLAttributes } from 'react'

export interface ContainerInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  sideBarCollapsed: boolean
}
