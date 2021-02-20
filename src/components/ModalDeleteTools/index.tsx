import React from 'react'

import { ModalDeleteToolsInterface } from './types'

import Modal from '@/components/Modal'
import { Row } from '@/components/Row'

import { Message, CancelButton, ConfirmButton } from './styles'

const ModalDeleteTools: React.FC<ModalDeleteToolsInterface> = ({
  title,
  onClose,
  open,
  onConfirm,
  toolTitle
}) => {
  return (
    <Modal size="danger" title={title} open={open} onClose={onClose}>
      <Message>
        Are you sure you want to remove <strong>{toolTitle}</strong>?
      </Message>
      <Row wrap align="center" justify="end">
        <CancelButton buttonType="secondaryDanger" onClick={onClose}>
          Cancel
        </CancelButton>
        <ConfirmButton buttonType="secondarySuccess" onClick={onConfirm}>
          Confirm
        </ConfirmButton>
      </Row>
    </Modal>
  )
}

export default ModalDeleteTools
