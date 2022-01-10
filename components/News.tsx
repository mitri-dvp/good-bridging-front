import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { getStrapiMedia } from '../lib/media'

const News: React.FC<any> = ({posts, styles}) => {
  return (
    <section className={styles.news} id="blog">
      <div className={styles.header}>
        <h1>Good Bridging News</h1>
        <img src="/assets/svg/home-news-mascot.svg" alt="" />
      </div>
      {posts.length < 1 ? (
        <h1>No posts yet!</h1>
        ) : (
        <div className={`${styles.content} ${posts.length === 1 ? styles.single : ''}`}>
          <FeaturedPost post={posts[0]} styles={styles}/>
          {posts.length > 1 && (
            <div className={styles.rigth}>
              {posts.slice(1).map((post: any) => <Post key={post.id} post={post} styles={styles}/>)}
            </div>
          )}
        </div>
      )}
      </section>
  )
}

const FeaturedPost: React.FC<any> = ({post, styles}) => {
  const imageUrl = getStrapiMedia(post.image)
  const date = dayjs(post.published_at).format('dddd DD, MMMM, YYYY')

  return (
    <div className={styles.left}>
      <Link href={`/posts/${post.slug}#`}>
        <a className={styles.image_container} style={{backgroundImage: `url(${imageUrl})`}}>
          <img src={imageUrl} alt="" />
        </a>
      </Link>
      <span>Posted {date}</span>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Link href={`/posts/${post.slug}#`}>
        <a>Read More</a>
      </Link>
    </div>
  )
}
const Post: React.FC<any> = ({post, styles}) => {
  const imageUrl = getStrapiMedia(post.image)
  const date = dayjs(post.published_at).format('dddd DD, MMMM, YYYY')

  return (
    <div className={styles.post}>
      <Link href={`/posts/${post.slug}#`}>
        <a className={styles.image_container} style={{backgroundImage: `url(${imageUrl})`}}>
          <img src={imageUrl} alt="" />
        </a>
      </Link>
      <Link href={`/posts/${post.slug}#`}>
      <a className={styles.post_content}>
        <span>Posted {date}</span>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </a>
      </Link>
    </div>
  )
}

export default News
