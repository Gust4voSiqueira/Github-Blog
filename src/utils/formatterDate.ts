import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatterDate = (date: Date) => {
  return format(date, "d 'de' LLLL 'ás' HH:mm'h", {
    locale: ptBR,
  })
}

export const distanceNowDate = (updatedAt: Date) => {
  return formatDistanceToNowStrict(updatedAt, {
    locale: ptBR,
    addSuffix: true,
  })
}
