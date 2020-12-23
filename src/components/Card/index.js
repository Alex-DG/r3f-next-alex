import React from 'react'
import styled from 'styled-components'

import alex from '@/assets/images/me.jpg'

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Figure = styled.figure`
  perspective: 1500px;

  &:hover img {
    transform: rotate(0);
  }
`

export const Image = styled.img`
  display: block;

  height: auto;
  max-width: 170px;

  margin: 0 auto;

  transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  border-radius: 0.25em;
  box-shadow: 2px 10px 30px hsla(0, 0%, 0%, 0.25);
  transition: 0.3s;
`

// className='absolute z-20 p-2 px-6 py-3 m-2  text-gray-50 dark:bg-gray-50 dark:text-gray-700'
const Card = () => {
  return (
    <CardContainer className='absolute z-20 p-5 m-5 rounded bg-gray-50'>
      <Figure>
        <Image src={alex} alt='Alex' loading='lazy' />
      </Figure>

      <h1 className='names'>Alexandre Di Guida</h1>

      <h2 className='role'>
        {'< '}Front End{' >'}
      </h2>
      <h2 className='role'>Web ~ Mobile App</h2>
      <h2 className='dev'>[ Developer ]</h2>
    </CardContainer>
  )
}

export default Card
