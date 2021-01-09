import React from 'react'

import { Container } from './styles'

const Toggle = ({ value, onToggle, ...props }) => {
  return (
    <Container>
      <div id='toggle-btn'>
        <label htmlFor='toggle'></label>
        <input
          id='toggle'
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
    </Container>
  )
}

export default Toggle
