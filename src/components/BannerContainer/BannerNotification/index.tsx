/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from 'react'
import { useBanner } from '@/hooks/useBanner'

import { BannerProps } from './types'

import {
  Holder,
  CheckCircleIcon,
  CloseIcon,
  DangerIcon,
  InfoIcon,
  Title,
  WarningIcon,
  Description,
  Button
} from './styles'

const BannerNotification: React.FC<BannerProps> = ({ message, style }) => {
  const { removeBanner } = useBanner()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeBanner(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeBanner])

  const icons = {
    error: <DangerIcon />,
    warning: <WarningIcon />,
    success: <CheckCircleIcon />,
    info: <InfoIcon />
  }

  return (
    <Holder key={message.id} type={message.type} style={style}>
      {icons[message.type || 'neutral']}
      <Title>{message.title}</Title>
      <CloseIcon type={message.type} onClick={() => removeBanner(message.id)} />
      <Description>{message.description}</Description>
      <Button
        messageType={message.type}
        onClick={() => removeBanner(message.id)}
      >
        OK
      </Button>
    </Holder>
  )
}

export default BannerNotification
