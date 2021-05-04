import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const AboutHeader: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <Title1 accent uppercase>
        Om tävlingen
      </Title1>
      <Spacer h48 />
      <Body1>
        Inhousetävlingen - En kommunikationstävling för att belysa och hylla den
        bästa kommunikationen framtagen av inhousebyråer.
      </Body1>
    </S.Container>
  )
}

export default AboutHeader
