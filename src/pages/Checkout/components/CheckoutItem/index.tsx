import { Trash } from '@phosphor-icons/react'
import { Count } from '../../../../components/Count'
import { productList } from '../../../../data/product.list'
import { Text } from '../../../../styles/themes/global'
import { CheckoutItemContainer } from './styles'

export function CheckoutItem() {
  const coffee = productList[0]
  return (
    <CheckoutItemContainer>
      <img
        className="itemPicture"
        src={coffee.logo}
        alt={`Foto do café selecionado: ${coffee.name}`}
      />

      <div className="content">
        <Text size="M" color="base-subtitle">
          {coffee.name}
        </Text>

        <div className="actions">
          <Count />
          <button>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
      <Text className="price" size="M" isBold={true}>
        R$ {coffee.price}
      </Text>
    </CheckoutItemContainer>
  )
}
