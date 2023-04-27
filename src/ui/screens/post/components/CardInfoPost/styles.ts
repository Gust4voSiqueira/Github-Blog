import styled from 'styled-components'

export const CardInfoPostContainer = styled.header`
  h1 {
    margin: 30px 0 20px;
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
`
