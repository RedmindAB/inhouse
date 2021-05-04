import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
`

export const GraphicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  position: relative;

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 100%;
    width: 100%;
  }

  .logo svg {
    height: 75%;
    width: 75%;
  }
`

export const TextContainer = styled.div`
  padding: 30px 0;
  text-align: center;
`
