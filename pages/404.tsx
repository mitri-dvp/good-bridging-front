import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Custom404.module.css'

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 | Not Found</title>
      </Head>

      <Header/>
      <main>
        <img className={styles.left} src="/assets/svg/404/left.svg" alt="" />
        <img className={styles.wolfy} src="/assets/svg/404/wolfy.svg" alt="" />
        <img className={styles.rigth} src="/assets/svg/404/rigth.svg" alt="" />
        <h1>404</h1>
        <h2>Page not found</h2>
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Custom404