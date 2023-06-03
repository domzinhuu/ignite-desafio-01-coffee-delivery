import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Text, Title } from '../../styles/themes/global'
import { FinishedContainer, OrderLineData, SvgCircle } from './styles'
import deliverySvg from '../../assets/delivery.svg'
export function Finished() {
  return (
    <FinishedContainer>
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </Text>
                <Text size="M">Farrapos - Porto Alegre, RS</Text>
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
                  <strong>Cartão de Crédito</strong>
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
