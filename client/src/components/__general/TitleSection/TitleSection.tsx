import React, { FunctionComponent } from 'react'
import { Body1 } from '../../../theme/typography'
import * as S from './styled'

type Props = {
  title: string
  withoutRightPadding?: boolean
  background?: string
} & any

const TitleSection: FunctionComponent<Props> = ({
  title,
  children,
  withoutRightPadding,
  background,
  id,
  ...divProps
}) => {
  return (
    <S.Container
      withoutRightPadding={withoutRightPadding}
      background={background}
      {...divProps}
    >
      <S.ScrollAnchor id={id} />
      <S.TitleContainer>
        <Body1 uppercase>{title}</Body1>
      </S.TitleContainer>
      {children}
    </S.Container>
  )
}

export default TitleSection
