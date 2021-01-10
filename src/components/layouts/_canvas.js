import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import * as THREE from 'three'

import Effects from '../canvas/effects'

const LCanvas = ({ children }) => {
  return (
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
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(0xf9fafb))
      }}
    >
      <Suspense fallback={null}>
        <Effects />
      </Suspense>

      {children}
    </Canvas>
  )
}

export default LCanvas
