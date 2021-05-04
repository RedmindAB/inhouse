import React, { FunctionComponent } from 'react'
import * as S from './styled'

export type ButtonVariant =
  | 'background'
  | 'outline'
  | 'outline-background'
  | 'default'

type Props = {
  title: string
  onClick?: () => void
  variant?: ButtonVariant
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

const Button: FunctionComponent<Props> = ({
  title,
  variant = 'default',
  disabled,
  ...buttonProps
}) => {
  return (
    <S.Container variant={variant} disabled={disabled} {...buttonProps}>
      <S.Text variant={variant} uppercase>
        {title}
      </S.Text>
    </S.Container>
  )
}

export default Button
