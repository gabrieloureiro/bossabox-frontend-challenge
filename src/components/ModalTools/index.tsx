import React, { useCallback, useRef } from 'react'

import api from '@/services/api'
import { useFetch } from '@/hooks/useFetch'
import { v4 as uuid } from 'uuid'
import { mutate as mutateGlobal } from 'swr'

import { useDispatch, useSelector } from 'react-redux'
import { readTools, createTool } from '@/store/modules/tools/actions'

import getValidationErrors from '@/utils/getValidationErrors'
import toolsSchema from '@/utils/toolsSchema'
import { formToolsItems, ToolsInterface } from '@/models/tools'
import { ModalToolsInterface } from './types'

import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { Row } from '@/components/Row'
import { Form, CancelButton, ConfirmButton } from './styles'
import { StateInterface } from '@/store'

const ModalTools: React.FC<ModalToolsInterface> = ({
  title,
  onClose,
  open
}) => {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const { data } = useFetch<ToolsInterface[]>('tools')
  const currentTool = useSelector<StateInterface, ToolsInterface>(
    state => state.currentTool
  )
  const handleAddTool = useCallback(
    async (tool: ToolsInterface) => {
      await api.post('tools', tool)
      mutateGlobal('tools')
    },
    [data, dispatch]
  )

  const handleSubmit = useCallback(
    async (formData: ToolsInterface, { reset }) => {
      try {
        formRef.current?.setErrors({})

        const editedFormData: ToolsInterface = {
          id: uuid(),
          title: formData.title,
          description: formData.description,
          link: formData.link,
          tags: formData.tags.toString() !== '' ? formData.tags.split(',') : ''
        }
        await toolsSchema.validate(editedFormData, { abortEarly: false })

        await handleAddTool(editedFormData)

        onClose()
        reset()
      } catch (err) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    },
    []
  )

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <Form initialData={currentTool} ref={formRef} onSubmit={handleSubmit}>
        {formToolsItems.map((item, index) => {
          return (
            <Input
              key={`${item.label}_${index}`}
              label={item.label}
              required
              name={item.name}
            />
          )
        })}
        <Row wrap align="center" justify="end">
          <CancelButton buttonType="primaryDanger" onClick={onClose}>
            Cancel
          </CancelButton>
          <ConfirmButton
            buttonType="primarySuccess"
            onClick={() => handleSubmit}
          >
            Confirm
          </ConfirmButton>
        </Row>
      </Form>
    </Modal>
  )
}

export default ModalTools
