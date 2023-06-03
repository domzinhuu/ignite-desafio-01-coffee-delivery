import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 0 10rem;

  h1.subtitle {
    padding-bottom: 3.375rem;
  }
`

export const ProductListItem = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const PillBox = styled.div`
  display: flex;
  gap: 0.75rem;
`
