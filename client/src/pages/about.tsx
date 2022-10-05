import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import CategoriesSection from '../components/CategoriesSection'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import GraphicsDivider from '../components/GraphicsDivider'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import InformationBlock from '../components/InformationBlock/InformationBlock'
import ParticipateHowItWorks from '../components/ParticipateHowItWorks'
import ParticipateSummary from '../components/ParticipateSummary'
import '../css/index.css'
import usePageReload from '../hooks/usePageReload'
import { ContentContainer, Spacer } from '../theme/base'
import { parseContentfulBody } from '../util/contentful'
import { parseContentfulFileUrl } from '../util/helpers'

type AboutPageContextData = {
  hero: {
    title: string
    body: { body: string }
    image: {
      fluid: { src: string }
    }
  }
  aboutSection: {
    heading: string
    body: { body: string }
  }[]
  stepsHeading: string
  step1Text: { step1Text: string }
  step2Text: { step2Text: string }
  step3Text: { step3Text: string }
  step4Text: { step4Text: string }
  step5Text: { step5Text: string }
  column1Files: {
    file: {
      url: string
      contentType: string
    }
  }[]
  column2CtaUrl: string
  column3CtaUrl: string
  column1Heading: string
  column2Heading: string
  column3Heading: string
  column1Body: { column1Body: string }
  column2Body: { column2Body: string }
  column3Body: { column3Body: string }
  categories: AboutPageDataCategory[]
}

export type AboutPageDataCategory = {
  name: string
  description: { description: string }
  picture: { fixed: { srcWebp: string } }
}

export const AboutPageContext = React.createContext<AboutPageContextData>(null)

const AboutPage = () => {
  usePageReload()
  const { allContentfulAboutPage, allContentfulCompetitionCategory } = useStaticQuery(graphql`
    query {
      allContentfulCompetitionCategory {
        edges {
          node {
            name
            description {
              description
            }
            picture {
              fixed(width: 800) {
                srcWebp
              }
            }
          }
        }
      }
      allContentfulAboutPage {
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
            aboutSection {
              heading
              body {
                body
              }
            }
            stepsHeading
            step1Text {
              step1Text
            }
            step2Text {
              step2Text
            }
            step3Text {
              step3Text
            }
            step4Text {
              step4Text
            }
            step5Text {
              step5Text
            }
            rulesHeading
            rulesBody {
              rulesBody
            }
            column1Files {
              file {
                url
                contentType
              }
            }
            column2CtaUrl
            column3CtaUrl
            column1Heading
            column2Heading
            column3Heading
            column1Body {
              column1Body
            }
            column2Body {
              column2Body
            }
            column3Body {
              column3Body
            }
          }
        }
      }
    }
  `)

  const data: AboutPageContextData = {
    ...allContentfulAboutPage.edges[0].node,
    categories: allContentfulCompetitionCategory.edges.map(edge => edge.node),
  }
  const heroImage = parseContentfulFileUrl(data.hero.image.fluid.src)

  const renderAboutSection = ({ heading, body: { body } }) => {
    return (
      <React.Fragment key={heading}>
        <Spacer exact={70} />
        <InformationBlock title={heading} body={parseContentfulBody(body)} />
      </React.Fragment>
    )
  }

  return (
    <AboutPageContext.Provider value={data}>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE</title>
        <meta name="facebook-domain-verification" content="0xklyx0qcy9dxsx3cw5u7dw4swjweq" />
        <meta
          name="description"
          content="Sveriges främsta kommunikationstävling för Inhousebyråer"
        />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <Hero title={data.hero.title} body={data.hero.body.body} image={heroImage} size="small" />
        <ContentContainer>
          {data.aboutSection.map(renderAboutSection)}
          <Spacer exact={140} />
          <GraphicsDivider />
          <Spacer exact={100} />
        </ContentContainer>
        <ContentContainer width="2000px" padding="0">
          <CategoriesSection />
        </ContentContainer>
        <ContentContainer>
          <Spacer exact={100} />
          <ParticipateHowItWorks />
          <Spacer exact={100} />
          <GraphicsDivider />
          <Spacer exact={100} />
          <ParticipateSummary />
          <Spacer exact={300} />
        </ContentContainer>
        <div style={{ background: 'var(--background)' }}>
          <Footer />
        </div>
        <GDPRBanner />
      </main>
    </AboutPageContext.Provider>
  )
}

export default AboutPage
