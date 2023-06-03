import { HeaderContainer, NavItems } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export function Header() {
  const { products } = useContext(CheckoutContext)
  const totalProducts = products.length
  const hasProductOnCart = totalProducts > 0
  return (
    <HeaderContainer totalProducts={totalProducts}>
      <NavLink to="/">
        <img
          src={logo}
          alt="logo do coffee delivery com um copo roxo com foguete desenhado e o nome da cafeteria a direita"
        />
      </NavLink>

      <NavItems totalProducts={totalProducts}>
        <span>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} /> Porto
          Alegre, RS
        </span>

        <NavLink
          className={`navlink ${hasProductOnCart ? 'hasItems' : ''}`}
          data-total={totalProducts}
          to="/checkout"
        >
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme['yellow-dark']}
          />
        </NavLink>
      </NavItems>
    </HeaderContainer>
  )
}
