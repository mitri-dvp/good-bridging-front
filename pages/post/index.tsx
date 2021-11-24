import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

import styles from '../../styles/Blog.module.css'
import { fetchAPI } from '../../lib/api'
import Card from '../../components/Card'

const Blog: NextPage<any> = ({ posts }) => {
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

          {posts.length < 1 ?
            <h1>No posts yet!</h1>
            :
            <div className={styles.posts}>
                {posts.map((post: any) => <Card key={post.id} styles={styles} post={post} />)}
            </div>
          }
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetchAPI(`/posts`)

  return {
    props: { posts },
  }
}

export default Blog
