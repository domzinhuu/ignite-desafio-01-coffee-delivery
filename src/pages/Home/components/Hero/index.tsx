import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Text, Title } from '../../../../styles/themes/global'
import landPageLogo from '../../../../assets/land_page_img.svg'
import {
  BenefitDetails,
  BenefitItem,
  HeroContainer,
  MainLeft,
  MainRight,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <MainLeft>
        <Title size="XL" isBolder={true} color="base-title">
          Encontre o café perfeito para qualquer hora do dia
        </Title>

        <Text size="L" color="base-subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>

        <BenefitDetails>
          <BenefitItem bgColor="yellow-dark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </BenefitItem>

          <BenefitItem bgColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </BenefitItem>

          <BenefitItem bgColor="base-text">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </BenefitItem>

          <BenefitItem bgColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </BenefitItem>
        </BenefitDetails>
      </MainLeft>
      <MainRight>
        <img
          src={landPageLogo}
          alt="foto de um copo de cafe preto e branco escrito coffee delivery com um fundo amarelo e sementes de café em volta."
        />
      </MainRight>
    </HeroContainer>
  )
}
