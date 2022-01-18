import React from "react"
import Link from "next/link"
import { getStrapiMedia } from "../lib/media"
import dayjs from "dayjs"

const Card: React.FC<any> = ({ post, styles }) => {
  const imageUrl = getStrapiMedia(post.image)
  const date = dayjs(post.published_at).format('dddd DD, MMMM, YYYY')

  return (
    <Link scroll={true} href={`/posts/${post.slug}#`}>
      <a className={styles.post}>
        <div className={styles.image_container} style={{backgroundImage: `url(${imageUrl})`}}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.content}>
          <span>Posted {date}</span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card