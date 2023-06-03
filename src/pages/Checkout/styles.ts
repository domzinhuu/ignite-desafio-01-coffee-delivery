import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 9.55rem 10rem;
  justify-content: space-between;
  gap: 2rem;
  .leftSide {
    flex: 1.5;
  }

  .rightSide {
    flex: 1;
  }

  .paymentCheckout {
    max-width: 28rem;
    width: 100%;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
    margin-top: 1rem;

    .separator {
      height: 1px;
      background: ${(props) => props.theme['base-button']};
      margin: 0 2.5rem;
    }
  }

  .checkoutForm {
    background: ${(props) => props.theme['base-card']};
    max-width: 40rem;
    width: 100%;
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 1rem;
  }

  .checkoutForm .formHeader {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  .checkoutForm .formFields {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;

    input {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-button']};
      padding: 0.75rem;
      border-radius: 4px;
      width: 100%;
    }

    .cep {
      grid-column: 1 / 3;
    }

    .street {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .number {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    .compl {
      grid-column: 3 / -1;
      grid-row: 3;
      position: relative;
      display: flex;
      align-items: center;

      span {
        position: absolute;
        right: 0.5rem;
        font-size: 0.75rem;
        font-style: italic;
        color: ${(props) => props.theme['base-label']};
      }
    }

    .neigh {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    .city {
      grid-column: 3 / 6;
      grid-row: 4;
    }

    .uf {
      grid-column: 6;
      grid-row: 4;
    }
  }
`

export const CheckoutValue = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1.5rem 2.5rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0.375rem 0;
  }
`

export const ConfirmButton = styled.button`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  margin-top: 1.25rem;
`

export const PaymentMethod = styled.div`
  max-width: 40rem;
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 1rem;
  padding: 2.5rem;

  .paymentSelector {
    display: flex;
    justify-content: space-between;

    label {
      background: ${(props) => props.theme['base-button']};
      padding: 1rem;
      border-radius: 6px;
      display: flex;
      gap: 0.75rem;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.75rem;
      position: relative;
      cursor: pointer;

      input[type='radio'] {
        position: absolute;
        width: 0;
        height: 0;
      }

      svg {
        color: ${(props) => props.theme.purple};
      }

      &.selected {
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme.purple};
      }
    }
  }
`
