import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
`

export const PlayButton = styled.button`
  background: rgba(248, 84, 39, 0.47);
  height: 110px;
  width: 110px;
  border-radius: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${breakpoints.mobile} {
    transform: translate(-50%, -50%) scale(0.75);
  }

  & svg {
    margin-left: 6px;
  }
`
