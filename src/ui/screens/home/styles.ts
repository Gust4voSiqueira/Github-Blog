import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const PostsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 48px;

  @media (${(props) => props.theme.smartphone}) {
    margin-top: 30px;
  }
`
