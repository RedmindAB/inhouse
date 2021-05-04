import React from 'react'
import { FunctionComponent } from 'react'
import * as S from './styled'

type Props = {
  current: number
  amount: number
}

const dotSpacing = 5
const dotRadius = 22

const PageDots: FunctionComponent<Props> = ({ current, amount }) => {
  const containerWidth = (dotRadius + dotSpacing * 2) * amount

  return (
    <S.Container>
      <div style={{ width: containerWidth }} />
      {Array(amount)
        .fill(null)
        .map((_, index) => {
          const active = current >= index + 1

          return (
            <S.Dot
              key={index}
              active={active}
              containerWidth={containerWidth}
            />
          )
        })}
    </S.Container>
  )
}

export default PageDots
