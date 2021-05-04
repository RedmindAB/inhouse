import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  min-height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 86px 152px;
  position: relative;
  overflow: hidden;

  ${breakpoints.tablet} {
    padding: 60px;
  }
`

export const GraphicsContainer = styled.div`
  position: absolute;
  z-index: -10;

  & > * {
    transform: rotate(-22deg) scale(1.3);
  }
`

export const Inner = styled.div`
  background: var(--background);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 120px;
  text-align: center;

  ${breakpoints.tablet} {
    padding: 40px;
  }
`
