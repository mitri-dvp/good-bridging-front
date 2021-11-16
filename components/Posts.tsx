import React from "react"
import Card from "./Card"

const Posts: React.FC<any> = ({ posts }) => {
  const leftPostsCount = Math.ceil(posts.length / 5)
  const leftPosts = posts.slice(0, leftPostsCount)
  const rightPosts = posts.slice(leftPostsCount, posts.length)

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftPosts.map((post: any, i: number) => {
            return (
              <Card post={post} key={`post__left__${post.slug}`} />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightPosts.map((post: any, i: number) => {
              return (
                <Card
                  post={post}
                  key={`post__left__${post.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts