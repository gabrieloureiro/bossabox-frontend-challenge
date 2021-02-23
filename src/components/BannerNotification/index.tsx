import React from 'react'

import { BannerNotificationInterface } from './types'

import {
  Container,
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
  toast,
  ...rest
}) => {
  const handleIcon = (type: string) => {
    switch (type) {
      case 'error': {
        return <DangerIcon toast={type} />
      }
      case 'warning': {
        return <WarningIcon toast={type} />
      }
      case 'success': {
        return <CheckCircleIcon toast={type} />
      }
      case 'info': {
        return <InfoIcon toast={type} />
      }
      default: {
        return null
      }
    }
  }

  return (
    <Container>
      <BannerHolder toast={toast} {...rest}>
        <Row
          wrap
          justify="spaceBetween"
          align="center"
          style={{ marginBottom: '30px' }}
        >
          {handleIcon(toast)}
          <Title>{title}</Title>
          <CloseIcon toast={toast} onClick={onClose} />
        </Row>
        <Row wrap>
          <Message>{message}</Message>
        </Row>
        <Row>
          <Button toast={toast} onClick={onClose}>
            OK
          </Button>
        </Row>
      </BannerHolder>
      <BannerHolder toast={toast} {...rest}>
        <Row
          wrap
          justify="spaceBetween"
          align="center"
          style={{ marginBottom: '30px' }}
        >
          {handleIcon(toast)}
          <Title>{title}</Title>
          <CloseIcon toast={toast} onClick={onClose} />
        </Row>
        <Row wrap>
          <Message>{message}</Message>
        </Row>
        <Row>
          <Button toast={toast} onClick={onClose}>
            OK
          </Button>
        </Row>
      </BannerHolder>
    </Container>
  )
}

export default BannerNotification
