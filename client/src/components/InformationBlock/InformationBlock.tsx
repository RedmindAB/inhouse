import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body2, Headline1 } from '../../theme/typography'
import Button from '../Button/Button'
import * as S from './styled'

type Props = {
  title: string
  body: any
  cta?: {
    text: string
    onClick: () => void
  }
}

const InformationBlock: FunctionComponent<Props> = ({
  title,
  body,
  cta,
  cta: { onClick, text } = {},
}) => {
  return (
    <S.Container>
      <Headline1 accent centered uppercase>
        {title}
      </Headline1>
      <Spacer h48 />
      <Body2>{body}</Body2>
      {cta && (
        <S.ButtonContainer>
          <Spacer h48 />
          <Button title={text} onClick={onClick} />
        </S.ButtonContainer>
      )}
    </S.Container>
  )
}

export default InformationBlock
