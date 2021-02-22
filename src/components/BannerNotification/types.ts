import { HtmlHTMLAttributes } from 'react'

export interface BannerNotificationInterface
  extends HtmlHTMLAttributes<HTMLDivElement> {
  title?: string
  message?: string
  onClose?: () => void
  bannerType?: string
}

export interface HandleType {
  background?: string
  color?: string
  buttonBackground?: string
  buttonColor?: string
}
