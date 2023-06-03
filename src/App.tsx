import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Header />
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
