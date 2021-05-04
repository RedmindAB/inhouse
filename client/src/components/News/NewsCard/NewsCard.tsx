import React, { FunctionComponent } from 'react'
import { Spacer } from '../../../theme/base'
import { Body3, Body4, Headline4 } from '../../../theme/typography'
import * as S from './styled'
import moment from 'moment'

type Props = {
  headline: string
  preamble: string
  url: string
  imageUrl: string
  date: string | Date | number
}

const NewsCard: FunctionComponent<Props> = ({
  headline,
  preamble,
  url,
  imageUrl,
  date,
}) => {
  const isExternal = url.includes('http') || url.includes('www')
  const target = isExternal ? '_blank' : '_self'

  return (
    <a href={url} target={target}>
      <S.Container>
        <S.ImageWrapper>
          <S.Image src={imageUrl} />
        </S.ImageWrapper>
        <Spacer h24 />
        <Headline4 accent>{headline}</Headline4>
        <Spacer h04 />
        <Body4 light>{moment(date).format('D MMMM YYYY')}</Body4>
        <Spacer h16 />
        <Body3>{preamble}</Body3>
      </S.Container>
    </a>
  )
}

export default NewsCard
