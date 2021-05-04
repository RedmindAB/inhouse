import React, { FunctionComponent, useEffect, useRef } from 'react'
import { useInView } from 'react-hook-inview'
import * as S from './styled'

type Props = {
  onReveal?: () => void
}

const FullScreenReveal: FunctionComponent<Props> = ({ children, onReveal }) => {
  const [ref, isVisible] = useInView({ threshold: 1 })
  const hasRevealed = useRef(false)

  useEffect(() => {
    if (hasRevealed.current) return

    if (isVisible && typeof onReveal === 'function') {
      onReveal()
      hasRevealed.current = true
    }
  }, [isVisible])

  return (
    <S.Container>
      <S.RevealAnchor ref={ref} />
      {children}
    </S.Container>
  )
}

export default FullScreenReveal
