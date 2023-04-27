import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 148px;
    border-radius: 8px;
  }
`

export const HeaderCardProfile = styled.header`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 70px;
    font-size: 0.8rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme['blue-200']};
  }
`

export const CardProfileContent = styled.section`
  margin-left: 33px;

  p {
    margin: 22px 0;
    line-height: 1.6rem;
    font-size: 1rem;
    color: ${(props) => props.theme['blue-100']};
  }
`

export const FooterCardProfile = styled.footer`
  width: 70%;

  nav {
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${(props) => props.theme['gray-200']};
      font-size: 16px;
      list-style: none;

      img {
        width: 20px;
        height: 20px;

        margin-right: 5px;
      }
    }
  }
`
