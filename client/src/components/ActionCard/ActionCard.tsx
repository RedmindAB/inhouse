import React, { FunctionComponent, useState } from 'react'
import { Spacer } from '../../theme/base'
import { Body1, Body2, Headline1 } from '../../theme/typography'
import Button from '../Button/Button'
import * as S from './styled'

type ButtonConfig = {
  title: string
  onClick: () => void
  disabled?: boolean
  comingSoon?: boolean
}

type Props = {
  title: string
  body: any
  button: ButtonConfig
  disabledBody?: string
  inverted?: boolean
  bottom?: React.ReactNode
  disabled?: boolean
}

const ActionCard: FunctionComponent<Props> = ({
  button,
  title,
  body,
  inverted = false,
  bottom,
  disabled,
  disabledBody,
}) => {
  const [disabledShowing, setDisabledShowing] = useState(false)

  const textProps = inverted ? {} : { onAccent: true }

  const handleClick = () => {
    if (disabled && !disabledShowing) {
      return setDisabledShowing(true)
    }

    button.onClick()
  }

  return (
    <S.Wrapper>
      <S.Container inverted={inverted} disabled={disabledShowing}>
        <S.Inner>
          <S.TextContainer>
            <Headline1 uppercase {...textProps}>
              {title}
            </Headline1>
            <Spacer h40 />
            <Body2 {...textProps}>{body}</Body2>
          </S.TextContainer>
          <div>
            <span style={{ textAlign: 'center' }}>
              <Button
                title={button.title}
                variant={inverted ? 'default' : 'background'}
                onClick={handleClick}
                disabled={button.disabled}
              />
              {button.disabled && button.comingSoon && (
                <>
                  <Spacer h08 />
                  <Body2 color={inverted ? 'white' : 'black'}>Kommer snart</Body2>
                </>
              )}
            </span>
          </div>
        </S.Inner>
        {bottom && (
          <>
            <Spacer exact={50} />
            <S.BottomArea>{bottom}</S.BottomArea>
          </>
        )}
      </S.Container>
      {disabledShowing && (
        <S.DisabledTextContainer>
          <Body1 bold>{disabledBody}</Body1>
        </S.DisabledTextContainer>
      )}
    </S.Wrapper>
  )
}

export default ActionCard
