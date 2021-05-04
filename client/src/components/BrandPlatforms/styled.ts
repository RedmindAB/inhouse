import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const TopTextContainer = styled.span`
  grid-column: -1 / 1;
`

export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  width: 40%;
  height: 60%;
`

export const BodyContainer = styled.div`
  padding: 2rem;

  ${breakpoints.mobile} {
    padding: 0;
    padding-top: 2rem;
  }
`
