import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
