import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body3, Body4 } from '../../theme/typography'
import Checkbox, { CheckBoxProps } from '../Checkbox/Checkbox'
import * as S from './styled'

type Props = {} & CheckBoxProps

const AcceptTerms: FunctionComponent<Props> = ({ ...checkBoxProps }) => {
  return (
    <S.Container>
      <Checkbox {...checkBoxProps} />
      <Spacer w16 />
      <Body3 color="black">
        Jag godkänner{' '}
        <Link to="/policies" style={{ textDecoration: 'underline' }}>
          integritetspolicyn.
        </Link>
      </Body3>
    </S.Container>
  )
}

export default AcceptTerms
