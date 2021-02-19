import React from 'react'

import { SwitchInterface } from './types'

import { Wrapper, Message } from './styles'

const Switch: React.FC<SwitchInterface> = ({ isOn, handleToggle }) => {
  return (
    <Wrapper>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={'react-switch-new'}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#12DB89' }}
        htmlFor={'react-switch-new'}
      >
        <span />
      </label>
      <Message>
        {!isOn
          ? 'Toggle on to search in tags only'
          : 'Toggle off to search globally'}
      </Message>
    </Wrapper>
  )
}

export default Switch
