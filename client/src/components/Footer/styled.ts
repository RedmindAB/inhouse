import styled from 'styled-components'
import { hrefHover } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'
import { Body4 } from '../../theme/typography'

export const Container = styled.div`
  background: #151518;
  padding: 7.2rem 0 3.2rem 0rem;

  ${breakpoints.mobile} {
    padding: 3rem;
  }
`

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-gap: 40px;

    & * {
      display: inline-block;
    }

    & svg {
      margin-right: 40px;
    }
  }
`

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 50px;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    padding-bottom: 2.4rem;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Social = styled.div`
  display: flex;

  & > * {
    margin-left: 2.4rem;
    ${hrefHover}
  }
`

export const Link = styled(Body4).attrs(() => ({ light: true }))`
  ${hrefHover}
`
