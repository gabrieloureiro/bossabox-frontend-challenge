/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { InputInterface } from './types'

import { Label, StyledInput, Error } from './styles'
import { Row } from '../Row'

const Input: React.FC<InputInterface> = ({
  name,
  label,
  required,
  fieldError,
  placeholder,
  ...rest
}) => {
  const [containsError, setContainsError] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)
  const inputRef = useRef(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  useEffect(() => {
    if (error) {
      setContainsError(true)
    }
  }, [error])

  useEffect(() => {
    if (!error) {
      setContainsError(false)
    }
  }, [error])

  return (
    <>
      <Label>{`${label} ${required ? '*' : ''}`}</Label>
      <StyledInput
        onChange={event => {
          event.target.value !== ''
            ? setContainsError(false)
            : setContainsError(true)
        }}
        defaultValue={defaultValue}
        name={fieldName}
        ref={inputRef}
        fieldError={containsError}
        placeholder={placeholder}
        {...rest}
      />
      <Row justify="end">{containsError && <Error>{error}</Error>}</Row>
    </>
  )
}

export default Input
