import React from 'react'

import { ToggleContainer } from './styles'

const Toggle = ({ value, onToggle, ...props }) => {
  return (
    <ToggleContainer>
      <div id='toggle-btn'>
        <input
          type='checkbox'
          onClick={() => {
            if (!value) {
              document.querySelector('html').classList.add('dark')
            } else {
              document.querySelector('html').classList.remove('dark')
            }

            onToggle()
          }}
          {...props}
        />
        <span></span>
      </div>
    </ToggleContainer>
  )
}

export default Toggle
