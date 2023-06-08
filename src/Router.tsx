import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Finished } from './pages/Finished'
import { useContext } from 'react'
import { CheckoutContext } from './contexts/CheckoutContext'
import { Loading } from './components/Loading'

export function Router() {
  const { isLoading } = useContext(CheckoutContext)
  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finished" element={<Finished />} />
      </Routes>
    </>
  )
}
