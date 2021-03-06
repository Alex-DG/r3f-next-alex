import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

import { perlin3 } from '@/utils/noise'

const Shape = ({ ...props }) => {
  const { mouse } = useThree()
  const texture = useLoader(THREE.TextureLoader, '/img/react.png')

  const sphereGeometryRef = useRef()
  const meshRef = useRef()

  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const mesh = meshRef?.current
    if (mesh) mesh.rotation.y = -Math.PI * 0.5
  }, [meshRef])

  useFrame(({ clock }) => {
    const sphereGeometry = sphereGeometryRef?.current
    const mesh = meshRef?.current

    if (sphereGeometry && mesh) {
      const { vertices } = sphereGeometry

      const time = clock.getElapsedTime()

      mesh.position.x = mouse.x * 2
      mesh.position.y = mouse.y * 0.5

      for (
        let i = 0, verticesLength = vertices.length;
        i < verticesLength;
        i++
      ) {
        const p = vertices[i]
        p.normalize().multiplyScalar(
          1 +
            0.3 *
              perlin3(
                p.x * 1.3 + time * (expand ? 1 : 2),
                p.y * 1.3 - time,
                p.z * 1.3
              )
        )
      }

      sphereGeometry.verticesNeedUpdate = true
      sphereGeometry.computeVertexNormals()
      sphereGeometry.normalsNeedUpdate = true
    }
  })

  const handleExpand = () => setExpand(!expand)

  const { scale } = useSpring({
    scale: expand ? [1.6, 1.6, 1.6] : [2.1, 2.1, 2.1],
  })

  return (
    <>
      <a.mesh ref={meshRef} onClick={handleExpand} scale={scale} {...props}>
        <sphereGeometry
          attach='geometry'
          args={[1.0, 60, 60]}
          ref={sphereGeometryRef}
        />
        <meshBasicMaterial
          attach='material'
          map={texture}
          wireframe={!expand}
        />
      </a.mesh>
    </>
  )
}

export default Shape
