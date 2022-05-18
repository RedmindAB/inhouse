import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  background: var(--accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  img {
    height: 960px;
    width: 100%;
    max-width: 2560px;
    object-fit: cover;
    object-position: center center;
  }

  ${breakpoints.mobile} {
    img {
      height: 60vh;
    }
  }
`
