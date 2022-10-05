import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import BlogPostFooter from '../components/BlogPostFooter'
import BlogPostHero from '../components/BlogPostHero'
import BlogPostRichText from '../components/BlogPostRichText'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import Header from '../components/Header/Header'
import { BlogPostData } from '../contentful/types'
import '../css/index.css'
import useHeaderHeight from '../hooks/useHeaderHeight'
import usePageReload from '../hooks/usePageReload'
import { ContentContainer, Spacer } from '../theme/base'

type Props = {
  pageContext: {
    blogPost: BlogPostData
  }
}

export const BlogPostContext = React.createContext<BlogPostData>(null)

const BlogPost: FunctionComponent<Props> = ({ pageContext: { blogPost } }) => {
  const headerHeight = useHeaderHeight()
  usePageReload()

  return (
    <BlogPostContext.Provider value={blogPost}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE - {blogPost.headline}</title>
        <meta name="description" content={blogPost.preamble.preamble} />
        <html lang="en" />
        <meta name="facebook-domain-verification" content="0xklyx0qcy9dxsx3cw5u7dw4swjweq" />
      </Helmet>
      <Header />
      <Spacer exact={headerHeight} />
      <div style={{ backgroundColor: '#FFF' }}>
        <BlogPostHero />
        <ContentContainer>
          <Spacer exact={70} mobile={50} />
          <BlogPostRichText />
          <Spacer exact={70} mobile={50} />
          <BlogPostFooter />
        </ContentContainer>
        <Spacer exact={120} mobile={60} />
      </div>
      <div style={{ background: 'var(--background)' }}>
        <Footer />
      </div>
      <GDPRBanner />
    </BlogPostContext.Provider>
  )
}

export default BlogPost
