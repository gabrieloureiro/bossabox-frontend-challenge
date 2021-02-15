import React from 'react'

import { ModalInterface } from './types'

import { Row } from '@/components/Row'
import { Fade } from 'react-reveal'

import { ModalWrapper, ModalHolder, ModalTitle, CloseIcon } from './styles'

const Modal: React.FC<ModalInterface> = ({
  open,
  size,
  onClose,
  title,
  children,
  ...rest
}) => {
  return open ? (
    <ModalWrapper
      id="scrim"
      onClick={(event: any) => {
        if (event.target.id === 'scrim') {
          onClose()
        }
      }}
    >
      <Fade delay={-200}>
        <ModalHolder
          open={open}
          onClose={onClose}
          title={title}
          size={size}
          {...rest}
        >
          <Row
            justify="spaceBetween"
            align="center"
            style={{ marginBottom: '30px' }}
          >
            <ModalTitle>{title}</ModalTitle>
            <CloseIcon onClick={onClose} />
          </Row>
          {children}
        </ModalHolder>
      </Fade>
    </ModalWrapper>
  ) : null
}

export default Modal
