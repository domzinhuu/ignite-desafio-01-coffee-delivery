import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
