import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'

export const newsCardWidth = 410
export const newsCardWidthMobile = 285

export const Container = styled.div`
  width: ${newsCardWidth}px;

  ${breakpoints.mobile} {
    width: ${newsCardWidthMobile}px;
  }

  img {
    transform: scale(1);
  }

  &:hover img {
    transform: scale(1.2);
  }
`

export const ImageWrapper = styled.div`
  height: 250px;
  width: ${newsCardWidth}px;
  overflow: hidden;

  ${breakpoints.mobile} {
    width: ${newsCardWidthMobile}px;
  }
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: center center;
  transition: all 0.2s;
`

export const PreambleContainer = styled.div`
  min-height: 100px;
  overflow: hidden;

  ${breakpoints.mobile} {
    height: auto;
  }
`
