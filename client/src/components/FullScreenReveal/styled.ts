import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  & > * {
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const RevealAnchor = styled.span`
  position: absolute;
  top: 0;
  height: 10px;
`
