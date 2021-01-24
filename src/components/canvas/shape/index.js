import { useRef, useState } from 'react'

import * as THREE from 'three'

import { useFrame, useLoader } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

import { perlin3 } from '@/utils/noise'

const Shape = ({ ...props }) => {
  const texture = useLoader(THREE.TextureLoader, '/img/react.png')

  const sphereGeometryRef = useRef()

  const inputScale = 1.3

  const [expand, setExpand] = useState(true)

  useFrame(({ clock }) => {
    const sphereGeometry = sphereGeometryRef.current

    if (sphereGeometry && sphereGeometry.vertices) {
      const { vertices } = sphereGeometry

      const time = clock.getElapsedTime()

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
                p.x * inputScale + time * (expand ? 1 : 2),
                p.y * inputScale - time,
                p.z * inputScale
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
    scale: expand ? [1.6, 1.6, 1.6] : [2.3, 2.3, 2.3],
  })

  return (
    <>
      <a.mesh onClick={handleExpand} scale={scale} {...props}>
        <sphereGeometry
          attach='geometry'
          args={[1.0, 37, 37]}
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
