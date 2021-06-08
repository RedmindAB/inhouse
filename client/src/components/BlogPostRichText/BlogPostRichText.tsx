import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import React, { FunctionComponent, useContext } from 'react'
import { BlogPostContext } from '../../templates/blogPost'
import { ContentContainer, Spacer } from '../../theme/base'
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
    [MARKS.BOLD]: (text) => (
      <Body2 onAccent bold>
        {text}
      </Body2>
    ),
    [MARKS.ITALIC]: (text) => (
      <Body2 onAccent italic>
        {text}
      </Body2>
    ),
    [MARKS.UNDERLINE]: (text) => (
      <Body2 onAccent underline>
        {text}
      </Body2>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children, bold) => (
      <Headline1 onAccent bold={bold}>
        {children}
      </Headline1>
    ),
    [BLOCKS.HEADING_2]: (node, children, bold) => (
      <Headline2 onAccent bold={bold}>
        {children}
      </Headline2>
    ),
    [BLOCKS.HEADING_3]: (node, children, bold) => (
      <Headline3 onAccent bold={bold}>
        {children}
      </Headline3>
    ),
    [BLOCKS.HEADING_4]: (node, children, bold) => (
      <Headline4 onAccent bold={bold}>
        {children}
      </Headline4>
    ),
    [BLOCKS.HEADING_5]: (node, children, bold) => (
      <Headline5 onAccent bold={bold}>
        {children}
      </Headline5>
    ),
    [BLOCKS.HEADING_6]: (node, children, bold) => (
      <Headline6 onAccent bold={bold}>
        {children}
      </Headline6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children, bold) => {
      const { value } = node.content[0]

      if (value.trim() === '') {
        return (
          <>
            <br />
            <br />
          </>
        )
      }

      return (
        <Body2 onAccent bold={bold}>
          {children}
        </Body2>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (...props) => {
      console.log('props embedded_entry', props)
      return null
    },
    [BLOCKS.EMBEDDED_ASSET]: (data) => (
      <S.Image
        src={parseContentfulFileUrl(data.file.file.url)}
        alt={data.file.title}
      />
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

function renderRichText(data) {
  const components = data.content.reduce((acc, curr, index) => {
    let block

    if (!curr.content.length && curr.file) {
      block = (
        <S.Image
          src={parseContentfulFileUrl(curr.file.file.url)}
          alt={curr.file.title}
        />
      )
    } else {
      const marks = curr.content[0].marks
      const bold = marks?.findIndex(({ type }) => type === 'bold') !== -1
      block = (
        <span key={index}>
          {options.renderNode[curr.nodeType](curr, curr.content[0].value, bold)}
        </span>
      )
    }

    return [...acc, block]
  }, [])

  return components
}

const BlogPostRichText: FunctionComponent<Props> = () => {
  const {
    article: { raw, references },
  } = useContext(BlogPostContext)

  const data = JSON.parse(raw)

  data.content = data.content.map((node) => {
    if (node.nodeType === BLOCKS.EMBEDDED_ASSET) {
      const file = references.find(
        (ref) => ref.contentful_id === node.data.target.sys.id
      )

      return { ...node, file }
    }

    return node
  })

  return <S.Container>{renderRichText(data)}</S.Container>
}

export default BlogPostRichText
