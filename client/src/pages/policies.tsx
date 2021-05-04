import * as React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import Header from '../components/Header/Header'
import '../css/index.css'
import { ContentContainer, Spacer, TextContainer } from '../theme/base'
import { Body2, Headline1 } from '../theme/typography'

const PoliciesPage = () => {
  return (
    <>
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
        <ContentContainer>
          <Spacer exact={200} />
          <Headline1 accent>GDPR &amp; Integritetspolicy</Headline1>
          <Spacer exact={60} />
          <TextContainer width="1000px">
            <Body2>
              DIVISION är operatören av Inhousetävlingen från 2020. Arrangör och
              ägare av varumärket Inhousetävlingen är Arkitektkopia. DIVISION är
              en del av koncernen Stureplansgruppen. DIVISION behandlar å
              Inhousetävlingen och Arkitektkopias vägnar samt i den egna
              verksamheten personuppgifter i sin dagliga verksamhet.
              Integritetspolicyn gäller generellt för personuppgiftsbehandlingen
              inom DIVISION samt Stureplansgruppen och finns till för att
              förklara vilken sorts data Stureplansgruppen behandlar, varför och
              hur. Personuppgifter behandlas i DIVISIONs och Inhousetävlingens
              administrations- och bokningssystem. Personuppgifter behandlas
              också i de sammas applikationer, plattformar i sociala medier och
              på hemsidan inhousetavlingen.se (”Digitala kanaler”).
              Integritetspolicyn är tillämpbar på anställda, leverantörer och
              gäster.
              <br />
              <br />
              Kontaktuppgifter som delas vid anmälan till tävlingen eller dess
              underengagemang kan komma att delas med partners och sponsorer
              till Inhousetävlingen i marknadsföringssyfte.
              <br />
              <br />
              För att läsa mer om DIVISIONs personuppgiftshantering samt för att
              tillvarata dina rättigheter enligt GDPR, se{' '}
              <a
                href="https://www.stureplansgruppen.se/policies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="accent">
                  https://www.stureplansgruppen.se/policies
                </span>
              </a>
            </Body2>
          </TextContainer>
          <Spacer exact={100} />
        </ContentContainer>
        <div style={{ background: 'var(--background)' }}>
          <Footer />
          <GDPRBanner />
        </div>
      </main>
    </>
  )
}

export default PoliciesPage
