import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import Header from '../components/Header/Header'
import JuryHero from '../components/JuryHero/JuryHero'
import JurySection from '../components/JurySection'
import '../css/index.css'
import { ContentContainer, Spacer } from '../theme/base'

export type JuryPageData = {
  name: string
  title: string
  picture: {
    file: {
      url: string
    }
  }
}[]

export const JuryPageContext = React.createContext<JuryPageData>(null)

const JuryPage = () => {
  const { allContentfulJuryMember } = useStaticQuery(graphql`
    query {
      allContentfulJuryMember {
        edges {
          node {
            name
            title
            picture {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const data: JuryPageData = allContentfulJuryMember.edges.map(
    (edge) => edge.node
  )

  return (
    <JuryPageContext.Provider value={data}>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE - Policies</title>
        <meta
          name="description"
          content="Sveriges främsta kommunikationstävling för Inhousebyråer"
        />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <JuryHero />
        <ContentContainer width="2000px">
          <Spacer exact={200} mobile={100} />
          <JurySection />
          <Spacer exact={200} mobile={100} />
        </ContentContainer>
        <div style={{ background: 'var(--background)' }}>
          <Footer />
        </div>
        <GDPRBanner />
      </main>
    </JuryPageContext.Provider>
  )
}

export default JuryPage
