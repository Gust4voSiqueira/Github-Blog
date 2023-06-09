import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  background-color: ${(props) => props.theme['blue-900']};
  color: ${(props) => props.theme.white};
  padding: 32px;

  position: absolute;
  top: 31%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54rem;
  border-radius: 10px;

  @media (${(props) => props.theme.smartphone}) {
    width: 90vw;
    padding: 20px;

    top: translate(-30%, -30%);
    transform: translate(-50%, -20%);
  }

  @media (${(props) => props.theme.tablet}) {
    width: 90vw;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px;

  .c-loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .c-loader:before,
  .c-loader:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }
  .c-loader:before {
    animation: ball1 1s infinite;
    background-color: ${(props) => props.theme['blue-200']};
    box-shadow: 30px 0 0 #000;
    margin-bottom: 10px;
  }
  .c-loader:after {
    animation: ball2 1s infinite;
    background-color: ${(props) => props.theme['blue-200']};
    box-shadow: 30px 0 0 ${(props) => props.theme['blue-200']};
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(0.8);
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(1.2);
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.8);
      -moz-transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${(props) => props.theme['blue-200']};
    }
    50% {
      box-shadow: 0 0 0 ${(props) => props.theme['blue-200']};
      margin-bottom: 0;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(props) => props.theme['blue-200']};
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${(props) => props.theme['blue-200']};
    }
    50% {
      box-shadow: 0 0 0 ${(props) => props.theme['blue-200']};
      margin-top: -20px;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(props) => props.theme['blue-200']};
      margin-top: 0;
    }
  }
`
