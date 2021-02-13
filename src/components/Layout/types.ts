import { ReactNode } from 'react'

export interface LayoutInterface {
  title: string
  children: ReactNode
}

export interface ContainerInterface {
  sideBarCollapsed: boolean
}
