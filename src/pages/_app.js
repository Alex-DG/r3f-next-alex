import { useEffect, Children } from 'react'
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'

import Head from 'next/head'

import Preload from '@/components/loading/loading'
import LCanvas from '@/components/canvas/_layout'

import useStore from '@/helpers/store'

import { helmet } from '../config'

import '../assets/styles/globals.css'

function SplitApp({ canvas, dom }) {
  return (
    <>
      <Helmet {...helmet} />
      {dom && <div className='mx-auto dom'>{dom}</div>}
      <LCanvas>{canvas}</LCanvas>
      <Preload />
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
    useStore.setState({ router: router })
  }, [router])

  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Movement/MovementV.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/SpaceGrotesk/SpaceGrotesk-Regular.woff'
          as='font'
          crossOrigin=''
        />
      </Head>

      {r3fArr.length > 0 ? (
        <SplitApp canvas={r3fArr} dom={compArr} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
