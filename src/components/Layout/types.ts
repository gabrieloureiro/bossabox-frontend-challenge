import { ReactNode } from 'react'

export interface LayoutInterface {
  title: string
  children: ReactNode
  highlightTitle: string
}

export interface ContainerInterface {
  sideBarCollapsed: boolean
}
