import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  grid-gap: 30px;
  grid-row-gap: 50px;

  & > * {
    justify-self: center;
  }
`
