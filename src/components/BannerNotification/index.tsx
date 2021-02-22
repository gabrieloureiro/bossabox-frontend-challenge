import React from 'react'

import { BannerNotificationInterface } from './types'

import { BannerWrapper } from './styles'

const BannerNotification: React.FC<BannerNotificationInterface> = ({
  children,
  ...rest
}) => {
  return <BannerWrapper {...rest}>{children}</BannerWrapper>
}

export default BannerNotification
