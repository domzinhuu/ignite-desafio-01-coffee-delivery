import styled from 'styled-components'

export const FormHeaderContainer = styled.div<{
  color: 'yellow-dark' | 'purple-dark'
}>`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;
  svg {
    color: ${(props) => props.theme[props.color]};
  }
`
