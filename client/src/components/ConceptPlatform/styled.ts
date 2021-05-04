import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.section`
  height: 900px;
  max-height: 80vh;
  position: relative;
`

export const PlatformsContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: calc(3rem + 226px);

  ${breakpoints.mobile} {
    left: 3rem;
  }
`

export const SectionTitle = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
`

export const Background = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
`
