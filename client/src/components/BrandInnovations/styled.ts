import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div``

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const Background = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: var(--accent);

  & > * {
    opacity: 0.15;
  }
`
