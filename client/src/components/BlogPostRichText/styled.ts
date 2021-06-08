import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
    margin: 10px 0;
  }

  p {
    line-height: 1.5;
  }
`

export const Image = styled.img`
  margin: 20px 0;
  max-width: 100%;
  object-fit: cover;
  object-position: center center;
`

export const BlockQuoteContainer = styled.div`
  background: var(--accent);
  padding: 40px 100px;
  margin: 20px 0;

  ${breakpoints.mobile} {
    padding: 20px 20px;
    overflow: hidden;
  }
`
