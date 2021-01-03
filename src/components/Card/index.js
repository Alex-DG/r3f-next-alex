import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { animated, useSpring } from 'react-spring'

import alex from '@/assets/images/me.jpg'

import GithubIcon from './icons/github'
import TwitterIcon from './icons/twitter'
import StackoverflowIcon from './icons/stackoverflow'
import LinkedinIcon from './icons/linkedin'

const socialUrl = {
  github: 'https://github.com/alex-dg',
  linkedin: 'https://www.linkedin.com/in/alexandre-di-guida-17650698/',
  twitter: 'https://twitter.com/Alex_dg_uk',
  stackoverflow: 'https://stackoverflow.com/users/2493252/alexdg',
  wordpress: 'https://scottish-escapes.com/',
}

const CardContainer = styled(animated.section)`
  z-index: 180;

  h1,
  h2 {
    font-size: 1.3em;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > :nth-child(2) {
      margin-top: 0.5em;
    }
  }

  .name {
    padding-bottom: 0.5em;
    border-bottom: 2px solid #61dafb;
    font-family: 'Space Grotesk';
  }

  .role,
  .dev {
    font-family: 'Movement';
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    a {
      cursor: pointer;
    }

    svg {
      width: 1.2em;
    }
    svg:hover > path {
      fill: #61dafb;
    }
  }

  p {
    margin-top: 1em;
  }
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
  max-width: 170px !important;

  margin: 0 auto;

  transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  border-radius: 0.25em;
  box-shadow: 2px 10px 30px hsla(0, 0%, 0%, 0.25);
  transition: 0.3s;
`

const Card = () => {
  const { value } = useDarkMode(false, {
    classNameDark: 'dark',
  })

  const enabled = value

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <CardContainer
      style={props}
      className='absolute left-0 right-0 z-20 p-5 m-0 m-auto bg-white shadow rounded-md w-60 top-1/4 md:m-5 md:top-0 dark:bg-black'
    >
      <Figure>
        <Image src={alex} alt='Alex' loading='lazy' />
      </Figure>

      <p className='details'>
        <h1 className='text-gray-900 name dark:text-white'>
          Alexandre Di Guida
        </h1>

        <h2 className='role ext-gray-900 dark:text-white'>
          {'< '}Front End{' >'}
        </h2>
        <h2 className='text-gray-900 role dark:text-white'>Web + Mobile App</h2>
        <h2 className='text-gray-900 dev dark:text-white'>[ Developer ]</h2>
      </p>

      <p className='links'>
        <a href={socialUrl.twitter} target='_blank'>
          <TwitterIcon darkMode={enabled} />
        </a>

        <a href={socialUrl.github} target='_blank'>
          <GithubIcon darkMode={enabled} />
        </a>

        <a href={socialUrl.stackoverflow} target='_blank'>
          <StackoverflowIcon darkMode={enabled} />
        </a>

        <a href={socialUrl.linkedin} target='_blank'>
          <LinkedinIcon darkMode={enabled} />
        </a>
      </p>
    </CardContainer>
  )
}

export default Card
