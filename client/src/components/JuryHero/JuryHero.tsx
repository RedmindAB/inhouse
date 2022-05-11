import React, { FunctionComponent } from 'react'
import Logo from '../../assets/svg/Logo'
import YellowLines from '../../assets/svg/YellowLines'
import { Title1 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const JuryHero: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <S.GraphicsContainer>
        <div className="pattern">
          <YellowLines />
        </div>

        <div className="logo">
          <Logo />
        </div>
      </S.GraphicsContainer>
      <S.TextContainer>
        <Title1 accent>
          2022
          <br />
          JURY
        </Title1>
      </S.TextContainer>
    </S.Container>
  )
}

export default JuryHero
