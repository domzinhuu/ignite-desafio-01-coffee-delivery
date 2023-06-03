import styled from 'styled-components'

export const CountInput = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  gap: 0.357rem;
  justify-content: center;
  align-items: center;
  padding: 0%.5rem;
  height: 2.375rem;

  .iconButton {
    background: transparent;
    width: auto;
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    text-align: center;
    background: transparent;
  }

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
