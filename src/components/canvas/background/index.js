import React from 'react'
import ParticleField from 'react-particles-webgl'

import { defaultConfig } from '@/helpers/particles/config'

const ParticlesBackground = () => {
  return (
    <div id='particle-field' className='relative w-screen h-screen'>
      <ParticleField config={defaultConfig} />
    </div>
  )
}

export default ParticlesBackground
