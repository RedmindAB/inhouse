import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import ActionCard from '../components/ActionCard/ActionCard'
import AttendModal from '../components/AttendModal/AttendModal'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import InformationBlock from '../components/InformationBlock/InformationBlock'
import LogoBar from '../components/LogoBar/LogoBar'
import ParticipateModal from '../components/ParticipateModal/ParticipateModal'
import SponsorModal from '../components/SponsorModal/SponsorModal'
import '../css/index.css'
import { ContentContainer, Spacer } from '../theme/base'
import { parseContentfulBody } from '../util/contentful'
import { downloadRemoteFile, parseContentfulFileUrl } from '../util/helpers'

type InformationBlock = {
  title: string
  description: { description: string }
  buttonText: string
}

type RegisterPageContextData = {
  hero: {
    image: {
      fluid: { src: string }
    }
    title: string
    body: { body: string }
  }
  sponsorLogos: { file: { url: string } }[]
  photoGallery: {
    title: string
    description: string
    fixed: {
      width: number
      height: number
      srcWebp: string
    }
  }[]
  informationSection: InformationBlock
  informationSectionFiles: {
    file: {
      url: string
      contentType: string
    }
  }[]
  attendSection: InformationBlock
  attendCardDisabled: boolean
  attendCardDisabledBody: string
  attendButtonLink: string
  competeSection: InformationBlock
  competeCardDisabled: boolean
  competeCardDisabledBody: string
  competeButtonLink: string
  sponsorSection: InformationBlock
  sponsorCardDisabled: boolean
  sponsorCardDisabledBody: string
  sponsorButtonLink: string
}

export const RegisterPageContext = React.createContext<RegisterPageContextData>(null)

const ParticipatePage = ({ location }) => {
  const { allContentfulRegisterPage } = useStaticQuery(graphql`
    query {
      allContentfulRegisterPage {
        edges {
          node {
            informationSectionFiles {
              file {
                url
                contentType
              }
            }
            informationSection {
              title
              buttonText
              description {
                description
              }
            }
            attendSection {
              title
              buttonText
              description {
                description
              }
            }
            attendButtonLink
            attendCardDisabled
            attendCardDisabledBody
            competeSection {
              title
              buttonText
              description {
                description
              }
            }
            competeButtonLink
            competeCardDisabled
            competeCardDisabledBody
            sponsorSection {
              title
              buttonText
              description {
                description
              }
            }
            sponsorButtonLink
            sponsorCardDisabled
            sponsorCardDisabledBody
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
            sponsorLogos {
              file {
                url
              }
            }
            photoGallery {
              title
              description
              fixed(height: 800) {
                width
                height
                srcWebp
              }
            }
          }
        }
      }
    }
  `)

  const data: RegisterPageContextData = allContentfulRegisterPage.edges[0].node
  const [attendFormVisible, setAttendFormVisible] = React.useState(
    location.hash === '#attend' && !data.attendCardDisabled
  )
  const [participationFormVisible, setParticipationFormVisible] = React.useState(
    location.hash === '#participate' && !data.competeCardDisabled
  )
  const [sponsorFormVisible, setSponsorFormVisible] = React.useState(
    location.hash === '#sponsor' && !data.sponsorCardDisabled
  )

  const heroImage = parseContentfulFileUrl(data.hero.image.fluid.src)

  const toggleAttendModalVisibility = () => {
    setAttendFormVisible(!attendFormVisible)
  }

  const toggleParticipateModalVisibility = () => {
    setParticipationFormVisible(!participationFormVisible)
  }

  const toggleSponsorModalVisibility = () => {
    setSponsorFormVisible(!sponsorFormVisible)
  }

  const onClickAttend = () => {
    if (data.attendButtonLink) {
      return window.open(data.attendButtonLink)
    }

    toggleAttendModalVisibility()
  }

  const onClickCompete = () => {
    if (data.competeButtonLink) {
      return window.open(data.competeButtonLink)
    }
    toggleParticipateModalVisibility()
  }

  const onClickSponsor = () => {
    if (data.sponsorButtonLink) {
      return window.open(data.sponsorButtonLink)
    }

    toggleSponsorModalVisibility()
  }

  const onClickDownloadFiles = () => {
    data.informationSectionFiles.forEach(({ file }) =>
      downloadRemoteFile(parseContentfulFileUrl(file.url), file.contentType)
    )
  }

  return (
    <RegisterPageContext.Provider value={data}>
      <Header />
      <AttendModal visible={attendFormVisible} onClose={toggleAttendModalVisibility} />
      <ParticipateModal
        visible={participationFormVisible}
        onClose={toggleParticipateModalVisibility}
      />
      <SponsorModal visible={sponsorFormVisible} onClose={toggleSponsorModalVisibility} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE</title>
        <meta
          name="description"
          content="Sveriges främsta kommunikationstävling för Inhousebyråer"
        />
        <meta name="facebook-domain-verification" content="0xklyx0qcy9dxsx3cw5u7dw4swjweq" />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <Hero title={data.hero.title} body={data.hero.body.body} image={heroImage} />
        <ContentContainer>
          <section id="attend">
            <Spacer exact={70} />
            <ActionCard
              title={data.attendSection.title}
              body={parseContentfulBody(data.attendSection.description.description)}
              disabled={data.attendCardDisabled}
              disabledBody={data.attendCardDisabledBody}
              button={{
                title: data.attendSection.buttonText,
                onClick: onClickAttend,
              }}
            />
          </section>
          <section id="participate">
            <Spacer exact={80} />
            <ActionCard
              inverted
              title={data.competeSection.title}
              body={parseContentfulBody(data.competeSection.description.description)}
              disabled={data.competeCardDisabled}
              disabledBody={data.competeCardDisabledBody}
              button={{
                title: data.competeSection.buttonText,
                onClick: onClickCompete,
              }}
            />
          </section>
          <section id="sponsor">
            <Spacer exact={80} />
            <ActionCard
              title={data.sponsorSection.title}
              body={parseContentfulBody(data.sponsorSection.description.description)}
              disabled={data.sponsorCardDisabled}
              disabledBody={data.sponsorCardDisabledBody}
              button={{
                title: data.sponsorSection.buttonText,
                onClick: onClickSponsor,
              }}
              bottom={data.sponsorLogos?.length > 0 && <LogoBar />}
            />
          </section>
          <Spacer exact={140} />
          <InformationBlock
            title={data.informationSection.title}
            body={parseContentfulBody(data.informationSection.description.description)}
            cta={{
              text: data.informationSection.buttonText,
              onClick: onClickDownloadFiles,
            }}
          />
          <Spacer exact={140} />
        </ContentContainer>
        <div style={{ background: 'var(--background)' }}>
          <Footer />
          <GDPRBanner />
        </div>
      </main>
    </RegisterPageContext.Provider>
  )
}

export default ParticipatePage
