import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & > * {
    margin: 10px;
  }
`

export const LogoContainer = styled.div`
  width: 90px;
  height: 54px;
`
