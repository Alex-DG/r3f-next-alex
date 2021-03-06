import { Suspense } from 'react'

import Bird from '@/components/canvas/bird'
import Shape from '@/components/canvas/shape'

import useStore from '@/helpers/store'
import useWindowSize from '@/helpers/hooks/useWindowSize'
import ParticlesBackground from '@/components/canvas/effects/background'

const Birds = () => {
  return new Array(6).fill().map((_, i) => {
    const x = (7.5 + Math.random() * 15) * (Math.round(Math.random()) ? -1 : 1)
    const y = -7.5 + Math.random() * 5
    const z = -2.5 + Math.random() * 5
    const bird = ['stork', 'parrot', 'flamingo'][Math.round(Math.random() * 2)]
    let speed = bird === 'stork' ? 0.5 : bird === 'flamingo' ? 2 : 5
    let factor =
      bird === 'stork'
        ? 0.5 + Math.random()
        : bird === 'flamingo'
        ? 0.25 + Math.random()
        : 1 + Math.random() - 0.5

    return (
      <Bird
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={speed}
        factor={factor}
        url={`/glb/${bird}.glb`}
      />
    )
  })
}

const Canvas = () => {
  const { width } = useWindowSize()
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const hide = (isMobile && width <= 768) || width < 767

  return (
    <>
      <group position={[0, 0, -20]}>
        <ambientLight intensity={1} />
        <pointLight position={[40, 40, 40]} />

        <Suspense fallback={null}>
          <Birds />
        </Suspense>
      </group>

      {!hide && (
        <group style={{ zIndex: 20 }} position={[0, 0, -6]}>
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </group>
      )}

      {/* <Controls /> */}
    </>
  )
}

const Page = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Canvas r3f />
      <div />
    </>
  )
}

export default Page
