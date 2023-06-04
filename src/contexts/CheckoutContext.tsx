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
  currencyFormat: Intl.NumberFormat
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({ children }: any) {
  const [products, setProducts] = useState<CheckoutProduct[]>([])

  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

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
    const newList = products.filter(
      (prod) => prod.product.name !== product.product.name,
    )
    console.log(newList)
    setProducts(() => [...newList])
  }

  let shipping = 0
  let total = 0

  total = sumBy(products, 'subTotal')

  if (total > 0 && total < 30) {
    shipping = 10
  } else if (total >= 30) {
    shipping = 0
  }

  return (
    <CheckoutContext.Provider
      value={{
        products,
        shipping,
        total,
        currencyFormat: format,
        addProductToCheckout: handleAddProductToCheckout,
        removeProductFromCheckout: handleRemoveProductFromCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
