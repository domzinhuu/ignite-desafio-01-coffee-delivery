import { ShoppingCart } from '@phosphor-icons/react'
import { Count } from '../../../../components/Count'
import { Coffee } from '../../../../data/product.list'
import { Text, Title } from '../../../../styles/themes/global'
import { PillBox } from '../Products/styles'
import { ProductItemContainer } from './styles'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'

interface ProductItemProps {
  product: Coffee
}

export function ProductItem({ product }: ProductItemProps) {
  const [prodCount, setProdCount] = useState<number>(0)
  const { addProductToCheckout } = useContext(CheckoutContext)

  function handleChangeCount(value: number) {
    setProdCount(value)
  }

  function handleAddProduct() {
    addProductToCheckout({ product, quantity: prodCount })
  }
  return (
    <ProductItemContainer key={product.name}>
      <img src={product.logo} alt="foto do café tradicional" />

      <PillBox>
        {product.types.map((type) => (
          <span className="pill" key={type}>
            {type}
          </span>
        ))}
      </PillBox>

      <Title className="prodName" size="S" color="base-subtitle">
        {product.name}
      </Title>

      <Text size="S" color="base-label">
        {product.description}
      </Text>

      <div className="select">
        <span className="formatPrice">
          R$
          <Title size="M" isBolder={true}>
            {product.price}
          </Title>
        </span>

        <div className="checkoutInput">
          <Count changeValue={handleChangeCount} value={prodCount} />
          <button
            className="addToCardButton"
            onClick={handleAddProduct}
            disabled={prodCount === 0}
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </ProductItemContainer>
  )
}
