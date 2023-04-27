import { useEffect, useState } from 'react'
import { HomeContainer, PostsContainer } from './styles'
import { CardPost, CardProfile, SearchPost } from './components'
import { getPosts } from '../../../service/getPosts'

export interface IPost {
  number: number
  title: string
  updated_at: Date
  body: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])

  async function getPost() {
    const response = (await getPosts()) as any
    setPosts(response)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <CardProfile />
      <HomeContainer>
        <SearchPost totalPosts={posts.length} onFilterPosts={getPosts} />

        <PostsContainer>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <CardPost
                  key={post.number}
                  id={post.number}
                  title={post.title}
                  content={post.body}
                  updatedAt={post.updated_at}
                />
              )
            })}
        </PostsContainer>
      </HomeContainer>
    </>
  )
}
