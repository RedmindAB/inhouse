import React, { FunctionComponent, useContext } from 'react'
import { HomePageContext } from '../../pages'
import { Spacer } from '../../theme/base'
import { Headline1, Title2 } from '../../theme/typography'
import Divider from '../__general/Divider'
import * as S from './styled'

type Props = {}

const SponsorsList: FunctionComponent<Props> = () => {
  const data = useContext(HomePageContext)
  const goldLogos = data.goldLogos || []
  const silverLogos = data.silverLogos || []
  const bronzeLogos = data.bronzeLogos || []
  const otherLogos = data.otherLogos || []

  const renderLogo = (src: string, i: number) => (
    <img
      key={i}
      src={src}
      style={{ height: '100%', width: '100%', objectFit: 'contain' }}
    />
  )

  if (
    !goldLogos.length &&
    !silverLogos.length &&
    !bronzeLogos.length &&
    !otherLogos.length
  ) {
    return null
  }

  return (
    <S.Container id="sponsors">
      <Headline1 uppercase accent>
        Sponsorer
      </Headline1>
      <Spacer exact={70} />

      {goldLogos.length > 0 && (
        <>
          <Title2 accent>Guld</Title2>
          <Spacer h28 />
          <Divider accent />
          <Spacer h48 />
          <S.SponsorLogoContainer>
            {goldLogos.map(({ file: { url } }, i) => (
              <S.LargeLogo>{renderLogo(url, i)}</S.LargeLogo>
            ))}
          </S.SponsorLogoContainer>
          <Spacer exact={70} />
        </>
      )}

      {silverLogos.length > 0 && (
        <>
          <Title2 accent>Silver</Title2>
          <Spacer h28 />
          <Divider accent />
          <Spacer h48 />
          <S.SponsorLogoContainer>
            {silverLogos.map(({ file: { url } }, i) => (
              <S.MediumLogo>{renderLogo(url, i)}</S.MediumLogo>
            ))}
          </S.SponsorLogoContainer>
          <Spacer exact={70} />
        </>
      )}

      {bronzeLogos.length > 0 && (
        <>
          <Title2 accent>Brons</Title2>
          <Spacer h28 />
          <Divider accent />
          <Spacer h48 />
          <S.SponsorLogoContainer>
            {bronzeLogos.map(({ file: { url } }, i) => (
              <S.MediumLogo>{renderLogo(url, i)}</S.MediumLogo>
            ))}
          </S.SponsorLogoContainer>
          <Spacer exact={70} />
        </>
      )}

      {otherLogos.length > 0 && (
        <>
          <Title2 accent>Övriga</Title2>
          <Spacer h28 />
          <Divider accent />
          <Spacer h48 />
          <S.SponsorLogoContainer>
            {otherLogos.map(({ file: { url } }, i) => (
              <S.MediumLogo>{renderLogo(url, i)}</S.MediumLogo>
            ))}
          </S.SponsorLogoContainer>
        </>
      )}
    </S.Container>
  )
}

export default SponsorsList
