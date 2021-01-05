import React from 'react'
import { HTML } from '@react-three/drei'
import * as THREE from 'three'

import { ContactShadows } from '@react-three/drei'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import ParticlesBackground from './background'
import Rig from './rig'

const Effects = () => {
  return (
    <>
      <HTML prepend fullscreen zIndexRange={[100, 0]}>
        <ParticlesBackground />
      </HTML>

      <fog attach='fog' args={[0xf9fafb, 60, 70]} />

      <ambientLight color={new THREE.Color(0xf9fafb)} intensity={0.5} />

      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -8, 0]}
        opacity={0.75}
        width={140}
        height={140}
        blur={1}
        far={9}
      />

      <EffectComposer>
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer>

      <Rig />
    </>
  )
}

export default React.memo(Effects)
