import React from 'react'
import { CardProfileContainer, LoaderContainer } from './styles'

interface ICard {
  children: React.ReactNode
  isLoading?: boolean
}

export function Card({ children, isLoading }: ICard) {
  return (
    <div>
      {!isLoading ? (
        <CardProfileContainer>{children}</CardProfileContainer>
      ) : (
        <CardProfileContainer>
          <LoaderContainer>
            <div className="c-loader"></div>
          </LoaderContainer>
        </CardProfileContainer>
      )}
    </div>
  )
}
