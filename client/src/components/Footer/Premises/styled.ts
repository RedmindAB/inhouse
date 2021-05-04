import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'
import { anchorStyles, Body1 } from '../../../theme/typography'

export const Container = styled.div``

export const Link = styled(Body1)`
  ${breakpoints.mobile} {
    margin-bottom: 0.8rem;
  }

  & a {
    ${anchorStyles}
  }
`
