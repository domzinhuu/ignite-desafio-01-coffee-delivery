import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  position: fixed;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};
  top: 0;
  left: 0;
  right: 0;
`

export const NavItems = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;

  span {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .navlink {
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
