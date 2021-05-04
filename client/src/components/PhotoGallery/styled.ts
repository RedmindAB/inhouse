import styled from 'styled-components'

export const Container = styled.div`
  & img {
    filter: saturate(0);

    &:hover {
      filter: saturate(1);
    }
  }
`

export const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`
