import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  margin: 0 auto;

  & > *:first-child {
    text-align: center;
  }
`

export const InstructionBox = styled.div`
  background: var(--background);
  border: 1px solid var(--accent);
  min-height: 350px;
  width: 350px;
  padding: 25px;
  margin: 0 auto;

  & p {
    font-size: 1.6rem;
    line-height: 1.4;
  }

  ${breakpoints.tablet} {
    height: auto;
    padding-bottom: 50px;
  }

  ${breakpoints.mobile} {
    width: 100%;
    min-height: 200px;
  }
`

export const InstructionBoxSpecial = styled.div`
  background: var(--background);
  border: 1px solid var(--accent);
  height: 340px;
  width: 340px;
  padding: 25px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: auto 1fr;

  & span {
    font-size: 10rem;
    justify-self: center;
    align-self: center;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.2;
  }

  ${breakpoints.tablet} {
    height: auto;
    padding-bottom: 50px;
  }

  ${breakpoints.mobile} {
    width: 100%;
  }
`

export const ArrowContainer = styled.div.attrs(() => ({
  className: 'arrow',
}))``

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.tablet} {
    flex-direction: column;

    .arrow {
      display: none;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-content: center;
  grid-row-gap: 70px;
  grid-column-gap: 40px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    width: fit-content;
    margin: 0 auto;

    .arrow {
      display: none;
    }
  }

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;

    .arrow {
      display: none;
    }
  }
`
