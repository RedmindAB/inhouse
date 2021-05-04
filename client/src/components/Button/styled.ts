import styled, { css } from 'styled-components'
import { Headline4 } from '../../theme/typography'
import { ButtonVariant } from './Button'

const defaultContainer = css`
  background: var(--accent);
`
const backgroundContainer = css`
  background: var(--background);
`
const outlineContainer = css`
  background: var(--accent);
  border: 2px solid var(--background);
`
const outlineBackgroundContainer = css`
  background: var(--background);
  border: 2px solid var(--accent);
`

const disabledContainer = css`
  cursor: not-allowed;
  opacity: 0.5;
`

export const buttonHeight = '60px'

export const Container = styled.button<{
  variant: ButtonVariant
  disabled: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${buttonHeight};
  padding: 0 40px;
  min-width: 240px;
  max-width: 100%;
  background: var(--accent);
  cursor: pointer;

  ${({ disabled }) => disabled && disabledContainer};
  ${({ variant }) => variant === 'default' && defaultContainer}
  ${({ variant }) => variant === 'background' && backgroundContainer}
  ${({ variant }) => variant === 'outline' && outlineContainer}
  ${({ variant }) =>
    variant === 'outline-background' && outlineBackgroundContainer}
`

const defaultText = css`
  color: var(--background);
`
const backgroundText = css`
  color: var(--foreground);
`
const outlineText = css`
  color: var(--background);
`
const outlineBackgroundText = css`
  color: var(--accent);
`

export const Text = styled(Headline4)<{ variant: ButtonVariant }>`
  ${({ variant }) => variant === 'default' && defaultText}
  ${({ variant }) => variant === 'background' && backgroundText}
  ${({ variant }) => variant === 'outline' && outlineText}
  ${({ variant }) => variant === 'outline-background' && outlineBackgroundText}
`
