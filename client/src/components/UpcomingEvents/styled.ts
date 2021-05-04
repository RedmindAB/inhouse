import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  padding: 3rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const Event = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;

  ${breakpoints.mobile} {
    grid-gap: 1rem;
  }
`
