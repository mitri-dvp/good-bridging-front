import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

import styles from '../../styles/Blog.module.css'

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Good Bridging</title>
      </Head>

      <Header/>

      <main>
        <header>
          <img className={styles.wolfy} src="/assets/svg/blog/wolfy.svg" alt="" />
          <h1>Good Bridging News</h1>
          <h2>Stay tuned for the latest news and updates from Good Bridging</h2>
        </header>

        <div className={styles.posts}>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
          <Link href="/posts/">
            <a className={styles.post}>
              <img src="/assets/png/blog/thumbnail.png" alt="" />
              <div className={styles.content}>
                <span>Posted Monday 00, Month, Year</span>
                <h1>Post Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism </p>
              </div>
            </a>
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Blog
