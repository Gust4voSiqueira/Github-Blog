import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global/styles'
import { defaultTheme } from './global/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
