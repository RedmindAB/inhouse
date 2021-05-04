import React, { FunctionComponent, useEffect } from 'react'
import Cross from '../../assets/svg/Cross'
import * as S from './styled'

type Props = {
  onClose: () => void
  visible: boolean
  left: React.ReactNode
  right: React.ReactNode
}

export type LargeModalProps = Props

const disableScroll = () => {
  document.querySelector('html').style.overflow = 'hidden'
}

const enableScroll = () => {
  document.querySelector('html').style.overflow = 'auto'
}

const LargeModal: FunctionComponent<Props> = ({
  visible,
  onClose,
  left,
  right,
}) => {
  useEffect(() => {
    if (visible) {
      disableScroll()
    } else {
      enableScroll()
    }

    return enableScroll
  }, [visible])

  if (!visible) {
    return null
  }

  return (
    <S.Backdrop onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.CrossContainer onClick={onClose}>
          <Cross />
        </S.CrossContainer>
        <S.ContentGrid>
          <div>{left}</div>
          <div>{right}</div>
        </S.ContentGrid>
      </S.Container>
    </S.Backdrop>
  )
}

export default LargeModal
