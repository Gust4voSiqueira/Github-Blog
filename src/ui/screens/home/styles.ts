import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${props => props.theme['black-700']};
`

export const HomeContent = styled.div`
  padding-top: 100px;
  max-width: 54rem;

  margin: 0 auto;
`

export const PostsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 48px;
`