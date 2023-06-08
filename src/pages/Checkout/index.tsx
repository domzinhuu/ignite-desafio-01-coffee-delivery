import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { Text, Title } from '../../styles/themes/global'
import {
  CheckoutContainer,
  CheckoutValue,
  ConfirmButton,
  EmptyCart,
  PaymentMethod,
} from './styles'
import { CheckoutItem } from './components/CheckoutItem'
import { FormHeader } from './components/CheckoutItem/FormHeader'
import React, { FormEvent, useContext, useState } from 'react'
import { CheckoutContext, PaymentType } from '../../contexts/CheckoutContext'
import { AddressForm } from './components/AddressForm'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const addressFormValidationSchema = z.object({
  zipCode: z.string().min(1, { message: 'Informe o CEP' }),
  street: z.string().min(1, { message: 'Informe o endereço' }),
  number: z
    .number({ coerce: true })
    .min(0, 'o numero deve ser maior ou igual a zero'),

  info: z.string().optional(),
  neighborhood: z.string().min(1, { message: 'Informe o bairro' }),
  city: z.string().min(1, { message: 'Informe a cidade' }),
  uf: z.string().min(1, { message: 'Informe o UF' }),
})

type AddressFormProps = z.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const {
    products,
    shipping,
    total,
    currencyFormat,
    paymentMethod,
    changePaymentMethod,
    doCheckout,
  } = useContext(CheckoutContext)

  const addressForm = useForm<AddressFormProps>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      city: '',
      info: '',
      neighborhood: '',
      street: '',
      uf: '',
      zipCode: '',
    },
  })

  const { handleSubmit, formState, reset } = addressForm

  function handleCheckoutPayment(data: AddressFormProps) {
    doCheckout(data)
    reset({ ...data })
  }

  function handlePaymentChange(type: PaymentType) {
    changePaymentMethod(type)
  }
  return (
    <FormProvider {...addressForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleCheckoutPayment)}>
        <div className="leftSide">
          <Title size="XS">Complete seu pedido</Title>

          <AddressForm />

          <PaymentMethod>
            <FormHeader
              icon={<CurrencyDollar size={22} />}
              iconColor="purple-dark"
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <div className="paymentSelector">
              <label
                htmlFor="creditCard"
                className={
                  paymentMethod === PaymentType.CREDIT_CARD ? 'selected' : ''
                }
              >
                <CreditCard size={16} />
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value={paymentMethod}
                  onClick={() => handlePaymentChange(PaymentType.CREDIT_CARD)}
                />
                Cartão de crédito
              </label>
              <label
                htmlFor="debitCard"
                className={
                  paymentMethod === PaymentType.DEBIT_CARD ? 'selected' : ''
                }
              >
                <Bank size={16} />
                <input
                  type="radio"
                  id="debitCard"
                  name="paymentMethod"
                  value={paymentMethod}
                  onClick={() => handlePaymentChange(PaymentType.DEBIT_CARD)}
                />
                Cartão de débito
              </label>
              <label
                htmlFor="money"
                className={
                  paymentMethod === PaymentType.MONEY ? 'selected' : ''
                }
              >
                <Money size={16} />
                <input
                  type="radio"
                  id="money"
                  name="paymentMethod"
                  value={paymentMethod}
                  onClick={() => handlePaymentChange(PaymentType.MONEY)}
                />
                Dinheiro
              </label>
            </div>
          </PaymentMethod>
        </div>

        <div className="rightSide">
          <Title size="XS">Cafés selecionados</Title>

          <div className="paymentCheckout">
            <div className="items">
              {products.map((prd) => (
                <React.Fragment key={prd.product.name}>
                  <CheckoutItem item={prd} />
                  <div className="separator"></div>
                </React.Fragment>
              ))}
            </div>
            {products.length > 0 && (
              <CheckoutValue>
                <div>
                  <Text size="S">Total items</Text>
                  <Text size="M">{currencyFormat.format(total)}</Text>
                </div>
                <div>
                  <Text size="S">Entrega</Text>
                  <Text size="M">{currencyFormat.format(shipping)}</Text>
                </div>
                <div>
                  <Text size="L" isBold={true}>
                    Total
                  </Text>
                  <Text size="L" isBold={true}>
                    {currencyFormat.format(total + shipping)}
                  </Text>
                </div>

                <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
              </CheckoutValue>
            )}

            {products.length === 0 && (
              <EmptyCart>
                <Text size="L">Nenhum item no carrinho!</Text>
              </EmptyCart>
            )}
          </div>
        </div>
      </CheckoutContainer>
    </FormProvider>
  )
}
