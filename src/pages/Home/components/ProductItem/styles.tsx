import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 16rem;
  width: 100%;
  align-items: center;
  text-align: center;
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 2rem;

  h1.prodName {
    padding: 1rem 0 0.5rem 0;
  }

  span {
  }

  span.pill {
    text-transform: uppercase;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }

  img {
    margin-top: -1.25rem;
    padding-bottom: 0.75rem;
  }

  p {
    max-width: 13.5rem;
    padding-bottom: 2.06rem;
  }

  div.select {
    width: 100%;
    max-width: 13.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.25rem;

    span.formatPrice {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
    }

    .checkoutInput {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      input {
        max-width: 4.5rem;
        max-height: 2.375rem;
      }

      .addToCardButton {
        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['base-button']};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 38px;
        height: 2.375rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.purple};
        }

        &:disabled {
          background-color: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme['base-hover']};
          cursor: not-allowed;
        }
      }
    }
  }
`
