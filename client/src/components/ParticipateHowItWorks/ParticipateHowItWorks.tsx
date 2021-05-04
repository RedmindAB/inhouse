import React, { FunctionComponent, useContext } from 'react'
import { Spacer } from '../../theme/base'
import { Body4, Headline1, Title2 } from '../../theme/typography'
import ArrowRight from '../../assets/svg/ArrowRight'
import * as S from './styled'
import { AboutPageContext } from '../../pages/about'
import { parseContentfulBody } from '../../util/contentful'

type Props = {}

const ParticipateHowItWorks: FunctionComponent<Props> = () => {
  const {
    stepsHeading,
    step1Text: { step1Text },
    step2Text: { step2Text },
    step3Text: { step3Text },
    step4Text: { step4Text },
    step5Text: { step5Text },
  } = useContext(AboutPageContext)

  return (
    <S.Container id="how-it-works">
      <Title2 accent>{stepsHeading}</Title2>
      <Spacer h48 />
      <S.Grid>
        <S.InstructionBox>
          <Headline1 accent>1.</Headline1>
          <Spacer h16 />
          <Body4>{parseContentfulBody(step1Text)}</Body4>
        </S.InstructionBox>
        <S.ArrowContainer>
          <ArrowRight />
        </S.ArrowContainer>
        <S.InstructionBox>
          <Headline1 accent>2.</Headline1>
          <Spacer h16 />
          <Body4>{parseContentfulBody(step2Text)}</Body4>
        </S.InstructionBox>
        <S.ArrowContainer>
          <ArrowRight />
        </S.ArrowContainer>
        <S.InstructionBox>
          <Headline1 accent>3.</Headline1>
          <Spacer h16 />
          <Body4>{parseContentfulBody(step3Text)}</Body4>
        </S.InstructionBox>
        <S.InstructionBox>
          <Headline1 accent>4.</Headline1>
          <Spacer h16 />
          <Body4>{parseContentfulBody(step4Text)}</Body4>
        </S.InstructionBox>
        <S.ArrowContainer>
          <ArrowRight />
        </S.ArrowContainer>
        <S.InstructionBox>
          <Headline1 accent>5.</Headline1>
          <Spacer h16 />
          <Body4>{parseContentfulBody(step5Text)}</Body4>
        </S.InstructionBox>
        <S.ArrowContainer>
          <ArrowRight />
        </S.ArrowContainer>
        <S.InstructionBoxSpecial>
          <Headline1 accent>6.</Headline1>
          <span>🎉</span>
        </S.InstructionBoxSpecial>
      </S.Grid>
    </S.Container>
  )
}

export default ParticipateHowItWorks
