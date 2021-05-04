import styled from 'styled-components'

export const Container = styled.div<{ checked: boolean }>`
  cursor: pointer;
  height: 32px;
  width: 32px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ checked }) => (checked ? 'black' : 'white')};

  svg {
    height: 24px;
  }
`
