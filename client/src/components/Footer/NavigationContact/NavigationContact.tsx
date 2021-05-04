import { Link } from 'gatsby'
import React from 'react'
import { Spacer } from '../../../theme/base'
import { Anchor, Body2 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const NavigationContact = () => {
  const getOnPressFn = (id: string) => () => {
    const scrollToElement = () => {
      const element = document.querySelector(id)

      if (element) {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
        return true
      }

      return false
    }

    const isSuccessful = scrollToElement()

    if (!isSuccessful) {
      setTimeout(scrollToElement, 50)
    }
  }

  return (
    <Row>
      <nav>
        <Link to="/">
          <Anchor as={Body2} onClick={getOnPressFn('#about')}>
            About us
          </Anchor>
        </Link>
        <Spacer exact={10} />
        <Link to="/">
          <Anchor as={Body2} onClick={getOnPressFn('#experiences')}>
            Experiences
          </Anchor>
        </Link>
        <Spacer exact={10} />
        <Link to="/">
          <Anchor as={Body2} onClick={getOnPressFn('#brand-platforms')}>
            Brand platforms
          </Anchor>
        </Link>
        <Spacer exact={10} />
        <Link to="/">
          <Anchor as={Body2} onClick={getOnPressFn('#brand-innovations')}>
            Brand innovations
          </Anchor>
        </Link>
      </nav>
      <div>
        <Body2>
          For press inquires contact
          <br />
          <S.Mail href="mailto:mattias.hamstedt@spgeve.se">
            <S.Underlined>mattias.hamst</S.Underlined>
            <span>edt@spgeve</span>
          </S.Mail>
          <br />
          <br />
          For new business enquiries contact
          <br />
          <S.Mail href="mailto:jessica.eriksson@spgevent.se">
            <S.Underlined>jessica.eriksso</S.Underlined>
            <span>n@spgevent.se</span>
          </S.Mail>
          <br />
          <br />
          For new concepts or a nice chat
          <br />
          <S.Mail href="mailto:dan.josefsson@spgevent.se">
            <S.Underlined>dan.josefs</S.Underlined>
            <span>son@spgevent.se</span>
          </S.Mail>
        </Body2>
      </div>
    </Row>
  )
}

export default NavigationContact
