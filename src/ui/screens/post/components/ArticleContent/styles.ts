import styled from 'styled-components'

export const ArticleContentContainer = styled.section`
  overflow: hidden;
  padding: 2.5rem 2rem;

  white-space: pre-wrap;

  p,
  b {
    color: ${(props) => props.theme['blue-100']};
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme['blue-200']};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  ul {
    margin-left: 1.25rem;
  }
`