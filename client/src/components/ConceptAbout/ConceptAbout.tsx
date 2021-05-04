import React, { useContext } from 'react'
import { ShowcaseContext } from '../../templates/showcase'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection'
import * as S from './styled'

type Props = {}

const ConceptAbout = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  return (
    <TitleSection title="concept">
      <div>
        <TextContainer width="80%">
          <Title1 uppercase>{selectedProject.heading}</Title1>
        </TextContainer>
        <Spacer exact={40} />
        <TextContainer width="40%" mobile="100%">
          <Body1>{selectedProject.body}</Body1>
        </TextContainer>
      </div>
    </TitleSection>
  )
}

export default ConceptAbout
