import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Plus from '../../assets/svg/Plus'
import { Headline2, Outlined } from '../../theme/typography'
import PageDots from '../PageDots'
import * as S from './styled'

type NavLink = {
  slug: string
  title: string
}

type Slide = {
  picture: string
  title: string
  year: string
  link?: NavLink
}

type Props = {
  slides: Slide[]
  title?: string
  year?: string
}

const Carousel: FunctionComponent<Props> = ({ slides, title, year }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex + 1 === slides.length) {
        return setActiveIndex(0)
      }
      setActiveIndex(activeIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [activeIndex])

  const renderPicture = (image: any, index: number) => {
    return (
      <S.PictureContainer key={index}>
        <img
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          // imgStyle={{ backgroundSize: 'cover' }}
          src={image}
          // fluid={image}
          alt={`slideshow-image-${index + 1}`}
          key={index + ''}
        />
      </S.PictureContainer>
    )
  }

  const currentSlide = slides[activeIndex]
  const hasLinks = slides.some((slide) => slide.link)
  const links = hasLinks && slides.filter((s) => s.link).map((s) => s.link)
  let indexStr = activeIndex + 1 + ''
  let maxIndexStr = slides.length + ''

  if (indexStr.length < 2) {
    indexStr = `0${indexStr}`
  }

  if (maxIndexStr.length < 2) {
    maxIndexStr = `0${maxIndexStr}`
  }

  const renderLink = ({ slug, title }: NavLink) => {
    return (
      <Link to={slug} key={slug}>
        <S.NavigationItem uppercase>
          <Outlined>{title}</Outlined>
        </S.NavigationItem>
      </Link>
    )
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <Headline2 uppercase>{title || currentSlide.title}</Headline2>
        <S.Year>{year || currentSlide.year}</S.Year>
        <S.SlideNumber>
          {indexStr} / {maxIndexStr}
        </S.SlideNumber>
      </S.TitleContainer>
      <S.BottomContainer>
        <PageDots current={activeIndex + 1} amount={slides.length} />
      </S.BottomContainer>
      <div style={{ overflowX: 'hidden', width: '100%', height: '100%' }}>
        <S.PicturesContainer offset={activeIndex}>
          {slides.map((slide, index) => renderPicture(slide.picture, index))}
        </S.PicturesContainer>
      </div>
      {hasLinks && (
        <S.NavigationContainer>
          <S.PlusContainer className="hide-mobile">
            <Plus />
          </S.PlusContainer>
          {links.map(renderLink)}
        </S.NavigationContainer>
      )}
    </S.Container>
  )
}

export default Carousel
