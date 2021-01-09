import { useEffect, Children } from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

import Header from '@/components/header'
import Dom from '@/components/layouts/_dom'

import useStore from '@/helpers/store'

import '@/styles/index.css'

let LCanvas = null
if (process.env.NODE_ENV === 'production') {
  LCanvas = dynamic(() => import('@/components/layouts/_canvas'), {
    ssr: false,
  })
} else {
  LCanvas = require('@/components/layouts/_canvas').default
}

function SplitApp({ canvas, dom }) {
  return (
    <>
      <Header />
      {dom && <Dom {...{ dom }} />}
      <LCanvas>{canvas}</LCanvas>
    </>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let comp = [...Component().props.children]

  let r3fArr = []
  let compArr = []

  Children.forEach(comp, (child) => {
    if (child.props && child.props.r3f) {
      r3fArr.push(child)
    } else {
      compArr.push(child)
    }
  })

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  return (
    <>
      {r3fArr.length > 0 ? (
        <SplitApp canvas={r3fArr} dom={compArr} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
