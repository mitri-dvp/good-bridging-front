import { createContext } from "react"

import App from "next/app"
import Head from "next/head"
import type { AppProps } from 'next/app'

import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"

import '../styles/globals.css'
import '../styles/fonts.css'

// Store Strapi Global object in context
export const GlobalContext = createContext<any>({})

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // 1. Calls page's `getInitialProps` and fills `appProps.pageProps`
  // 2. Fetch global site settings from Strapi
  // 3. Pass the data to our page via props
  const appProps = await App.getInitialProps(ctx)
  const global = await fetchAPI("/global")
  return { ...appProps, pageProps: { global } }
}

export default MyApp
