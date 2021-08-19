import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import News from '../components/News'
import { Helmet } from 'react-helmet'
import EmailForm from '../components/EmailForm/EmailForm'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import GDPRBanner from '../components/GDPRBanner'
import Hero from '../components/Hero'
import InformationBlock from '../components/InformationBlock/InformationBlock'
import Inhouse10Years from '../components/Inhouse10Years'
import SponsorsList from '../components/SponsorsList'
import '../css/index.css'
import { ContentContainer, Spacer } from '../theme/base'
import { useNavigate } from '@reach/router'
import { parseContentfulFileUrl } from '../util/helpers'
import { parseContentfulBody } from '../util/contentful'

type HomePageContextData = {
  hero: {
    title: string
    body: { body: string }
  }
  goldLogos: { file: { url: string } }[]
  silverLogos: { file: { url: string } }[]
  bronzeLogos: { file: { url: string } }[]
  otherLogos: { file: { url: string } }[]
  promoHeading: string
  promoHashtag: string
  newsletterHeading: string
  newsletterBody: { newsletterBody: string }
  registerCtaHeading: string
  registerCtaBody: { registerCtaBody: string }
}

export const HomePageContext = React.createContext<HomePageContextData>(null)

const IndexPage = () => {
  const navigate = useNavigate()

  const { allContentfulHomePage } = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            hero {
              title
              body {
                body
              }
              image {
                fluid {
                  src
                }
              }
            }
            goldLogos {
              file {
                url
              }
            }
            silverLogos {
              file {
                url
              }
            }
            bronzeLogos {
              file {
                url
              }
            }
            otherLogos {
              file {
                url
              }
            }
            promoHeading
            promoHashtag
            newsletterHeading
            newsletterBody {
              newsletterBody
            }
            registerCtaHeading
            registerCtaBody {
              registerCtaBody
            }
          }
        }
      }
    }
  `)

  const data: HomePageContextData = allContentfulHomePage.edges[0].node
  const heroImage = parseContentfulFileUrl(data.hero.image.fluid.src)

  return (
    <HomePageContext.Provider value={data}>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE</title>
        <meta
          name="description"
          content="Sveriges främsta kommunikationstävling för Inhousebyråer"
        />
        <meta
          name="facebook-domain-verification"
          content="0xklyx0qcy9dxsx3cw5u7dw4swjweq"
        />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <Hero
          title={data.hero.title}
          body={data.hero.body.body}
          image={heroImage}
        />
        <Spacer exact={70} />
        <News />
        <Spacer exact={70} />
        <ContentContainer>
          <Spacer exact={70} />
          <InformationBlock
            title={data.registerCtaHeading}
            body={parseContentfulBody(data.registerCtaBody.registerCtaBody)}
            cta={{
              text: 'var med!',
              onClick: () => navigate('/participate'),
            }}
          />
          <Spacer exact={130} />
          <EmailForm />
          <Spacer exact={80} />
          <Inhouse10Years />
          <Spacer exact={130} />
          <SponsorsList />
          <Spacer exact={250} mobile={40} />
        </ContentContainer>
        <div style={{ background: 'var(--background)' }}>
          <Footer />
        </div>
        <GDPRBanner />
      </main>
    </HomePageContext.Provider>
  )
}

export default IndexPage
