import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div``

export const Picture = styled.div<{ url: string }>`
  background-image: url('${(props) => props.url}');
  width: 100vw;
  height: 70vh;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const anim = keyframes`

`

export const TitleContainer = styled.div``
