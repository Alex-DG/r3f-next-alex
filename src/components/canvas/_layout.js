import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { HTML } from '@react-three/drei'
import * as THREE from 'three'

import { ContactShadows } from '@react-three/drei'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import { config } from '@/helpers/particles/config'

import Toggle from './toggle'

import ParticleField from 'react-particles-webgl'
import useDarkMode from 'use-dark-mode'

const ParticlesBackground = () => (
  <div id='particle-field' className='relative w-screen h-screen'>
    <ParticleField {...{ config }} />
  </div>
)

const Rig = () => {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02
    )
  )
}

const CanvasTemplateAdds = () => {
  const { value } = useDarkMode(false, {
    classNameDark: 'dark',
  })

  return (
    <>
      <HTML prepend fullscreen zIndexRange={[100, 0]}>
        <ParticlesBackground />
      </HTML>

      <fog attach='fog' args={[value ? 0x111827 : 0xf9fafb, 60, 70]} />

      <ambientLight
        color={new THREE.Color(value ? 0x111827 : 0xf9fafb)}
        intensity={0.5}
      />

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

const LCanvas = ({ children }) => {
  const { value, toggle } = useDarkMode(false, {
    classNameDark: 'dark',
  })

  return (
    <>
      <Canvas
        id='app-canvas'
        concurrent
        colorManagement
        style={{
          position: 'absolute',
          top: 0,
        }}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false,
          alpha: false,
        }}
        camera={{ position: [0, 0, 0], near: 5, far: 100 }}
        pixelRatio={1}
        onCreated={({ gl, scene }) => {
          value
            ? gl.setClearColor(new THREE.Color(0x111827))
            : gl.setClearColor(new THREE.Color(0xf9fafb))
        }}
      >
        <Suspense fallback={null}>
          <CanvasTemplateAdds />
        </Suspense>

        {children}
      </Canvas>

      <Toggle onToggle={toggle} value={value} />
    </>
  )
}

export default LCanvas
