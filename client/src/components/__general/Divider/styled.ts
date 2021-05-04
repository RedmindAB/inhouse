import styled, { css } from 'styled-components'

const accentContainer = css`
  opacity: 1;
  background: var(--accent);
`

export const Container = styled.div<{ accent?: boolean }>`
  height: 1px;
  width: 100%;
  background: var(--foreground);
  opacity: 0.2;

  ${({ accent }) => accent && accentContainer}
`
