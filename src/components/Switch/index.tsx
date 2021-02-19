import React from 'react'

import { SwitchInterface } from './types'

import { Wrapper } from './styles'

const Switch: React.FC<SwitchInterface> = ({ isOn, handleToggle }) => {
  return (
    <Wrapper>
      <input
        className="react-switch-checkbox"
        checked={isOn}
        onChange={handleToggle}
        id={'react-switch-new'}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#12DB89' }}
        className="react-switch-label"
        htmlFor={'react-switch-new'}
      >
        <span className={'react-switch-button'} />
      </label>
    </Wrapper>
  )
}

export default Switch
