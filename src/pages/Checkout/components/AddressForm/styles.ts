import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;

  .errorMessage {
    width: 100%;
    text-align: center;
    margin: 0 0 1rem 0;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    display: none;

    &.show {
      display: block;
    }
  }

  .formHeader {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  .formFields {
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

      &.hasError {
        background: ${(props) => props.theme['yellow-light']};
        border: 1px solid ${(props) => props.theme['yellow-dark']};
      }
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
