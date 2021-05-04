import React, { FunctionComponent } from 'react'
import YellowLines from '../../assets/svg/YellowLines'
import * as S from './styled'

type Props = {}

const GraphicsDivider: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <YellowLines />
    </S.Container>
  )
}

export default GraphicsDivider
