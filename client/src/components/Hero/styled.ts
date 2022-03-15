import styled, { css } from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

type SizeProps = {
  size: 'small' | 'large'
}

export const Container = styled.section<SizeProps>`
  height: 100vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`

const smallTextContainer = css`
  left: initial;
  right: 10%;
  width: 600px;
  max-width: 80vw;
  display: flex;
  flex-direction: column;

  h1 {
    overflow-wrap: break-word;
  }
`

export const TextContainer = styled.div<SizeProps>`
  position: absolute;
  bottom: 25%;
  left: 15%;
  width: 440px;
  max-width: 90%;

  ${breakpoints.mobile} {
    ${smallTextContainer}
  }

  ${({ size }) => size === 'small' && smallTextContainer}
`

const smallGraphicsContainer = css`
  top: 0;
  left: 0;
  width: fit-content;
  right: initial;
  bottom: initial;
  transform: rotate(0deg);

  transform-origin: -122% 144%;
  transform: rotate(327deg);
  width: 900px;
  height: 100%;

  & > * {
    transform: none !important;
  }

  ${breakpoints.mobile} {
    transform-origin: -144% 144%;
  }
`

export const GraphicsContainer = styled.div<SizeProps>`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 300px;
  width: 50%;
  z-index: -10;

  & > * {
    position: absolute;
    transform: rotate(-20deg) translateX(10%) translateY(10%);
  }

  @media screen and (min-width: 2000px) {
    right: -20%;
  }

  ${({ size }) => size === 'small' && smallGraphicsContainer}
`

export const ImageContainer = styled.div<SizeProps>`
  position: absolute;
  width: 60%;
  max-width: 1200px;
  right: 85px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: -20;
  filter: grayscale(1);

  ${({ size }) =>
    size === 'small' &&
    `
    right: initial;
    left: 10%;
  `}

  ${breakpoints.tablet} {
    right: 0;
    width: 80%;
  }

  ${breakpoints.mobile} {
    width: 90%;
  }
`

export const Gradient = styled.div`
  position: absolute;
  top: -2%;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(45.39% 65% at 50% 50%, rgba(255, 255, 255, 0) 0%, #000000 100%);
`
