import styled from 'styled-components'

export const FinishedContainer = styled.div`
  padding: 9.55rem 10rem;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2.5rem;
    width: 100%;

    .orderDataContainer {
      max-width: 32.87rem;
      width: 100%;
      border-radius: 6px 36px 6px 36px;

      background: linear-gradient(
        to right,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme.purple}
      );

      .orderData {
        margin: 1px;
        padding: 2.5rem;
        border-radius: 6px 36px 6px 36px;
        background: ${(props) => props.theme.background};
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
`

export const OrderLineData = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SvgCircle = styled.div<{
  color: 'purple' | 'yellow' | 'yellow-dark'
}>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
`
