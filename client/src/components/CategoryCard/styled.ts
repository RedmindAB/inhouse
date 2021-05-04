import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  height: 360px;
  width: 100%;
  max-width: 100vw;
  position: relative;

  img {
    object-position: center center;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    filter: saturate(0);
  }

  &:hover img {
    filter: saturate(1);
  }

  ${breakpoints.mobile} {
    img {
      filter: saturate(1);
    }
  }
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 40px 20px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #070707 100%);
`
