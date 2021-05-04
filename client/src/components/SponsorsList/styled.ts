import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  text-align: center;
`

export const SponsorLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 20px;
  }

  ${breakpoints.mobile} {
    & > * {
      margin: 10px;
    }
  }
`

export const LargeLogo = styled.div`
  height: 220px;
  width: 360px;

  ${breakpoints.mobile} {
    height: 122px;
    width: 204px;
  }
`

export const MediumLogo = styled.div`
  height: 122px;
  width: 204px;

  ${breakpoints.mobile} {
    height: 63px;
    width: 102px;
  }
`
