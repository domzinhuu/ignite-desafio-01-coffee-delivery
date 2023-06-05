import styled from 'styled-components'

export const CheckoutContainer = styled.form`
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

    .items {
      overflow-y: auto;
      max-height: 42vh;
      height: 100%;
    }
  }
`

export const CheckoutValue = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid ${(props) => props.theme['yellow-dark']};

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
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.yellow};
  }

  &:active {
    background: ${(props) => props.theme['yellow-dark']};
  }
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

export const EmptyCart = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
