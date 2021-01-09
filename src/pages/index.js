import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import useDarkMode from 'use-dark-mode'

import Toggle from '@/components/toggle'
import Controls from '@/components/canvas/controls'

import useStore from '@/helpers/store'
import useWindowSize from '@/helpers/hooks/useWindowSize'

const Bird = dynamic(() => import('@/components/canvas/bird'), {
  ssr: false,
})

const Shape = dynamic(() => import('@/components/canvas/shape'), {
  ssr: false,
})

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
  const showShape = !isMobile && width > 768

  return (
    <>
      <group position={[-19, 0, 0]}>
        <ambientLight intensity={1} />
        <pointLight position={[40, 40, 40]} />

        <Suspense fallback={null}>
          <Birds />
        </Suspense>
      </group>

      {showShape && (
        <group position={[-2, 0, 0]}>
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </group>
      )}

      <Controls />
    </>
  )
}

const Page = () => {
  useStore.setState({ loading: false })

  const { value, toggle } = useDarkMode(false, {
    classNameDark: 'dark',
  })

  return (
    <>
      <Canvas r3f />
      <Toggle onToggle={toggle} value={value} />
    </>
  )
}

export default Page
