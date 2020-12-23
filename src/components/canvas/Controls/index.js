import { useFrame, useThree } from 'react-three-fiber'

import { OrbitControls } from '@react-three/drei'

const Controls = ({ enableZoom = false, autoRotate = false }) => {
  const { gl, camera } = useThree()

  useFrame(({ clock }) => {
    camera.position.x = 5
    camera.position.y = 0
    camera.position.z = 0
  })

  return (
    <OrbitControls
      {...{ enableZoom, autoRotate }}
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
