import React, { FunctionComponent } from 'react'
import YellowLines from '../../assets/svg/YellowLines'
import { Spacer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import Button from '../Button/Button'
import * as S from './styled'

type Props = {
  size?: 'small' | 'large'
  title: string
  body: any
  image?: any
  ctaLink?: string
  ctaTitle?: string
}

const Hero: FunctionComponent<Props> = ({
  size = 'large',
  title,
  body,
  image,
  ctaLink,
  ctaTitle,
}) => {
  return (
    <S.Container id="hero" size={size}>
      <S.TextContainer size={size}>
        <Title1 accent uppercase dangerouslySetInnerHTML={{ __html: title }} />
        <Spacer h44 />
        <Body1>{parseContentfulBody(body)}</Body1>
        {ctaLink && ctaTitle && (
          <>
            <Spacer h44 />
            <a href={ctaLink} rel="noopener noreferrer" target="_blank">
              <Button title={ctaTitle} />
            </a>
          </>
        )}
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
