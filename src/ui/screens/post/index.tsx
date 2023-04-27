import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleContent, CardInfoPost } from './components'
import { findPostForId } from '../../../service/getPosts'

interface IPost {
  title: string
  updated_at: Date
  content: string
  comment: number
  createdAt: string
  userName: string
  url: string
}

export function Post() {
  const { idPost } = useParams()
  const [post, setPost] = useState<IPost>({} as IPost)
  const [loading, setLoading] = useState<boolean>(true)

  async function findPost() {
    const response = await findPostForId(idPost)
    setPost(response)
  }

  useEffect(() => {
    findPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const isPostLoad = Object.keys(post).length === 0
    setLoading(isPostLoad)
  }, [post])

  return post ? (
    <>
      <CardInfoPost
        comment={post.comment}
        createdAt={post.createdAt}
        title={post.title}
        userName={post.userName}
        url={post.url}
        isLoading={loading}
      />

      <ArticleContent>{post.content}</ArticleContent>
    </>
  ) : (
    <CardInfoPost isLoading />
  )
}
