import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * The server-side rendering fetch the styles before rendering the page.
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const { pathname } = ctx
      const lang = pathname.startsWith('/jp') ? 'jp' : 'en'
      const props = { ...initialProps, lang }

      return {
        ...props,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        {process.env.NEXT_PUBLIC_GOOGLE && (
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE});
        `,
              }}
            />
          </Head>
        )}
        <body>
          <script src='noflash.js' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
