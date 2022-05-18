import styled from 'styled-components'
import { Card } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Backdrop = styled.div`
  z-index: 10000;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  ${breakpoints.tablet} {
    padding: 0;
  }
`

export const Container = styled(Card)`
  width: 80%;
  max-width: 1400px;
  position: relative;
  padding: 100px;
  overflow: scroll;

  ${breakpoints.tablet} {
    width: 100%;
    height: 100%;
    padding: 100px 40px 40px 40px;
  }
`

export const CrossContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 15px;
  cursor: pointer;
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-gap: 40px;

    & button,
    & input,
    & select,
    & textarea {
      width: 100%;
    }
  }
`
