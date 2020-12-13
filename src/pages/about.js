import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from '@react-three/drei'

import * as THREE from 'three'

import { Helmet } from 'react-helmet'

import useStore from '@/helpers/store'
import { perlin3 } from '@/helpers/noise'

import logo from '@/assets/images/react.png'

const LeftPanel = () => {
  return <div className='absolute z-10'>TODO: Alex details</div>
}

const Dom = () => {
  return (
    <div>
      <Helmet title='About' />
      <LeftPanel />
    </div>
  )
}

const Shape = () => {
  const texture = useLoader(THREE.TextureLoader, logo)
  const [expand, setExpand] = useState(true)

  const sphereGeometryRef = useRef()

  const inputScale = 1.3

  useFrame(({ clock }) => {
    const sphereGeometry = sphereGeometryRef.current
    const { vertices } = sphereGeometry
    const time = clock.getElapsedTime()

    for (let i = 0, verticesLength = vertices.length; i < verticesLength; i++) {
      const p = vertices[i]
      p.normalize().multiplyScalar(
        1 +
          0.3 *
            perlin3(
              p.x * inputScale + time,
              p.y * inputScale - time,
              p.z * inputScale
            )
      )
    }

    sphereGeometry.verticesNeedUpdate = true
    sphereGeometry.computeVertexNormals()
    sphereGeometry.normalsNeedUpdate = true
  })

  const handleExpand = () => setExpand(!expand)

  const { scale } = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh onClick={handleExpand} {...{ scale }}>
      <sphereGeometry
        attach='geometry'
        args={[1.0, 34, 34]}
        ref={sphereGeometryRef}
      />
      <meshBasicMaterial attach='material' map={texture} wireframe={expand} />
    </a.mesh>
  )
}

const Controls = ({ enableZoom = false }) => {
  const { gl, camera } = useThree()

  useSpring({
    from: {
      z: 2000,
    },
    z: 0,
    x: 5,
    y: 0,
    onFrame: ({ z, x, y }) => {
      camera.position.z = z
      camera.position.x = x
      camera.position.y = y
    },
  })

  return <OrbitControls {...{ enableZoom }} args={[camera, gl.domElement]} />
}

const CanvasAnimatedShape = () => {
  return (
    <Suspense fallback={null}>
      <Shape />
      <Controls />
    </Suspense>
  )

  // return (
  //   <Canvas className='absolute z-40 ' gl={{ preserveDrawingBuffer: true }}>
  //     <Suspense fallback={null}>
  //       <Shape />
  //       <Controls />
  //     </Suspense>
  //   </Canvas>
  // )
}

const Page = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <CanvasAnimatedShape r3f />
      <Dom />
    </>
  )
}

export default Page
