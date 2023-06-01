import styled from 'styled-components'
import brandHeroBg from '../../../../assets/background_landpage.svg'

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 34rem;
  justify-content: space-between;
  padding: 0 10rem;
  align-items: center;
  background-image: url(${brandHeroBg});
  background-size: cover;

  h1 {
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  p {
    padding-right: 4rem;
  }
`

export const MainLeft = styled.div``

export const MainRight = styled.div``

export const BenefitDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 4.125rem;
  gap: 1.25rem;
`

type BgColor = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
export const BenefitItem = styled.div<{ bgColor: BgColor }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.bgColor]};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
