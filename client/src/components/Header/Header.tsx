import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import React, { Fragment, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Hamburger from '../../assets/svg/Hamburger'
import Logo from '../../assets/svg/Logo'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { Outlined, Title2 } from '../../theme/typography'
import './header.css'
import * as S from './styled'

type Props = {}

type HomeRoute = {
  title: string
  id: string
  outline?: boolean
}

type Route = {
  title: string
  route: string
}

export type AnimationState = 'hidden' | 'animate-in' | 'animate-out'

const homePageRoutes: HomeRoute[] = []

const pageRoutes: Route[] = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'Om tävlingen',
    route: '/about',
  },
  {
    title: 'Var med',
    route: '/participate',
  },
  {
    title: 'Jury',
    route: '/jury',
  },
]

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [animationState, setAnimationState] = useState('hidden')
  const [isScrolling, setIsScrolling] = useState(false)
  const location = useLocation()
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

  useEffect(() => {
    const onScroll = () => {
      if (!isScrolling && window.scrollY > 0) {
        setIsScrolling(true)
      }

      if (isScrolling && window.scrollY === 0) {
        setIsScrolling(false)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.body.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showDrawer ? 'hidden' : 'initial'
  }, [showDrawer])

  const getOnPressFn = (id: string) => () => {
    const scrollToElement = () => {
      const element = document.querySelector(id)

      if (element) {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
        return true
      }

      return false
    }

    const isSuccessful = scrollToElement()

    if (!isSuccessful) {
      setTimeout(scrollToElement, 50)
    }
  }

  const toggleDrawer = () => {
    const newState = !showDrawer
    setAnimationState(newState ? 'animate-in' : 'animate-out')

    setTimeout(
      () => {
        setShowDrawer(newState)
      },
      newState ? 0 : 1100
    )
  }

  let MenuTypography = isMobile ? Title2 : S.DesktopMenuItem

  const renderPageRoute = ({ route, title }: Route) => {
    const isCurrentRoute = location.pathname === route

    return (
      <Link to={route} key={title}>
        <MenuTypography
          uppercase
          clickable
          accent={isCurrentRoute}
          isCurrentRoute={isCurrentRoute}
        >
          {title}
        </MenuTypography>
      </Link>
    )
  }

  if (isMobile) {
    return (
      <>
        {showDrawer && (
          <S.Overlay className={`${animationState}-overlay`}>
            <S.DrawerBackdrop className={`${animationState}-drawer`}>
              <span className={`${animationState}-content`}>
                <S.DrawerMenu>
                  <span onClick={toggleDrawer}>
                    {homePageRoutes.map((route) => {
                      const Wrapper = route.outline ? Outlined : Fragment

                      return (
                        <Link to="/" key={route.title}>
                          <MenuTypography
                            uppercase
                            clickable
                            onClick={getOnPressFn(route.id)}
                          >
                            <Wrapper>{route.title}</Wrapper>
                          </MenuTypography>
                        </Link>
                      )
                    })}
                    {pageRoutes.map(renderPageRoute)}
                  </span>
                </S.DrawerMenu>
              </span>
            </S.DrawerBackdrop>
          </S.Overlay>
        )}
        <S.Container showBackground>
          <S.MobileLogoContainer>
            <Logo />
          </S.MobileLogoContainer>
          <div
            onClick={toggleDrawer}
            style={{ padding: '1rem', marginTop: '2px', marginLeft: '1rem' }}
          >
            <Hamburger />
          </div>
        </S.Container>
      </>
    )
  }

  return (
    <S.DesktopContainer showBackground>
      <S.DesktopLogoContainer>
        <Logo />
      </S.DesktopLogoContainer>
      <S.DesktopMenu>{pageRoutes.map(renderPageRoute)}</S.DesktopMenu>
    </S.DesktopContainer>
  )
}

export default Header
