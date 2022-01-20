import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Custom404.module.css'

const Custom500: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>500 | Server Error</title>
      </Head>

      <Header/>
      <main>
        <img className={styles.left} src="/assets/svg/404/left.svg" alt="shapes_left" />
        <img className={styles.wolfy} src="/assets/svg/404/wolfy.svg" alt="wolfy_server_error" />
        <img className={styles.rigth} src="/assets/svg/404/rigth.svg" alt="shapes_rigth" />
        <h1>500</h1>
        <h2>Server Error</h2>
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

export default Custom500
