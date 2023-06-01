import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        max-width: 1440px;
        margin: 0 auto;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

  /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
`

type TitleFontSize = 'XL' | 'L' | 'M' | 'S' | 'XS'
type TextFontSize = 'L' | 'M' | 'S' | 'XS'
type ColorTypes =
  | 'white'
  | 'yellow-dark'
  | 'yellow-light'
  | 'yellow'
  | 'purple'
  | 'purple-light'
  | 'purple-dark'
  | 'base-title'
  | 'base-text'
  | 'base-subtitle'
  | 'base-label'
  | 'base-hover'
  | 'base-input'
  | 'base-button'
  | 'base-card'
  | 'background'

enum TitleFontSizeEnum {
  XL = 3,
  L = 2,
  M = 1.5,
  S = 1.25,
  XS = 1.125,
}

enum TextFontSizeEnum {
  L = 1.25,
  M = 1,
  S = 0.875,
  XS = 0.75,
}

function getTitleSize(key: string): number {
  switch (key) {
    case 'XL':
      return TitleFontSizeEnum.XL
    case 'L':
      return TitleFontSizeEnum.L
    case 'M':
      return TitleFontSizeEnum.M
    case 'S':
      return TitleFontSizeEnum.S
    case 'XS':
      return TitleFontSizeEnum.XS
    default:
      return TitleFontSizeEnum.XL
  }
}

function getTextSize(key: string): number {
  switch (key) {
    case 'L':
      return TextFontSizeEnum.L
    case 'M':
      return TextFontSizeEnum.M
    case 'S':
      return TextFontSizeEnum.S
    case 'XS':
      return TextFontSizeEnum.XS
    default:
      return TextFontSizeEnum.L
  }
}

export const Title = styled.h1<{
  size: TitleFontSize
  isBolder?: boolean
  color?: ColorTypes
}>`
  font-family: 'Baloo 2', sans-serif;
  font-weight: ${(props) => (props.isBolder ? 'bolder' : 'bold')};
  line-height: 130%;
  font-size: ${(props) => `${getTitleSize(props.size)}rem`};
  color: ${(props) => props.theme[props.color || 'base-text']};
`

export const Text = styled.p<{
  size: TextFontSize
  isBold?: boolean
  color?: ColorTypes
}>`
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.isBold ? 'bold' : '400')};
  line-height: 130%;
  font-size: ${(props) => `${getTextSize(props.size)}rem`};
  color: ${(props) => props.theme[props.color || 'base-text']};
`
