import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    background: ${(props) => props.theme.white};
    padding: 2rem;
    border-radius: 6px;
  }
`
