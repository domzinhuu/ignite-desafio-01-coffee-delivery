import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Text, Title } from '../../styles/themes/global'
import { FinishedContainer, OrderLineData, SvgCircle } from './styles'
import deliverySvg from '../../assets/delivery.svg'
import { LottieOptions, useLottie } from 'lottie-react'
import finishedCheckout from '../../assets/complete.json'
import { useContext, useState } from 'react'
import { CheckoutContext, PaymentType } from '../../contexts/CheckoutContext'

const styles = {
  width: '500px',
}
export function Finished() {
  const options: LottieOptions = {
    animationData: finishedCheckout,
    onComplete: () => {
      setShowAnimation(false)
    },
    loop: false,
  }

  const [showAnimation, setShowAnimation] = useState<boolean>(true)
  const { View } = useLottie(options, styles)
  const { deliveryAddress, paymentMethod } = useContext(CheckoutContext)

  function formatPaymentMethod(paymentMethod: PaymentType) {
    switch (paymentMethod) {
      case PaymentType.CREDIT_CARD:
        return 'Cartão de crédito'
      case PaymentType.DEBIT_CARD:
        return 'Carta de débito'
      default:
        return 'Dinheiro'
    }
  }
  return (
    <FinishedContainer>
      {showAnimation && <div className="successAnimation">{View}</div>}
      <Title size="L" isBolder={true} color="yellow-dark">
        Uhu! Pedido confirmado
      </Title>
      <Text size="L">Agora é só aguardar que logo o café chegará até você</Text>

      <div className="content">
        <div className="orderDataContainer">
          <div className="orderData">
            <OrderLineData>
              <SvgCircle color="purple">
                <MapPin />
              </SvgCircle>
              <div>
                <Text size="M">
                  Entrega em{' '}
                  <strong>
                    {deliveryAddress?.street}, {deliveryAddress?.number}
                  </strong>
                </Text>
                <Text size="M">
                  {deliveryAddress?.neighborhood} - {deliveryAddress?.city},{' '}
                  {deliveryAddress?.uf}
                </Text>
              </div>
            </OrderLineData>
            <OrderLineData>
              <SvgCircle color="yellow">
                <Timer />
              </SvgCircle>
              <div>
                <Text size="M">Previsão de entrega</Text>
                <Text size="M">
                  <strong>20 min - 30 min </strong>
                </Text>
              </div>
            </OrderLineData>
            <OrderLineData>
              <SvgCircle color="yellow-dark">
                <CurrencyDollar />
              </SvgCircle>
              <div>
                <Text size="M">Pagamento na entrega</Text>
                <Text size="M">
                  <strong>{formatPaymentMethod(paymentMethod)}</strong>
                </Text>
              </div>
            </OrderLineData>
          </div>
        </div>

        <img
          src={deliverySvg}
          alt="imagem de um home numa scooter roxa simbolizando que a entrega está a caminho"
        />
      </div>
    </FinishedContainer>
  )
}
