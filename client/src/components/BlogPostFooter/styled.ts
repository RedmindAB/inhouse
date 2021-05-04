import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${breakpoints.mobile} {
    & div {
      margin-bottom: 20px;
    }
  }
`

export const TagContainer = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  border: 1px solid #eeeeee;
`
