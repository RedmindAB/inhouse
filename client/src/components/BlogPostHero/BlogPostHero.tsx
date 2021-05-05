import moment from 'moment'
import React, { FunctionComponent, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BlogPostContext } from '../../templates/blogPost'
import { ContentContainer, Spacer } from '../../theme/base'
import { Body2, Headline1, Headline4, Title1 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const BlogPostHero: FunctionComponent<Props> = () => {
  const {
    headline,
    preamble: { preamble },
    coverImage: {
      file: { url },
    },
    createdAt,
  } = useContext(BlogPostContext)
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const date = moment(createdAt).format('D MMMM YYYY')
  const Title = isMobile ? Headline1 : Title1
  const Preamble = isMobile ? Headline4 : Headline1

  return (
    <S.Container>
      <ContentContainer>
        <Spacer exact={130} mobile={40} />
        <Title onAccent>{headline}</Title>
        <Spacer h12 />
        <Preamble onAccent className="tide-sans-300">
          {preamble}
        </Preamble>
        <Spacer h40 />
        <Body2 onAccent>{date}</Body2>
        <Spacer exact={100} mobile={40} />
      </ContentContainer>
      <img src={url} />
      <Spacer exact={130} mobile={40} />
    </S.Container>
  )
}

export default BlogPostHero
