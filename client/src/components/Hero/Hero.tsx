import React, { FunctionComponent } from 'react'
import YellowLines from '../../assets/svg/YellowLines'
import { Spacer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import * as S from './styled'

type Props = {
  size?: 'small' | 'large'
  title: string
  body: any
  image?: any
}

const Hero: FunctionComponent<Props> = ({
  size = 'large',
  title,
  body,
  image,
}) => {
  return (
    <S.Container id="hero" size={size}>
      <S.TextContainer size={size}>
        <Title1 accent uppercase>
          {title}
        </Title1>
        <Spacer h44 />
        <Body1>{parseContentfulBody(body)}</Body1>
      </S.TextContainer>

      <S.ImageContainer size={size}>
        <img src={image} style={{ height: '100%', width: '100%' }} />
        {size === 'small' && <S.Gradient />}
      </S.ImageContainer>

      <S.GraphicsContainer size={size}>
        <YellowLines />
      </S.GraphicsContainer>
    </S.Container>
  )
}

export default Hero
