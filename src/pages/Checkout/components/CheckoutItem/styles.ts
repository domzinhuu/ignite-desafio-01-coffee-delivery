import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2.5rem;
  gap: 1.25rem;

  .itemPicture {
    width: 64px;
    height: 64px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .actions {
      display: flex;
      gap: 0.5rem;
      button {
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        text-transform: uppercase;
        svg {
          color: ${(props) => props.theme.purple};
        }
      }
    }
  }

  .price {
    justify-self: flex-end;
  }
`
