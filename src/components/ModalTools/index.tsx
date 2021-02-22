/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
import React, { useCallback, useRef } from 'react'

import api from '@/services/api'
import { useDispatch } from 'react-redux'
import { useFetch } from '@/hooks/useFetch'
import { mutate as mutateGlobal } from 'swr'

import getValidationErrors from '@/utils/getValidationErrors'
import { toolsSchemaEmpty, toolsSchema } from '@/utils/toolsSchema'
import { formToolsItems, ToolsInterface } from '@/models/tools'
import { ModalToolsInterface } from './types'

import Modal from '@/components/Modal'
import Input from '@/components/Input'
import { Row } from '@/components/Row'
import { Form, CancelButton, ConfirmButton, InfoLabel } from './styles'
import { readMessage } from '@/store/modules/message/actions'

const ModalTools: React.FC<ModalToolsInterface> = ({
  title,
  onClose,
  open
}) => {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const { data } = useFetch('tools')

  const handleAddTool = useCallback(
    async (tool: ToolsInterface) => {
      await api.post('tools', tool).then(response => {
        if (response.status === 201) {
          dispatch(
            readMessage({
              title: 'This was a complete success',
              description: `The tool ${tool.title} was created with success`,
              bannerType: 'success',
              status: response.status
            })
          )
        } else {
          dispatch(
            readMessage({
              title: 'An error just happened!',
              description: `The tool ${tool.title} has  not been deleted.`,
              bannerType: 'error',
              status: response.status
            })
          )
        }
      })
      mutateGlobal('tools', false)
    },
    [data, dispatch]
  )

  const handleSubmit = useCallback(
    async (formData: ToolsInterface, { reset }) => {
      try {
        formRef.current?.setErrors({})

        const editedFormData: ToolsInterface = {
          title: formData.title,
          description: formData.description,
          link: formData.link,
          tags:
            formData.tags.toString() !== ''
              ? formData.tags.toString().split(',')
              : []
        }

        formData.tags.toString() !== ''
          ? await toolsSchema.validate(editedFormData, { abortEarly: false })
          : await toolsSchemaEmpty.validate(editedFormData, {
            abortEarly: false
          })

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
      <Form ref={formRef} onSubmit={handleSubmit}>
        {formToolsItems.map((item, index) => {
          return (
            <>
              <Input
                key={`${item.label}_${index}`}
                label={item.label}
                required
                name={item.name}
              />
              {item.name === 'tags' && (
                <InfoLabel>Please, insert tags separated by comma</InfoLabel>
              )}
            </>
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
