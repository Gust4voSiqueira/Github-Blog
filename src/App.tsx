import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./global/styles"
import { Home } from "./ui/screens/home"
import { defaultTheme } from "./global/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home /> 
    </ThemeProvider>
  )
}

export default App
