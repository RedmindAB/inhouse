import React from 'react'
import { anchorStyles, Body1, Body2 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const premises = [
  {
    name: 'Bank Hotel',
    website: 'https://bankhotel.se',
  },
  { name: "L'avventura", website: 'https://lavventura.se' },
  { name: 'Sturecompagniet', website: 'https://sturecompagniet.se' },
  { name: 'Gamla Riksarkivet', website: 'https://gamlariksarkivet.com' },
  { name: 'Berns', website: 'https://berns.se' },
  { name: 'China Teatern', website: 'https://chinateatern.se' },
  { name: 'Stockholm City Conference Centre', website: 'https://stoccc.se' },
  { name: 'Cabaret', website: 'https://stocc.se/lokal/restaurang-cabaret/' },
  { name: 'Nosh and Chow', website: 'https://noshandchow.se' },
  { name: 'Lastkajen', website: 'https://spgevent.se/lokaler/lastkajen/' },
  { name: 'Spybar', website: 'https://stureplansgruppen.se' },
  { name: "Hell's Kitchen", website: 'https://stureplansgruppen.se' },
  {
    name: 'The Wall',
    website: 'https://stureplansgruppen.se/nightlife/the-wall',
  },
  { name: 'Gården', website: 'https://gardenstockholm.se' },
  { name: 'PUSH', website: 'https://push.se' },
  { name: 'Stora Teatern', website: 'https://storateatern.se' },
  { name: 'Gutekällaren', website: 'https://gutekallaren.com' },
  { name: 'Hillenberg', website: 'https://hillenberg.se' },
  { name: 'Humlan', website: 'https://spgevent.se/lokaler/hulman/' },
  { name: 'Konditoriet & Köket', website: 'https://konditoriet.nu' },
  {
    name: 'Avant Escalier',
    website: 'https://spgevent.se/lokaler/avant-escalier/',
  },
]

const halfwayIndexDown = Math.floor(premises.length / 2)
const halfwayIndexUp = Math.round(premises.length / 2)

const list1 = premises.slice(0, halfwayIndexDown)
const list2 = premises.slice(halfwayIndexUp, premises.length - 1)

const Premises = () => {
  const renderPremise = ({ name, website }) => (
    <S.Link key={name} uppercase>
      <a href={website} target="_blank" rel="noopener">
        {name}
      </a>
    </S.Link>
  )

  return (
    <Row>
      <Body1>Premises</Body1>
      <div>{list1.map(renderPremise)}</div>
      <div>{list2.map(renderPremise)}</div>
    </Row>
  )
}

export default Premises
