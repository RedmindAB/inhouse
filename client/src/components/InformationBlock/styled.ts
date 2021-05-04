import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  max-width: 100%;
  overflow: hidden;

  & > *:first-child {
    text-align: center;
  }
`

export const ButtonContainer = styled.div`
  & > * {
    margin: 0 auto;
  }
`
