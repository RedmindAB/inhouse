import React from 'react'
import * as S from './styled'
import Divider from '../__general/Divider'
import { Spacer } from '../../theme/base'
import { Body1, Body2 } from '../../theme/typography'

type Props = {}

type Event = {
  title: string
  location: string
  date: string
}

const events: Event[] = [
  {
    title: 'Foodstock at yours',
    location: 'Coming to you',
    date: 'Dec 01 - 22',
  },
  {
    title: 'Inhousetavlingen competition',
    location: 'China Teatern Berzelii park 9, 111 47 Stockholm',
    date: 'Oct 16, 2021',
  },
  {
    title: "Tomorrow's Trädgård",
    location: 'Almedalen, Visby',
    date: 'Feb 14, 2021',
  },
]

const UpcomingEvents = () => {
  const renderEvent = ({ title, location, date }: Event) => {
    return (
      <div key={title}>
        <S.Event key={title}>
          <Body2>{title}</Body2>
          <Body2>{location}</Body2>
          <Body2>{date}</Body2>
        </S.Event>
        <Divider />
      </div>
    )
  }

  return (
    <S.Container>
      <Divider />
      <S.Grid>
        <div>
          <Spacer exact={20} />
          <Body1 uppercase>upcoming events</Body1>
        </div>
        <div>{events.map(renderEvent)}</div>
      </S.Grid>
    </S.Container>
  )
}

export default UpcomingEvents
