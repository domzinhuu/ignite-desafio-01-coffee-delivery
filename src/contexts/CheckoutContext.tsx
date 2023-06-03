import { createContext, useState } from 'react'
import { Coffee } from '../data/product.list'
import { sumBy } from 'lodash'

export interface CheckoutProduct {
  product: Coffee
  quantity: number
  subTotal?: number
}

interface CheckoutContextProps {
  products: CheckoutProduct[]
  shipping: number
  total: number
  addProductToCheckout: (product: CheckoutProduct) => void
  removeProductFromCheckout: (product: CheckoutProduct) => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({ children }: any) {
  const [products, setProducts] = useState<CheckoutProduct[]>([])

  function handleAddProductToCheckout(item: CheckoutProduct) {
    item.subTotal = item.product.price * item.quantity
    const index = products.findIndex(
      (prod) => prod.product.name === item.product.name,
    )

    if (index > -1) {
      setProducts((prev) => {
        prev[index] = item
        return [...prev]
      })
    } else {
      setProducts((prev) => [...prev, item])
    }
  }

  function handleRemoveProductFromCheckout(product: CheckoutProduct) {
    setProducts((prev) =>
      prev.filter((prod) => prod.product.name === product.product.name),
    )
  }

  let shipping = 0
  let total = 0

  total = sumBy(products, 'subTotal')

  if (total > 0 && total < 30) {
    shipping = 3.5
  } else if (total >= 30) {
    shipping = 0
  }

  console.log('Frete: ', shipping)
  console.log('Total: ', total)

  return (
    <CheckoutContext.Provider
      value={{
        products,
        shipping,
        total,
        addProductToCheckout: handleAddProductToCheckout,
        removeProductFromCheckout: handleRemoveProductFromCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
