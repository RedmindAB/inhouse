import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body4, Headline4 } from '../../theme/typography'
import * as S from './styled'

type Props = {
  name: string
  description: string
  imageUrl: string
}

const CategoryCard: FunctionComponent<Props> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <S.Container>
      <img src={imageUrl} />
      <S.Overlay />
      <S.TextContainer>
        <Headline4 accent uppercase>
          {name}
        </Headline4>
        <Spacer h16 />
        <Body4>{description}</Body4>
      </S.TextContainer>
    </S.Container>
  )
}

export default CategoryCard
