import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  width: 100%;
`

export const Picture = styled.img`
  height: 540px;
  width: 540px;
  max-width: 90vw;
  object-fit: cover;
  object-position: center center;

  ${breakpoints.mobile} {
    height: 300px;
    width: 100%;
  }
`
