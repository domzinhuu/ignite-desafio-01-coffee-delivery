import { createContext, useState } from 'react'
import { Coffee } from '../data/product.list'
import { sumBy } from 'lodash'
import { useNavigate } from 'react-router-dom'

export enum PaymentType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  MONEY = 'money',
}

export interface CheckoutProduct {
  product: Coffee
  quantity: number
  subTotal?: number
}
export interface Address {
  city: string
  info?: string
  neighborhood: string
  number: number
  street: string
  uf: string
  zipCode: string
}

interface CheckoutContextProps {
  products: CheckoutProduct[]
  shipping: number
  total: number
  currencyFormat: Intl.NumberFormat
  deliveryAddress: Address | null
  paymentMethod: PaymentType
  isLoading: boolean
  changePaymentMethod: (paymentMethod: PaymentType) => void
  addProductToCheckout: (product: CheckoutProduct) => void
  removeProductFromCheckout: (product: CheckoutProduct) => void
  doCheckout: (address: Address) => void
}

export const CheckoutContext = createContext({} as CheckoutContextProps)

export function CheckoutContextProvider({ children }: any) {
  const [products, setProducts] = useState<CheckoutProduct[]>([])
  const [address, setAddress] = useState<Address | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(
    PaymentType.CREDIT_CARD,
  )

  const nav = useNavigate()

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
    setProducts(() => [...newList])
  }

  function handlePaymentTypeChange(paymentType: PaymentType) {
    setPaymentMethod(paymentType)
  }

  function handleCheckout(address: Address) {
    setIsLoading(true)
    setAddress(address)
    setTimeout(() => {
      setIsLoading(false)
      setProducts([])
      nav('/finished', { replace: true })
    }, 3000)
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
        isLoading,
        products,
        shipping,
        total,
        currencyFormat: format,
        paymentMethod,
        deliveryAddress: address,
        changePaymentMethod: handlePaymentTypeChange,
        addProductToCheckout: handleAddProductToCheckout,
        removeProductFromCheckout: handleRemoveProductFromCheckout,
        doCheckout: handleCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
