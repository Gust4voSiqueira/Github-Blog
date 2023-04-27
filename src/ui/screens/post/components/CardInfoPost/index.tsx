import { CaretLeft, ChatCircle, Link } from 'phosphor-react'
import { ButtonsContainer, CardInfoPostContainer, LinksPost } from './styles'

import calendaryIcon from '../../../../../assets/calendary.svg'
import githubIcon from '../../../../../assets/github.svg'
import { Link as Redirect } from 'react-router-dom'
import { distanceNowDate } from '../../../../../utils/formatterDate'
import { Card } from '../../../../components/card'

interface ICardInfoPost {
  title?: string
  comment?: number
  createdAt?: string
  userName?: string
  url?: string
  isLoading?: boolean
}

export function CardInfoPost({
  title,
  comment,
  createdAt,
  url,
  userName,
  isLoading,
}: ICardInfoPost) {
  const createdAtFormatted = createdAt && distanceNowDate(new Date(createdAt))

  return (
    <Card isLoading={isLoading}>
      <CardInfoPostContainer>
        <ButtonsContainer>
          <Redirect to="/" className="redirect">
            <CaretLeft size={25} />
            Voltar
          </Redirect>

          <Redirect to={url!} className="redirect">
            Ver no Github
            <Link size={22} />
          </Redirect>
        </ButtonsContainer>

        <h1>{title}</h1>

        <LinksPost>
          <li>
            <img src={githubIcon} alt="" />
            <span>{userName}</span>
          </li>

          <li>
            <img src={calendaryIcon} alt="" />
            <span>{createdAtFormatted}</span>
          </li>

          <li>
            <ChatCircle size={22} weight="fill" />
            <span>{comment} comentários</span>
          </li>
        </LinksPost>
      </CardInfoPostContainer>
    </Card>
  )
}
