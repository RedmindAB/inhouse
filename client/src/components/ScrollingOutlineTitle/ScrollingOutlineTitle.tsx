import React, {
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Outlined, Title1 } from '../../theme/typography'
import * as S from './styled'

type Props = {
  sections: string[]
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const ScrollingOutlineTitle: FunctionComponent<Props> = ({ sections }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const { current: id } = useRef(Math.round(Math.random() * 1000).toString())
  const visibleRef = useRef<number>(null)
  const pastScrollRef = useRef<number>(null)

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const scrollY = window.pageYOffset

      const element = document.getElementById(id)

      if (!element) return
      console.log('scroll w. element')
      const height = element.getBoundingClientRect().height
      const isVisible = isInViewport(element)

      if (!isVisible) return

      if (!visibleRef.current && isVisible) {
        visibleRef.current = window.pageYOffset
      }

      if (visibleRef.current && !isVisible) {
        visibleRef.current = null
      }

      const scrollDirection = scrollY > visibleRef.current ? 'down' : 'up'

      const scrolledPastElement =
        Math.max(scrollY, visibleRef.current) -
        Math.min(scrollY, visibleRef.current)

      const index =
        Math.min(
          sections.length,
          Math.round((scrolledPastElement / height) * sections.length)
        ) - 1

      const newIndex =
        scrollDirection === 'down' ? index : sections.length - index - 1

      console.log(
        'update index',
        newIndex,
        scrolledPastElement,
        scrollDirection
      )

      pastScrollRef.current = scrollY

      setCurrentSectionIndex(newIndex)
    })
  }, [])

  const getText = () => {
    const jsx = []

    sections.forEach((section, index) => {
      if (index === currentSectionIndex) {
        jsx.push(<Outlined key={section}>{section}</Outlined>)
        return
      }

      jsx.push(<Fragment key={section}>{section}</Fragment>)
    })

    return jsx
  }

  return (
    <S.Container id={id}>
      <Title1 uppercase>{getText()}</Title1>
    </S.Container>
  )
}

export default ScrollingOutlineTitle
