import { HeaderSearchForm, SearchFormContainer } from "./styles";

export function SeachForm() {
  return (
    <>
      <SearchFormContainer>
        <HeaderSearchForm>
          <span>Publicações</span>
          <p>6 publicações</p>
        </HeaderSearchForm>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
    </>
  )
}