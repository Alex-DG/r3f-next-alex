import React from 'react'
import ParticleField from 'react-particles-webgl'

const config = {
  showCube: false,
  dimension: '2D',
  velocity: 1.0,
  boundaryType: 'passthru',
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1,
  },
  lines: {
    colorMode: 'solid',
    color: '#000000',
    transparency: 0.4,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 400,
    visible: true,
  },
  particles: {
    colorMode: 'solid',
    color: '#000000',
    transparency: 0.45,
    shape: 'circle',
    boundingBox: 'canvas',
    count: 120,
    minSize: 20,
    maxSize: 40,
    visible: true,
  },
  cameraControls: {
    enabled: false,
    enableDamping: true,
    dampingFactor: 0.3,
    enableZoom: false,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    resetCameraFlag: true,
  },
  limitConnections: false,
}

const ParticlesBackground = () => {
  return (
    <div className='w-screen h-screen'>
      <ParticleField {...{ config }} />
    </div>
  )
}

export default ParticlesBackground
