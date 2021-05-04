import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'

export const Container = styled.section<{
  withoutRightPadding?: boolean
  background?: string
}>`
  display: grid;
  grid-template-columns: 226px 1fr 80px;
  position: relative;
  ${({ withoutRightPadding }) =>
    withoutRightPadding && 'grid-template-columns: 226px auto 0'}
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
  ${({ background }) => background && `background: ${background}`}

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    & .title-section-content {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }
`

export const TitleContainer = styled.div`
  padding-top: 3rem;
  max-width: 150px;
`

export const ScrollAnchor = styled.span`
  position: absolute;
  top: -60px;
`
