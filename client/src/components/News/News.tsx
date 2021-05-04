import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import React, { FunctionComponent, useState } from 'react'
import slugify from 'slugify'
import ArrowRight from '../../assets/svg/ArrowRight'
import { ContentContainer, Spacer } from '../../theme/base'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { Headline1 } from '../../theme/typography'
import { parseContentfulFileUrl } from '../../util/helpers'
import Button from '../Button/Button'
import NewsCard from './NewsCard'
import * as S from './styled'

type Props = {}

export type NewsPostData = {
  headline: string
  createdAt: string
  body: { body: string }
  ctaLink: string
  image: {
    fixed: {
      srcWebp: string
    }
  }
}

export type NewsBlogData = {
  createdAt: string
  headline: string
  preamble: {
    preamble: string
  }
  coverImage: {
    fixed: {
      srcWebp: string
    }
  }
}

const News: FunctionComponent<Props> = () => {
  const [index, setIndex] = useState(0)
  const {
    allContentfulNewsPost,
    allContentfulBlogPost,
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            createdAt
            headline
            preamble {
              preamble
            }
            coverImage {
              fixed(width: 1080) {
                srcWebp
              }
            }
          }
        }
      }
      allContentfulNewsPost {
        edges {
          node {
            createdAt
            headline
            body {
              body
            }
            ctaLink
            image {
              fixed(width: 800) {
                srcWebp
              }
            }
          }
        }
      }
    }
  `)
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

  const data = [
    ...allContentfulNewsPost.edges.map(({ node }) => ({
      ...node,
      type: 'news',
    })),
    ...allContentfulBlogPost.edges.map(({ node }) => ({
      ...node,
      type: 'blog',
    })),
  ]

  const renderBlogItem = ({
    coverImage: {
      fixed: { srcWebp },
    },
    headline,
    preamble: { preamble },
    createdAt,
  }: NewsBlogData) => {
    return (
      <NewsCard
        key={headline}
        imageUrl={parseContentfulFileUrl(srcWebp)}
        url={`/blog/${slugify(headline).toLowerCase()}`}
        headline={headline}
        preamble={preamble}
        date={createdAt}
      />
    )
  }

  const renderNewsItem = ({
    body: { body },
    headline,
    image: {
      fixed: { srcWebp },
    },
    ctaLink,
    createdAt,
  }: NewsPostData) => {
    return (
      <NewsCard
        key={headline}
        imageUrl={parseContentfulFileUrl(srcWebp)}
        url={ctaLink}
        headline={headline}
        preamble={body}
        date={createdAt}
      />
    )
  }

  const renderItem = (item) => {
    if (item.type === 'blog') {
      return renderBlogItem(item)
    }
    return renderNewsItem(item)
  }

  if (!data.length) {
    return null
  }

  const onClickLeft = () => setIndex(Math.max(index - 1, 0))
  const onClickRight = () =>
    setIndex(Math.min(index + 1, data.length - 1 - Number(!isMobile)))

  const atStart = index === 0
  const atEnd = index === data.length - 1 - Number(!isMobile)

  const sortedData = data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <S.Container>
      <ContentContainer>
        <Headline1 accent uppercase>
          Nyheter
        </Headline1>
        <Spacer h24 />
        <S.NewsContainer index={index}>
          {sortedData.map(renderItem)}
        </S.NewsContainer>
        <Spacer h40 />
        <S.SliderNavigation atStart={atStart} atEnd={atEnd}>
          <span className="arrow-left" onClick={onClickLeft}>
            <ArrowRight />
          </span>
          <Spacer w32 />
          <span className="arrow-right" onClick={onClickRight}>
            <ArrowRight />
          </span>
        </S.SliderNavigation>
      </ContentContainer>
    </S.Container>
  )
}

export default News
