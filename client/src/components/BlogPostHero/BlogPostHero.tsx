import moment from 'moment'
import React, { FunctionComponent, useContext } from 'react'
import { BlogPostContext } from '../../templates/blogPost'
import { ContentContainer, Spacer } from '../../theme/base'
import { Body2, Headline1, Title1 } from '../../theme/typography'
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

  const date = moment(createdAt).format('D MMMM YYYY')

  return (
    <S.Container>
      <ContentContainer>
        <Spacer exact={130} mobile={40} />
        <Title1 onAccent>{headline}</Title1>
        <Spacer h12 />
        <Headline1 onAccent className="tide-sans-300">
          {preamble}
        </Headline1>
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
