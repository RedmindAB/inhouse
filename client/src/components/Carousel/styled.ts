import styled, { css, keyframes } from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'
import { Headline2, Title1 } from '../../theme/typography'

export const overlayStyles = css`
  z-index: 10;
  position: absolute;
  left: 3rem;
`

export const Container = styled.div`
  height: 900px;
  margin: 2rem 0;
  position: relative;
  width: 100%;

  ${breakpoints.mobile} {
    height: 80vh;
  }
`

export const TitleContainer = styled.div`
  ${overlayStyles}
  display: grid;
  width: fit-content;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  transform: translateY(-1rem);
`

export const Year = styled(Headline2)`
  grid-row: 2;
  grid-column: 2;
  justify-self: flex-end;
`

export const SlideNumber = styled(Headline2)`
  grid-row: 3;
`

export const BottomContainer = styled.div`
  ${overlayStyles};
  bottom: 0;
  transform: translateY(1rem);
`

export const PicturesContainer = styled.div<{ offset: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden;
  width: 400vw;

  transition: transform 1s;
  transform: translateX(-${({ offset }) => offset * 100}vw);
`

const anim = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`

export const PictureContainer = styled.div`
  height: 100%;
  width: 100vw;
  background: #444;
  position: relative;

  /* &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    animation: ${anim} 3s infinite alternate;

    background: #ff4;

    mix-blend-mode: difference;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background: #ff4e15;

    mix-blend-mode: difference;
  } */
`

export const NavigationContainer = styled.nav`
  position: absolute;
  right: 13rem;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-gap: 3rem;

  & * {
    text-align: right;
  }

  ${breakpoints.mobile} {
    right: 3rem;
  }
`

export const NavigationItem = styled(Title1)`
  transition: transform 0.23s;
  transform-origin: center right;

  &:hover {
    transform: scale(1.07);
  }

  &:hover * {
    color: var(--foreground);
  }

  ${breakpoints.mobile} {
    &:hover {
      transform: none;
    }
  }
`

export const PlusContainer = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-6rem + -100%));
`
