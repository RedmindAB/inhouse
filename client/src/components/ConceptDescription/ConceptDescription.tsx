import React, { useContext } from 'react'
import { Body1, Body2, Headline1 } from '../../theme/typography'
import * as S from './styled'
import moment from 'moment'
import Divider from '../__general/Divider'
import { Spacer } from '../../theme/base'
import fonts from '../../theme/fonts'
import { ShowcaseContext } from '../../templates/showcase'

type Props = {}

const ConceptDescription = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  const date = moment(selectedProject.date).format('MMMM YYYY')

  return (
    <S.Container id="project-description">
      <Headline1 uppercase>{selectedProject.conceptDescription}</Headline1>
      <div>
        <Divider />
        <Spacer exact={30} />
        <Body2 uppercase style={{ fontFamily: fonts.headline.condensedBold }}>
          {selectedProject.conceptName}
        </Body2>
        <Body2>{date}</Body2>
      </div>
    </S.Container>
  )
}

export default ConceptDescription
