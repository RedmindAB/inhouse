import React, { FunctionComponent, useContext } from 'react'
import YellowLines from '../../assets/svg/YellowLines'
import { HomePageContext } from '../../pages'
import { Spacer } from '../../theme/base'
import { Body2, Headline1 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const Inhouse10Years: FunctionComponent<Props> = () => {
  const { promoHeading, promoHashtag } = useContext(HomePageContext)

  return (
    <S.Container>
      <S.GraphicsContainer>
        <YellowLines />
      </S.GraphicsContainer>
      <S.Inner>
        <Spacer exact={60} />
        <Headline1>{promoHeading}</Headline1>
        <Spacer exact={80} />
        <Body2>{promoHashtag}</Body2>
      </S.Inner>
    </S.Container>
  )
}

export default Inhouse10Years
