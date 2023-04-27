import styled from 'styled-components'

export const CardInfoPostContainer = styled.header`
  h1 {
    margin: 30px 0 20px;
  }

  @media (${(props) => props.theme.smartphone}) {
    h1 {
      text-align: center;
    }
  }
`

export const ButtonsContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .redirect {
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme['blue-200']};

    :hover {
      cursor: pointer;
    }
  }

  @media (${(props) => props.theme.smartphone}) {
    .redirect {
      font-size: 0.9rem;
    }
  }
`

export const LinksPost = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 60%;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    list-style: none;
    color: ${(props) => props.theme['gray-500']};

    img {
      width: 20px;
    }

    span {
      margin-left: 8px;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  @media (${(props) => props.theme.smartphone}) {
    width: 100%;

    li {
      flex-direction: column;

      span {
        font-size: 0.85rem;
        margin-top: 5px;
      }
    }
  }
`
