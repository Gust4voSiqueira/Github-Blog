import React, { useState } from 'react'
import { HeaderSearchForm, SearchFormContainer } from './styles'

interface ISearchForm {
  totalPosts: number
  onFilterPosts: (fieldContent: string) => void
}

export function SearchPost({ totalPosts, onFilterPosts }: ISearchForm) {
  const [fieldContent, setFieldContent] = useState('')

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFieldContent(e.target.value)
  }

  function handleFilterForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onFilterPosts(fieldContent)
  }

  return (
    <>
      <SearchFormContainer onSubmit={handleFilterForm}>
        <HeaderSearchForm>
          <span>Publicações</span>
          {totalPosts > 1 ? (
            <p>{totalPosts} publicações</p>
          ) : (
            <p>{totalPosts} publicação</p>
          )}
        </HeaderSearchForm>

        <input type="text" placeholder="Buscar conteúdo" onChange={onChange} />
      </SearchFormContainer>
    </>
  )
}
