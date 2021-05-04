import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`
