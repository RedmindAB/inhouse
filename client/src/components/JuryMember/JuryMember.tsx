import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body4, Headline1, Headline2 } from '../../theme/typography'
import * as S from './styled'

type Props = {
  name: string
  title: string
  imageUrl: string
}

const JuryMember: FunctionComponent<Props> = ({ imageUrl, name, title }) => {
  return (
    <S.Container>
      <S.Picture src={imageUrl} alt={name} />
      <Spacer h24 />
      <Headline2 accent>{name}</Headline2>
      <Spacer h08 />
      <Body4 accent>{title}</Body4>
    </S.Container>
  )
}

export default JuryMember
