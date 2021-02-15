import { HtmlHTMLAttributes } from 'react'

export interface ModalInterface extends HtmlHTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  title?: string
  size?: string
}
