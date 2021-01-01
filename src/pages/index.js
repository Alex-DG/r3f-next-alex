import { Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Bird from '@/components/canvas/bird'
import Shape from '@/components/canvas/shape'
import Controls from '@/components/canvas/controls'

import Card from '@/components/card'
import Trail from '@/components/trail'

import useStore from '@/helpers/store'
import useWindowSize from '@/helpers/hooks/useWindowSize'

const Welcome = ({ open }) => {
  return (
    <>
      <Trail
        {...{ open }}
        className='absolute z-10 w-full p-2 mx-auto text-3xl text-center text-black-100 dark:text-white-100 inset-y-1/2'
      >
        <h1>Welcome</h1>
        <h1>Bienvenue.</h1>
      </Trail>
    </>
  )
}

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

const Dom = () => {
  const router = useStore((state) => state.router)
  const [open, set] = useState(false)

  useEffect(() => {
    let timer

    if (router.route) {
      const funcs = [
        () => set(true),
        () => set(false),
        // () => router.replace(`/about`),
      ]

      let i = 0
      timer = setInterval(() => {
        funcs[i++]()
        if (i === funcs.length) clearInterval(timer)
      }, 2500)
    }

    return () => clearInterval(timer)
  }, [router])

  return (
    <div>
      <Helmet title='Welcome' />
      <Card />
    </div>
  )
}

const Page = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Canvas r3f />
      <Dom />
    </>
  )
}

export default Page
