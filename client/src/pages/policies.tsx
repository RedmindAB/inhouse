import * as React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import GDPRBanner from '../components/GDPRBanner'
import Header from '../components/Header/Header'
import '../css/index.css'
import usePageReload from '../hooks/usePageReload'
import { ContentContainer, Spacer, TextContainer } from '../theme/base'
import { Body2, Headline1 } from '../theme/typography'

const PoliciesPage = () => {
  usePageReload(120)
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
        <meta name="facebook-domain-verification" content="0xklyx0qcy9dxsx3cw5u7dw4swjweq" />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <ContentContainer>
          <Spacer exact={200} />
          <Headline1 accent>GDPR &amp; Integritetspolicy</Headline1>
          <Spacer exact={60} />
          <TextContainer width="1000px">
            <Body2>
              GDPR &amp; Integritetspolicy
              <br />
              <br />
              Arkitektkopia AB är operatör av Inhousetävlingen från 2022, tillika arrangör och ägare
              av varumärket Inhousetävlingen. För personuppgifter som behandlas i Inhousetävlingen
              gäller att avtal finns mellan Arkitektkopia AB och deltagande parter som motiverar
              detta. De personuppgifter som behandlas är kontaktuppgifter till berörda hos de
              företag som deltar i tävlingen. Detta omfattar namn, telefonnummer, mejladresser och
              adresser. Behandlingen av dessa personuppgifter sker i de applikationer och system som
              används för administration och bokning, liksom inom de applikationer och plattformar
              som nyttjas för inhousetavlingen.se (”Digitala kanaler”). Integritetspolicyn är
              tillämpbar på anställda, leverantörer och gäster.
              <br />
              <br />
              Kontaktuppgifter som delas vid anmälan till tävlingen eller dess underengagemang kan
              komma att delas med partners och sponsorer till Inhousetävlingen i
              marknadsföringssyfte.
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
