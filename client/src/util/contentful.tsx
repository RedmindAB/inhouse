import React from 'react'
import { Fragment } from 'react'
import styled from 'styled-components'
import { Accent } from '../theme/typography'

const br = styled.br``

export function parseContentfulBody(str: string, LineBreakComponent = br) {
  const jsx = []
  let key = 0
  let hasStartedOutline = false
  let currentString = ''

  const stringArray = str.replace(/\(accent\)/g, '$').split('')
  const addString = (Component: any) => {
    jsx.push(<Component key={key++}>{currentString}</Component>)
    currentString = ''
  }

  stringArray.forEach((char, index, arr) => {
    const isNewLine = char === '\n'
    const currentStringExists = currentString !== ''
    const isSpecialCharacter = char === '$'

    if (isNewLine && currentStringExists) {
      addString(Fragment)
    }

    if (isNewLine) {
      jsx.push(<LineBreakComponent key={key++} />)
    }

    if (isSpecialCharacter) {
      if (!hasStartedOutline) {
        addString(Fragment)
        hasStartedOutline = true
      } else {
        hasStartedOutline = false
        addString(Accent)
        return
      }
    }

    if (!isSpecialCharacter) {
      currentString += char
    }

    if (index === arr.length - 1) {
      addString(Fragment)
    }
  })

  return jsx
}
