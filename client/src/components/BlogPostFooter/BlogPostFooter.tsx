import React, { Fragment, FunctionComponent, useContext } from 'react'
import * as S from './styled'
import { BlogPostContext } from '../../templates/blogPost'
import { Body3 } from '../../theme/typography'
import { Spacer } from '../../theme/base'

type Props = {}

const renderTag = (tag: string) => (
  <Fragment key={tag}>
    <S.TagContainer key={tag}>
      <Body3 onAccent>{tag}</Body3>
    </S.TagContainer>
    <Spacer w20 />
  </Fragment>
)

const BlogPostFooter: FunctionComponent<Props> = () => {
  const { tags } = useContext(BlogPostContext)

  return <S.Container>{tags.map(renderTag)}</S.Container>
}

export default BlogPostFooter
