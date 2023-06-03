import { HeaderContainer, NavItems } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/themes/default'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logo}
          alt="logo do coffee delivery com um copo roxo com foguete desenhado e o nome da cafeteria a direita"
        />
      </NavLink>

      <NavItems>
        <span>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} /> Porto
          Alegre, RS
        </span>

        <NavLink className="navlink" to="/checkout">
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
