import React, { FunctionComponent, InputHTMLAttributes, useState } from 'react'
import ChevronDown from '../../assets/svg/ChevronDown'
import { Input } from '../../theme/base'
import * as S from './styled'

type Props = {
  options: string[]
  onChange: (options: string[]) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const MultiSelect: FunctionComponent<Props> = ({
  options,
  onChange,
  ...inputProps
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  const renderOption = (option: string) => {
    const isSelected = selectedOptions.includes(option)
    const onClick = () => {
      let newOptions = isSelected
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]

      setSelectedOptions(newOptions)
      onChange(newOptions)
      toggleDropdown()
    }

    return (
      <S.Option key={option} onClick={onClick}>
        <span>{option}</span>
        <S.OptionCircle selected={isSelected} />
      </S.Option>
    )
  }

  return (
    <S.Container>
      <S.InputClickable onClick={toggleDropdown}>
        <Input value={selectedOptions.join(', ')} {...inputProps} />
        <S.IconContainer>
          <ChevronDown />
        </S.IconContainer>
      </S.InputClickable>
      {showDropdown && <S.Dropdown>{options.map(renderOption)}</S.Dropdown>}
    </S.Container>
  )
}

export default MultiSelect
