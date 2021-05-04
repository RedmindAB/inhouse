import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;

  & > div {
    justify-self: center;
  }

  & > div:first-child {
    justify-self: flex-start;
  }

  ${breakpoints.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    & > div:first-child {
      grid-column: 1 / -1;
    }

    & > div {
      justify-self: initial;
    }
  }
`
