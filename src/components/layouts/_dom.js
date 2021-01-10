import React from 'react'
import Head from 'next/head'

import Card from '@/components/dom'

const Dom = ({ dom }) => {
  return (
    <div className='mx-auto dom'>
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

        <title>Bonjour 🥖</title>
      </Head>

      {dom}

      <Card />
    </div>
  )
}

export default Dom
