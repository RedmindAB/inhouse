import React, { useContext } from 'react'
import { ShowcaseContext } from '../../templates/showcase'
import { Body1, Title2 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const ConceptPlatform = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  const renderKeywords = (title: string) => (
    <Title2 uppercase key={title}>
      {title}
    </Title2>
  )

  return (
    <div>
      {selectedProject.keywords.map(renderKeywords)}
    </div>
  )

  return (
    <S.Container id="project-platform">
      <S.SectionTitle>
        <Body1 uppercase>WORK</Body1>
      </S.SectionTitle>
      <S.PlatformsContainer>
        {selectedProject.keywords.map(renderKeywords)}
      </S.PlatformsContainer>
      <S.Background>
        <img
          src={selectedProject.platformImage}
          style={{ height: '100%', width: '100%', backgroundSize: 'cover' }}
        />
      </S.Background>
    </S.Container>
  )
}

export default ConceptPlatform
