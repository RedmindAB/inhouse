import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Facebook from '../../assets/svg/Facebook'
import Instagram from '../../assets/svg/Instagram'
import Logo from '../../assets/svg/Logo'
import Twitter from '../../assets/svg/Twitter'
import { ContentContainer, Spacer } from '../../theme/base'
import { Body4, CopyRight, Headline6 } from '../../theme/typography'
import EmailForm from '../EmailForm/EmailForm'
import Divider from '../__general/Divider'
import * as S from './styled'

const Footer = () => {
  const {
    file: {
      childImageSharp: { fixed: image },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ArkitektKopia.png" }) {
        childImageSharp {
          fixed(width: 129, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.Container id="footer">
      <EmailForm small />
      <Spacer exact={72} mobile={30} />
      <ContentContainer>
        <S.Inner>
          <div>
            <Logo />
            <Spacer h28 />
            <Img fixed={image} />
          </div>
          <S.LinksContainer>
            <S.Column>
              <Headline6 uppercase>om tävlingen</Headline6>
              <Link to="/about#how-it-works">
                <S.Link>Hur fungerar det?</S.Link>
              </Link>
              <Link to="/about#categories">
                <S.Link>Kategorier</S.Link>
              </Link>
              <Link to="/#sponsors">
                <S.Link>Sponsorer</S.Link>
              </Link>
              <Link to="/jury">
                <S.Link>Juryn</S.Link>
              </Link>
            </S.Column>
            <S.Column>
              <Headline6 uppercase>var med</Headline6>
              <Link to="/participate#participate">
                <S.Link>Var med och tävla!</S.Link>
              </Link>
              <Link to="/participate#attend">
                <S.Link>Häng med och fira!</S.Link>
              </Link>
              <Link to="/participate#sponsor">
                <S.Link>Bli sponsor</S.Link>
              </Link>
            </S.Column>
            <S.Column>
              <Headline6 uppercase>kontakt</Headline6>
              <Body4 light>
                Evenemangsoperatör:
                <br />
                Arkitektkopia
                <br />
                <br />
                Sturegatan 4, 2tr
                <br />
                114 35 Stockholm
                <br />
                <br />
                <a href="mailto:info@inhousetavlingen.se" target="_blank">
                  <S.Link style={{ opacity: 1 }}>info@inhousetavlingen.se</S.Link>
                </a>
              </Body4>
              <Link to="/policies">
                <S.Link>GDPR &amp; Integritets policy</S.Link>
              </Link>
            </S.Column>
          </S.LinksContainer>
        </S.Inner>
        <Spacer h48 />
        <Divider />
        <Spacer h32 />
        <S.Bottom>
          <CopyRight>© 2021 INHOUSETÄVLINGEN</CopyRight>
          <S.Social>
            <Twitter />
            <Facebook />
            <Instagram />
          </S.Social>
        </S.Bottom>
      </ContentContainer>
    </S.Container>
  )
}

export default Footer
