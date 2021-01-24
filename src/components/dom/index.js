import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { animated, useSpring, config } from 'react-spring'

import GithubIcon from './svg/github'
import TwitterIcon from './svg/twitter'
import LinkedinIcon from './svg/linkedin'

const socialUrl = {
  github: 'https://github.com/alex-dg',
  linkedin: 'https://www.linkedin.com/in/alexandre-di-guida-17650698/',
  twitter: 'https://twitter.com/Alex_dg_uk',
}

const Card = styled(animated.section)`
  transition: all 0.5 linear;

  z-index: 180;
  width: fit-content;

  margin: 3rem;

  @media only screen and (max-width: 48em) {
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0 auto;
  }

  /** Galaxy fold */
  @media only screen and (max-width: 280px) {
    border-radius: 0;
    height: 100%;
  }

  h1,
  h2 {
    font-size: 1.5em;
    text-align: center;
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
      cursor: url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png')
          39 39,
        auto;

      @media (prefers-color-scheme: dark) {
        svg > path {
          fill: white;
        }
      }
      @media (prefers-color-scheme: light) {
        svg > path {
          fill: #363537;
        }
      }
    }

    svg {
      width: 1.2em;
    }
    svg:hover > path {
      fill: #61dafb;
    }
  }

  .details,
  .links {
    margin-top: 1.5em;
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
  max-width: 190px !important;

  margin: 0 auto;

  transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  border-radius: 0.25em;
  box-shadow: 2px 10px 30px hsla(0, 0%, 0%, 0.25);
  transition: 0.3s;
`

const Dom = ({ dom }) => {
  const [show, set] = useState(false)

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  })

  useEffect(() => {
    const timeout = setTimeout(() => !show && set(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Card
      style={fadeStyles}
      className='absolute left-0 right-0 z-20 p-10 bg-white shadow rounded-md dark:bg-cool-dark'
    >
      <Figure>
        <Image src='/img/me.png' alt='Alex' loading='lazy' />
      </Figure>

      <div className='details'>
        <h1 className='text-cool-dark name dark:text-white'>
          Alexandre Di Guida
        </h1>

        <h2 className='role text-cool-dark dark:text-white'>
          {'< '}Front End{' >'}
        </h2>
        <h2 className='text-cool-dark role dark:text-white'>
          Web + Mobile App
        </h2>
        <h2 className='text-cool-dark dev dark:text-white'>[ Developer ]</h2>
      </div>

      <div className='links'>
        <a
          href={socialUrl.twitter}
          aria-label='Twitter'
          target='_blank'
          rel='noopener noreferrer'
        >
          <TwitterIcon />
        </a>

        <a
          href={socialUrl.github}
          aria-label='Github'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon />
        </a>

        <a
          href={socialUrl.linkedin}
          aria-label='Linkedin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinIcon />
        </a>
      </div>
    </Card>
  )
}

export default Dom
