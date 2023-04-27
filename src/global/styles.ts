import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  html, body {
    background-color: ${(props) => props.theme['black-700']};
    font-family: 'Nunito', sans-serif;
    
    overflow: hidden;
  }

  code {
    font-family: 'Fira Code', sans-serif;
  }
`
