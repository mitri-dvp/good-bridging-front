import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import dayjs from "dayjs"
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from "../../components/Image"
import Seo from "../../components/Seo"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

import styles from '../../styles/Post.module.css'
import React from "react"

const Post: NextPage<any> = ({ post, categories }) => {
  const imageUrl = getStrapiMedia(post.image)
  const date = dayjs(post.published_at).format('dddd DD, MMMM, YYYY')

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
    shareImage: post.image,
    article: true,
  }

  return (
    <div className={styles.container}>
      <Seo seo={seo} />

      <Header/>
      <article>
        <h1>{post.title}</h1>
        <span className={styles.date}>Posted {date}</span>
        <img
          src={imageUrl}
          alt={post.image.alternativeText || ""}
        />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
      <Footer/>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/posts")

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const posts = await fetchAPI(`/posts?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { post: posts[0], categories },
    revalidate: 1,
  }
}

export default Post