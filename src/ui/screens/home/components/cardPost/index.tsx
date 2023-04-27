import { CardPostContainer, HeaderCardPost } from './styles'
import { useNavigate } from 'react-router-dom'
import {
  distanceNowDate,
  formatterDate,
} from '../../../../../utils/formatterDate'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface ICardPost {
  id: number
  title: string
  updatedAt: Date
  content: string
}

export function CardPost({ id, content, updatedAt, title }: ICardPost) {
  const navigate = useNavigate()

  const updatedAtFormattedDate = distanceNowDate(updatedAt)

  return (
    <CardPostContainer onClick={() => navigate(`/post/${id}`)}>
      <HeaderCardPost>
        <h2>{title}</h2>
        <time
          title={formatterDate(updatedAt)}
          dateTime={updatedAtFormattedDate}
        >
          {updatedAtFormattedDate}
        </time>
      </HeaderCardPost>

      <ReactMarkdown className="previewContent">{content}</ReactMarkdown>
    </CardPostContainer>
  )
}
