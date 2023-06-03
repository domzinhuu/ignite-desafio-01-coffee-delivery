import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { Text, Title } from '../../styles/themes/global'
import {
  CheckoutContainer,
  CheckoutValue,
  ConfirmButton,
  PaymentMethod,
} from './styles'
import { productList } from '../../data/product.list'
import { CheckoutItem } from './components/CheckoutItem'
import { FormHeader } from './components/CheckoutItem/FormHeader'
import { useState } from 'react'

export function Checkout() {
  const coffee = productList[0]
  const [paymentMethod, setPaymentMethod] = useState<string>('creditCard')

  return (
    <CheckoutContainer>
      <div className="leftSide">
        <Title size="XS">Complete seu pedido</Title>

        <form className="checkoutForm">
          <FormHeader
            icon={<MapPinLine size={22} />}
            iconColor="yellow-dark"
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
          <div className="formFields">
            <input className="cep" type="text" placeholder="CEP" />
            <input className="street" type="text" placeholder="Rua" />
            <input className="number" type="text" placeholder="Número" />
            <div className="compl">
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
            <input className="neigh" type="text" placeholder="Bairro" />
            <input className="city" type="text" placeholder="Cidade" />
            <input className="uf" type="text" placeholder="UF" />
          </div>
        </form>

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
              className={paymentMethod === 'creditCard' ? 'selected' : ''}
            >
              <CreditCard size={16} />
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value={paymentMethod}
                onClick={() => setPaymentMethod('creditCard')}
              />
              Cartão de crédito
            </label>
            <label
              htmlFor="debitCard"
              className={paymentMethod === 'debitCard' ? 'selected' : ''}
            >
              <Bank size={16} />
              <input
                type="radio"
                id="debitCard"
                name="paymentMethod"
                value={paymentMethod}
                onClick={() => setPaymentMethod('debitCard')}
              />
              Cartão de débito
            </label>
            <label
              htmlFor="money"
              className={paymentMethod === 'money' ? 'selected' : ''}
            >
              <Money size={16} />
              <input
                type="radio"
                id="money"
                name="paymentMethod"
                value={paymentMethod}
                onClick={() => setPaymentMethod('money')}
              />
              Dinheiro
            </label>
          </div>
        </PaymentMethod>
      </div>

      <div className="rightSide">
        <Title size="XS">Cafés selecionados</Title>

        <div className="paymentCheckout">
          <CheckoutItem />
          <div className="separator"></div>
          <CheckoutItem />
          <div className="separator"></div>
          <CheckoutValue>
            <div>
              <Text size="S">Total items</Text>
              <Text size="M">R$ 29,70</Text>
            </div>
            <div>
              <Text size="S">Entrega</Text>
              <Text size="M">R$ 3,50</Text>
            </div>
            <div>
              <Text size="L" isBold={true}>
                Total
              </Text>
              <Text size="L" isBold={true}>
                R$ 33,20
              </Text>
            </div>

            <ConfirmButton>Confirmar Pedido</ConfirmButton>
          </CheckoutValue>
        </div>
      </div>
    </CheckoutContainer>
  )
}
