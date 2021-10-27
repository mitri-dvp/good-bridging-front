import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Welcome to Good Bridging</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header>
        <nav>
          <a href="#" className={styles.logo}>
            <img src="./assets/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
            <div>Good <span>Bridging</span></div>
          </a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Partners</a>
          <a href="#">Calendar</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.content}>
            <img className={styles.shapes} src="./assets/home-hero-shapes.svg" alt="" />
            <img className={styles.mascot} src="./assets/home-hero-mascot.svg" alt="" />
            <div>
              <h1>Good Morning and Good Bridging!</h1>
              <p>&quot;GM and GB&quot; stands for &quot;Good Morning and Good Bridging&quot;, as every new ERC-20assets cross from Ethereum to avalanche since it&apos;s way faster and cheaper, therefore enhancing the DeFi experience.</p>
            </div>
          </div>
        </section>
        <section className={styles.about}>
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home
