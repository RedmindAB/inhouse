import React, { FunctionComponent } from 'react'
import * as S from './styled'

type Props = {
  accent?: boolean
}

const Divider: FunctionComponent<Props> = ({ accent }) => {
  return <S.Container accent={accent} />
}

export default Divider
