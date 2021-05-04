import React, { FunctionComponent, useContext } from 'react'
import { RegisterPageContext } from '../../pages/participate'
import * as S from './styled'

type Props = {}

const LogoBar: FunctionComponent<Props> = () => {
  const { sponsorLogos } = useContext(RegisterPageContext)

  return (
    <S.Container>
      {sponsorLogos.map(({ file: { url } }, i) => (
        <S.LogoContainer>
          <img key={i} src={url} style={{ height: '100%', width: '100%' }} />
        </S.LogoContainer>
      ))}
    </S.Container>
  )
}

export default LogoBar
