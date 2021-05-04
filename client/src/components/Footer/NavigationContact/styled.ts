import styled from 'styled-components'
import { hrefHover } from '../../../theme/base'
import { anchorStyles, Body2 } from '../../../theme/typography'

export const Container = styled.div``

export const PageLink = styled(Body2)`
  margin-bottom: 1rem;

  & a {
    ${hrefHover};
  }
`

export const Underlined = styled.span`
  text-decoration: underline;
`

export const Mail = styled.a`
  ${anchorStyles}

  &:hover span {
    text-decoration: underline !important;
  }
`
