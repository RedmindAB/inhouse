import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import React, { FunctionComponent, useContext } from 'react'
import { BlogPostContext } from '../../templates/blogPost'
import { Spacer } from '../../theme/base'
import {
  Body2,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from '../../theme/typography'
import { parseContentfulFileUrl } from '../../util/helpers'
import * as S from './styled'

const BlockQuote = ({ text, author }) => (
  <S.BlockQuoteContainer>
    <Headline1 onAccent italic>
      {text}
    </Headline1>
    <Spacer h40 />
    <Headline5 onAccent>{author}</Headline5>
  </S.BlockQuoteContainer>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => {
      return (
        <Body2 onAccent bold>
          {text}
        </Body2>
      )
    },
    [MARKS.ITALIC]: text => (
      <Body2 onAccent italic>
        {text}
      </Body2>
    ),
    [MARKS.UNDERLINE]: text => (
      <Body2 onAccent underline>
        {text}
      </Body2>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <Headline1 onAccent>1:{children}</Headline1>,
    [BLOCKS.HEADING_2]: (node, children) => <Headline2 onAccent>2:{children}</Headline2>,
    [BLOCKS.HEADING_3]: (node, children) => <Headline3 onAccent>3:{children}</Headline3>,
    [BLOCKS.HEADING_4]: (node, children) => <Headline4 onAccent>4:{children}</Headline4>,
    [BLOCKS.HEADING_5]: (node, children) => <Headline5 onAccent>5:{children}</Headline5>,
    [BLOCKS.HEADING_6]: (node, children) => <Headline6 onAccent>6:{children}</Headline6>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Body2 onAccent>{children}</Body2>,
    [BLOCKS.EMBEDDED_ENTRY]: (...props) => {
      console.log('props embedded_entry', props)
      return null
    },
    [BLOCKS.EMBEDDED_ASSET]: data => (
      <S.Image src={parseContentfulFileUrl(data.file.file.url)} alt={data.file.title} />
    ),
    [BLOCKS.QUOTE]: (node, children) => {
      const value = node.content[0].content[0].value
      const starIndex = value.indexOf('*')
      const author = value.substr(starIndex).replace(/\*/g, '')
      const text = value.substr(0, starIndex)

      return <BlockQuote text={text} author={author} />
    },
  },
}

type Props = {}

const BlogPostRichText: FunctionComponent<Props> = () => {
  const {
    article: { raw, references },
  } = useContext(BlogPostContext)

  const data = JSON.parse(raw)

  const parsedData = { ...data }

  parsedData.content = data.content.map(node => {
    if (node.nodeType === BLOCKS.EMBEDDED_ASSET) {
      const file = references.find(ref => ref.contentful_id === node.data.target.sys.id)

      return { ...node, file }
    }

    return node
  })

  return <S.Container>{documentToReactComponents(parsedData, options)}</S.Container>
}

export default BlogPostRichText
