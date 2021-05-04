import styled, { css, keyframes } from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'
import { Body2 } from '../../theme/typography'

export const Container = styled.nav<{ showBackground: boolean }>`
  padding: 2rem 3rem;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  transition: background 0.2s;
  ${({ showBackground }) => showBackground && 'background: rgba(0, 0, 0, 0.8)'}
`

export const NavContainer = styled.div`
  display: flex;

  & > * {
    margin-left: 3rem;
  }
`

const fadeIn = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }

  to {
    transform: rgba(0, 0, 0, 0.9);
  }
`

const overlayAnimateIn = css`
  animation: ${fadeIn} 2s forwards;
`

const overlayAnimateOut = css`
  animation: ${fadeIn} 2s reverse;
`

export const Overlay = styled.div`
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`

export const DrawerBackdrop = styled.div`
  background: var(--background);
  padding: 9rem 6rem 6rem 6rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 3rem;
  height: 90%;
  min-height: 800px;

  ${breakpoints.mobile} {
    height: 100%;
    padding: 9rem 3rem;
    justify-content: flex-end;
    display: block;

    & * {
      text-align: right;
    }
  }

  & * {
    padding-bottom: 2rem;
  }
`

export const InfoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 4rem;
  grid-template-rows: 1fr auto;
  grid-gap: 3rem;

  ${breakpoints.tablet} {
    display: none;
  }
`

export const DrawerMenu = styled.div`
  margin: 0 auto;
  padding-top: 2rem;

  & h1 {
    margin-bottom: 2rem;
  }

  ${breakpoints.mobile} {
    margin: initial;

    & h1 {
      margin-top: 0;
    }
  }
`

export const DrawerIcon = styled.div`
  display: grid;
  grid-gap: 8px;
  cursor: pointer;
  padding: 2rem;
  margin-right: -2rem;
`

const crossOneAnim = css`
  transform: rotate(-45deg) translate(-15px, 8px);
`

const crossTwoAnim = css`
  width: 0px;
`

const crossThreeAnim = css`
  transform: rotate(45deg);
`

export const DrawerLine = styled.div<{
  crossOne?: boolean
  crossTwo?: boolean
  crossThree?: boolean
}>`
  height: 1px;
  width: 62px;
  background: var(--foreground);

  transition: 400ms;

  ${({ crossOne }) => crossOne && crossOneAnim}
  ${({ crossTwo }) => crossTwo && crossTwoAnim}
  ${({ crossThree }) => crossThree && crossThreeAnim}
`

export const DesktopContainer = styled.div<{ showBackground: boolean }>`
  padding: 1rem 7rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  ${({ showBackground }) => showBackground && 'background: rgba(0, 0, 0, 0.4);'}
`

export const DesktopMenu = styled.div`
  display: flex;

  & > * {
    margin-left: 5.6rem;
  }
`

type MenuItemProps = { isCurrentRoute?: boolean }

export const DesktopMenuItem = styled(Body2)<MenuItemProps>`
  color: var(--accent);
  ${({ isCurrentRoute }) =>
    isCurrentRoute &&
    `
    color: white;
    text-decoration: underline;
  `}
`

export const DesktopLogoContainer = styled.span`
  & > * {
    height: 50px;
  }
`
export const MobileLogoContainer = styled.div`
  flex: 1;

  & > * {
    height: 40px;
  }
`
