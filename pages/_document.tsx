import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
              rel="preload"
              href="/fonts/Gilroy/Gilroy-Light.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Gilroy/Gilroy-Regular.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Gilroy/Gilroy-Medium.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Gilroy/Gilroy-Bold.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Gilroy/Gilroy-Heavy.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Roboto/Roboto-Light.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Roboto/Roboto-Regular.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Roboto/Roboto-Medium.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Roboto/Roboto-Bold.ttf"
              as="font"
              crossOrigin=""
          />
          <link
              rel="preload"
              href="/fonts/Roboto/Roboto-BoldCondensed.ttf"
              as="font"
              crossOrigin=""
          />
          <link rel="icon" href="/assets/png/goob_bridging_brandmark_color.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument