import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from './mediaBreakpoints'

export type ThemeColorProps = {
  primary?: boolean | string
  primaryLight?: boolean | string
  secondary?: boolean | string
  accent?: boolean | string
  primaryVariant?: boolean | string
}

export type TypographyProps = {
  light?: boolean | string
  centered?: boolean | string
  uppercase?: boolean | string
  lowercase?: boolean | string
  underline?: boolean | string
  color?: string
  fontSize?: number
  italic?: boolean | string
  accent?: boolean
  as?: any
  bold?: boolean
  clickable?: boolean
  onAccent?: boolean
} & ThemeColorProps

const typographyBase = css`
  color: var(--foreground);
  font-family: 'Tide Sans 300';
`

const typographyProps = css<TypographyProps>`
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
  ${({ clickable }) => clickable && 'cursor: pointer;'}
  ${({ accent }) => accent && 'color: var(--accent);'}
  ${({ light }) => light && 'opacity: 0.8;'}
  ${({ onAccent }) => onAccent && 'color: var(--background);'}
  ${({ color }) => color && `color: ${color};`}
  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ underline }) => underline && 'text-decoration: underline;'}
  ${({ bold }) => bold && "font-family: 'Tide Sans 600';"}
`

export type TypographyComponent<T = {}> = FunctionComponent<TypographyProps & T>

export const Title1 = styled.h1<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 8.4rem;
  ${breakpoints.mobile} {
    font-size: 5rem;
  }
  ${typographyProps}
`

export const Title2 = styled.h2<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 4.8rem;
  ${typographyProps}
`

export const Headline1 = styled.h1<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 4rem;
  ${breakpoints.mobile} {
    font-size: 3.4rem;
  }
  ${typographyProps}
`

export const Headline2 = styled.h2<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 3.2rem;
  ${typographyProps}
`

export const Headline3 = styled.h3<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 2.6rem;
  letter-spacing: 0.2rem;
  ${typographyProps}
`

export const Headline4 = styled.h4<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 2.2rem;
  ${typographyProps}
`

export const Headline5 = styled.h5<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 2rem;
  ${typographyProps}
`

export const Headline6 = styled.h6<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 600';
  font-size: 1.6rem;
  letter-spacing: 2px;
  ${typographyProps}
`

export const body1Styles = css`
  font-family: 'Tide Sans 300';
  font-size: 2.4rem;
  line-height: 1.3;
`

export const Body1 = styled.p<TypographyProps>`
  ${typographyBase}
  ${body1Styles}
  ${typographyProps}
`

export const body2Styles = css`
  font-family: 'Tide Sans 300';
  font-size: 2rem;
  line-height: 1.3;
`

export const Body2 = styled.p<TypographyProps>`
  ${typographyBase}
  ${body2Styles}
  ${typographyProps}
`

export const Body3 = styled.p<TypographyProps>`
  ${typographyBase}
  font-size: 1.8rem;
  line-height: 1.3;
  font-family: 'Tide Sans 300';
  ${typographyProps}
`
export const Body4 = styled.p<TypographyProps>`
  ${typographyBase}
  font-size: 1.4rem;
  line-height: 1.3;
  font-family: 'Tide Sans 300';
  ${typographyProps}
`

export const anchorStyles = css`
  cursor: pointer;
  font-family: 'Tide Sans 300';

  &:hover {
    color: var(--accent);
  }
`

export const CopyRight = styled.p<TypographyProps>`
  ${typographyBase}
  font-family: 'Tide Sans 300';
  font-size: 1.2rem;
  ${typographyProps}
`

export const Anchor = styled.a<TypographyProps>`
  ${typographyBase}
  ${body2Styles}
  ${breakpoints.mobile} {
    ${body1Styles}
  }
  ${typographyProps}
  ${anchorStyles}
`

export const Outlined = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`

export const Accent = styled.span.attrs(() => ({
  className: 'accent bold',
}))``
