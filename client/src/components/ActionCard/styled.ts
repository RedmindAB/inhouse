import styled, { css } from 'styled-components'
import { Card } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'

type Props = {
  inverted?: boolean
}

const invertedContainer = css`
  background: var(--background);
  border: 2px solid var(--accent);
`

export const Container = styled(Card)<Props>`
  ${({ inverted }) => inverted && invertedContainer}
`

export const TextContainer = styled.div`
  width: 50%;

  ${breakpoints.tablet} {
    width: 100%;
    margin-bottom: 50px;
  }
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.tablet} {
    flex-direction: column;

    & div,
    & button {
      width: 100%;
    }
  }
`

export const BottomArea = styled.div`
  background: var(--background);
  min-height: 100px;
  margin: 0 -50px;
  padding: 20px;
`
