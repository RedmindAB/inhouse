import styled, { css } from 'styled-components'

const dotSpacing = 5
const dotRadius = 22

export const Container = styled.div`
  display: flex;
`

const activeDot = css<{ containerWidth: number }>`
  background: #d9d9d9;
  transform: ${({ containerWidth }) => `translateX(-${containerWidth}px)`};
`

const inactiveDot = css`
  border: 1px solid var(--foreground);
  transform: translateX(0px);
`

export const Dot = styled.div<{ active: boolean; containerWidth: number }>`
  height: ${dotRadius}px;
  width: ${dotRadius}px;
  margin: 0 ${dotSpacing}px;
  border-radius: 100px;

  transition: transform 1s;
  ${({ active }) => (active ? activeDot : inactiveDot)}
`
