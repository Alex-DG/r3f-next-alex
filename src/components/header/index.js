import Head from 'next/head'
import share from '../../assets/images/share.png'

const name = 'Alexandre Di Guida'

const title = 'Alex DG ~ Frontend Web+Mobile App Developer'
const url = 'http://r3f-next-alex.vercel.app/'
const description = `${name}, French web and mobile app developer with more than 6 years of professionnal experience in the IT industry. I worked in France, England and in Scotland on web and mobile app technologies.`

const Header = () => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={name} />
        <meta name='designer' content={name} />
        <meta name='publisher' content={name} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Software Engineer,Project Manager,Frontend,Developer,Mobile,App,Computer Scientist'
        />
        <meta name='robots' content='index,follow' />
        <meta name='revisit-after' content='7 days' />
        <meta name='distribution' content='web' />

        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={share} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href='/icons/safari-pinned-tab.svg'
        />
        <link rel='apple-touch-startup-image' href='/startup.png' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/favicon.ico' />
        {/*
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={share} />
        <meta property='og:site_name' content={title} />
        <meta property='og:description' content={description} />
        {/*
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        {/* <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@alex_dg_' /> */}
      </Head>
    </>
  )
}

export default Header
