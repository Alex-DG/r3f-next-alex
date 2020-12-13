import ParticleField from 'react-particles-webgl'

const Color = {
  GREY: '#282c34',
}

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
    color: Color.GREY,
    transparency: 0.6,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 400,
    visible: true,
  },
  particles: {
    colorMode: 'solid',
    color: Color.GREY,
    transparency: 0.7,
    shape: 'circle',
    boundingBox: 'canvas',
    count: 130,
    minSize: 20,
    maxSize: 45,
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

const ParticlesWrapper = () => {
  return (
    <div className='relative w-screen h-screen -z-10'>
      <ParticleField {...{ config }} />
    </div>
  )
}

export default ParticlesWrapper
