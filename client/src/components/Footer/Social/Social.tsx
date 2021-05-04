import React from 'react'
import { Spacer } from '../../../theme/base'
import { Anchor, Body2 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const Social = () => {
  const year = new Date().getFullYear()

  return (
    <Row style={{ alignItems: 'flex-end' }}>
      <div>
        <Anchor
          href="https://www.instagram.com/stureplansgruppen/"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </Anchor>
        <Spacer exact={10} />
        <Anchor
          href="https://www.facebook.com/stureplansgruppen/"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </Anchor>
        <Spacer exact={10} />
        <Anchor
          href="https://twitter.com/stureplansgrupp"
          target="_blank"
          rel="noopener"
        >
          Twitter
        </Anchor>
      </div>
      <div>
        <Body2>Stureplansgruppen's policies</Body2>
      </div>
      <div>
        <Body2 accent>DIVISION @{year}</Body2>
      </div>
    </Row>
  )
}

export default Social
