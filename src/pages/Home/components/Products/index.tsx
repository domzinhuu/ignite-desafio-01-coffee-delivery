import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Text, Title } from '../../../../styles/themes/global'
import {
  CountInput,
  PillBox,
  ProductItem,
  ProductListItem,
  ProductsContainer,
} from './styles'
import { productList } from '../../../../data/product.list'

export function Products() {
  return (
    <ProductsContainer>
      <Title
        className="subtitle"
        size="L"
        isBolder={true}
        color="base-subtitle"
      >
        Nossos cafés
      </Title>

      <ProductListItem>
        {productList.map((coffee) => (
          <ProductItem key={coffee.name}>
            <img src={coffee.logo} alt="foto do café tradicional" />

            <PillBox>
              {coffee.types.map((type) => (
                <span className="pill" key={type}>
                  {type}
                </span>
              ))}
            </PillBox>

            <Title className="prodName" size="S" color="base-subtitle">
              {coffee.name}
            </Title>

            <Text size="S" color="base-label">
              {coffee.description}
            </Text>

            <div className="select">
              <span className="formatPrice">
                R$
                <Title size="M" isBolder={true}>
                  {coffee.price}
                </Title>
              </span>

              <div className="checkoutInput">
                <CountInput>
                  <Minus size={14} />
                  <input type="number" min={1} step={1} value={0} />
                  <Plus size={14} />
                </CountInput>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </div>
          </ProductItem>
        ))}
      </ProductListItem>
    </ProductsContainer>
  )
}
