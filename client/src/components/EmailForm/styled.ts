import styled from 'styled-components'
import { Card } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled(Card)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 6rem;
  padding-top: 8rem;
  padding-bottom: 8rem;

  ${breakpoints.tablet} {
    grid-template-columns: 1fr;
  }

  ${breakpoints.mobile} {
    padding: 40px 20px;
  }
`

export const Form = styled.form`
  display: flex;
  align-self: center;

  ${breakpoints.tablet} {
    flex-direction: column;

    & > input {
      margin-bottom: 20px;
      width: 100%;
    }
  }
`

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.mobile} {
    text-align: center;
  }
`

export const SmallForm = styled.form`
  display: flex;
  transform: scale(0.75);
  transform-origin: top center;

  ${breakpoints.mobile} {
    flex-direction: column;

    & > *:nth-child(2) {
      margin-top: 10px;
    }
  }
`
