import React, { FunctionComponent } from 'react'
import Check from '../../assets/svg/Check'
import * as S from './styled'

export type CheckBoxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: FunctionComponent<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <S.Container onClick={() => onChange(!checked)} checked={checked}>
      {checked && <Check />}
    </S.Container>
  )
}

export default Checkbox
