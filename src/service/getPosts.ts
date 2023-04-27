import { api } from '../lib/axios'
import { IPost } from '../ui/screens/home'

export async function getPosts(fieldContent?: string) {
  const URL = fieldContent
    ? `/search/issues?q=${fieldContent}%20repo:Gust4voSiqueira/Github-Blog`
    : '/search/issues?q=repo:Gust4voSiqueira/Github-Blog'
  const response = await api.get(URL)

  return response.data.items.map((props: IPost) => {
    return {
      number: props.number,
      body: props.body,
      title: props.title,
      updated_at: new Date(props.updated_at),
    }
  })
}

export async function findPostForId(idPost: string | undefined) {
  const response = await api.get(
    `https://api.github.com/repos/Gust4voSiqueira/Github-Blog/issues/${idPost}`,
  )
  const { data } = response

  return {
    title: data.title,
    content: data.body,
    updated_at: data.updated_at,
    comment: data.comments,
    createdAt: data.created_at,
    url: data.html_url,
    userName: data.user.login,
  }
}
