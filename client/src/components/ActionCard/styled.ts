import styled, { css } from 'styled-components'
import { Card } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'

type Props = {
  inverted?: boolean
  disabled?: boolean
}

const invertedContainer = css`
  background: var(--background);
  border: 2px solid var(--accent);
`

const disabledContainer = css`
  filter: blur(3px);
  transition: all 0.2s ease-out;
  opacity: 0.4;
  pointer-events: none;
  user-select: none;
`

export const Wrapper = styled.div`
  position: relative;
`

export const DisabledTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const Container = styled(Card)<Props>`
  ${({ inverted }) => inverted && invertedContainer}
  ${({ disabled }) => disabled && disabledContainer}
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
