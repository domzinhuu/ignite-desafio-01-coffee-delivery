import { Title } from '../../../../styles/themes/global'
import { ProductListItem, ProductsContainer } from './styles'
import { productList } from '../../../../data/product.list'
import { ProductItem } from '../ProductItem'

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
          <ProductItem product={coffee} key={coffee.name} />
        ))}
      </ProductListItem>
    </ProductsContainer>
  )
}
