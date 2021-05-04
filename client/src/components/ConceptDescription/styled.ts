import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 60rem 1fr;
  padding: 3rem;
  padding-left: calc(3rem + 226px);
  grid-gap: 6rem;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    padding-left: 3rem;
  }
`
