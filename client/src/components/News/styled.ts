import styled from 'styled-components'
import { Card } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'
import { newsCardWidth, newsCardWidthMobile } from './NewsCard/styled'

export const Container = styled.div`
  overflow: hidden;
`

export const gapWidth = 40

export const NewsContainer = styled.div<{ index: number }>`
  overflow: visible;
  display: flex;
  flex-direction: row;

  transition: all 250ms;

  & > * {
    margin-right: ${gapWidth}px;
  }

  ${({ index }) =>
    `transform: translateX(-${index * (newsCardWidth + gapWidth)}px);`}

  ${breakpoints.mobile} {
    ${({ index }) =>
      `transform: translateX(-${index * (newsCardWidthMobile + gapWidth)}px);`}
  }
`

export const SliderNavigation = styled.div<{
  atStart: boolean
  atEnd: boolean
}>`
  display: flex;
  justify-content: flex-end;

  ${breakpoints.mobile} {
    justify-content: center;

    [class^='arrow'] {
      transform: scale(0.8);
    }
  }

  [class^='arrow'] {
    cursor: pointer;
    transform: all 0.2s;
  }

  .arrow-left svg {
    transform: rotate(180deg);
  }

  ${({ atStart }) => atStart && '.arrow-left svg { opacity: 0.3 }'}
  ${({ atEnd }) => atEnd && '.arrow-right svg { opacity: 0.3 }'}
`
