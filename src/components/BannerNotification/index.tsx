import React from 'react'

import { BannerNotificationInterface } from './types'

import {
  BannerHolder,
  CheckCircleIcon,
  CloseIcon,
  DangerIcon,
  InfoIcon,
  Title,
  WarningIcon,
  Row,
  Message,
  Button
} from './styles'

const BannerNotification: React.FC<BannerNotificationInterface> = ({
  title,
  onClose,
  message,
  bannerType,
  ...rest
}) => {
  const handleIcon = (type: string) => {
    switch (type) {
      case 'error': {
        return <DangerIcon bannerType={type} />
      }
      case 'warning': {
        return <WarningIcon bannerType={type} />
      }
      case 'success': {
        return <CheckCircleIcon bannerType={type} />
      }
      case 'info': {
        return <InfoIcon bannerType={type} />
      }
      default: {
        return null
      }
    }
  }

  return (
    <BannerHolder bannerType={bannerType} {...rest}>
      <Row
        wrap
        justify="spaceBetween"
        align="center"
        style={{ marginBottom: '30px' }}
      >
        {handleIcon(bannerType)}
        <Title>{title}</Title>
        <CloseIcon bannerType={bannerType} onClick={onClose} />
      </Row>
      <Row wrap>
        <Message>{message}</Message>
      </Row>
      <Row>
        <Button bannerType={bannerType} onClick={onClose}>
          OK
        </Button>
      </Row>
    </BannerHolder>
  )
}

export default BannerNotification
