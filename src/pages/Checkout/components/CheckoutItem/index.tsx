import { Trash } from '@phosphor-icons/react'
import { Count } from '../../../../components/Count'
import { Text } from '../../../../styles/themes/global'
import { CheckoutItemContainer } from './styles'
import {
  CheckoutContext,
  CheckoutProduct,
} from '../../../../contexts/CheckoutContext'
import { useContext } from 'react'

interface CheckoutItemProps {
  item: CheckoutProduct
}

export function CheckoutItem({ item }: CheckoutItemProps) {
  const { addProductToCheckout, removeProductFromCheckout, currencyFormat } =
    useContext(CheckoutContext)

  function handleUpdateCounter(value: number) {
    const updatedItem: CheckoutProduct = {
      product: item.product,
      quantity: value,
    }
    addProductToCheckout(updatedItem)
  }

  function handleDeleteProduct() {
    removeProductFromCheckout(item)
  }
  return (
    <CheckoutItemContainer>
      <img
        className="itemPicture"
        src={item.product.logo}
        alt={`Foto do café selecionado: ${item.product.name}`}
      />

      <div className="content">
        <Text size="M" color="base-subtitle">
          {item.product.name}
        </Text>

        <div className="actions">
          <Count value={item.quantity} changeValue={handleUpdateCounter} />
          <button className="removeButton" onClick={handleDeleteProduct}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
      <Text className="price" size="M" isBold={true}>
        {currencyFormat.format(item.product.price)}
      </Text>
    </CheckoutItemContainer>
  )
}
