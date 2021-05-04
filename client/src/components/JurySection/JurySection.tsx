import React, { FunctionComponent, useContext } from 'react'
import { JuryPageContext } from '../../pages/jury'
import { parseContentfulFileUrl } from '../../util/helpers'
import JuryMember from '../JuryMember/JuryMember'
import * as S from './styled'

type Props = {}

const JurySection: FunctionComponent<Props> = () => {
  const data = useContext(JuryPageContext)

  const renderJuryMember = ({
    name,
    picture: {
      file: { url },
    },
    title,
  }: typeof data[0]) => (
    <JuryMember
      name={name}
      title={title}
      imageUrl={parseContentfulFileUrl(url)}
      key={name + title}
    />
  )

  return <S.Container>{data.map(renderJuryMember)}</S.Container>
}

export default JurySection
