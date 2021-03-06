import { useFrame, useThree } from 'react-three-fiber'
import { Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'

const Controls = ({ enableZoom = true, autoRotate = true }) => {
  const { gl, camera } = useThree()
  const vec = new Vector3()
  // camera.position.y = 2
  // camera.position.z = -1
  // camera.position.x = 20
  // console.log({ position: camera.position })

  // useFrame(() => {
  //   camera.position.x = 0
  //   camera.position.y = 0
  // })

  useFrame(() => {
    // camera.position.x = 0
    // camera.position.y = camera.position.z = 0
  })

  // useSpring({
  //   from: {
  //     z: 2000,
  //   },
  //   z: 0,
  //   x: 5,
  //   y: 0,
  //   onFrame: ({ z, x, y }) => {
  //     camera.position.z = z
  //     camera.position.x = x
  //     camera.position.y = y
  //   },
  // })

  return (
    <OrbitControls
      // {...{ enableZoom, autoRotate }}
      enableRotate
      enableZoom
      args={[camera, gl.domElement]}
    />
  )
}

export default Controls
