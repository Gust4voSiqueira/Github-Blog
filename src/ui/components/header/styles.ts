import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  max-height: 296px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 296px;
    width: 100%;
  }

  .logo {
    width: 148px;
    top: 50px;
    position: absolute;
  }

  @media (${(props) => props.theme.smartphone}) {
    width: 100vw;
    height: 30vh;

    img {
      height: 100%;
    }

    .logo {
      width: 120px;
      top: -20%;
      position: absolute;
    }
  }
`
