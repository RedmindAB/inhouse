import React from 'react'
import { Body1, Body2 } from '../../../theme/typography'
import { Mail, Underlined } from '../NavigationContact/styled'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const Location = () => {
  return (
    <Row>
      <div>
        <Body1>Stockholm</Body1>
      </div>
      <div>
        <Body2>
          Sturegatan 4, 2 tr
          <br />
          Box 55719
          <br />
          114 35 Stockholm
        </Body2>
      </div>
      <div>
        <Body2>+46 8 791 40 10</Body2>
        <Body2>
          <Mail href="mailto:contact@spgevent.se">
            <Underlined>contact@spgevent.s</Underlined>
            <span>e</span>
          </Mail>
        </Body2>
      </div>
    </Row>
  )
}

export default Location
