import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import React, { FunctionComponent } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Spacer } from '../../theme/base'
import { Body4, Headline5 } from '../../theme/typography'

type Props = {}

const GDPRBanner: FunctionComponent<Props> = () => {
  const location = useLocation()

  const onAcceptCookies = () => {
    initializeAndTrack(location)
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Godkänn"
      declineButtonText="Neka"
      cookieName="gatsby-plugin-gdpr-cookies"
      style={{
        background: '#292929',
        padding: '10px',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: 'var(--accent)',
        fontSize: '1.6rem',
        padding: '0 40px',
        height: '46px',
        borderRadius: '23px',
      }}
      declineButtonStyle={{
        background: 'transparent',
        fontSize: '1.6rem',
        padding: '0 20px',
        height: '46px',
      }}
      buttonClasses="tide-sans-300"
      declineButtonClasses="tide-sans-300"
      expires={365}
      enableDeclineButton
      onAccept={onAcceptCookies}
    >
      <Body4>
        <div>
          <Headline5 accent>Vi använder kakor!</Headline5>
          <Spacer h08 />
          <Body4 light>
            Den här hemsidan använder kakor för att förbättra
            användarupplevelsen.
          </Body4>
        </div>
      </Body4>
    </CookieConsent>
  )
}

export default GDPRBanner
