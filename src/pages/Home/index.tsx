import { Title } from '../../styles/themes/global'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />

      <Products />
    </HomeContainer>
  )
}
