import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { HomeContainer } from './styles'
import { Coffee } from '../../data/product.list'

export interface CheckoutProducts {
  coffee: Coffee
  count: number
}

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <Products />
    </HomeContainer>
  )
}
