import React, { FunctionComponent, useContext } from 'react'
import { AboutPageContext } from '../../pages/about'
import { Spacer } from '../../theme/base'
import { Body3, Headline2 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import { downloadRemoteFile, parseContentfulFileUrl } from '../../util/helpers'
import Button from '../Button/Button'
import * as S from './styled'

type Props = {}

const ParticipateSummary: FunctionComponent<Props> = () => {
  const {
    column1Files,
    column1Heading,
    column2Heading,
    column3Heading,
    column2CtaUrl,
    column3CtaUrl,
    column1Body: { column1Body },
    column2Body: { column2Body },
    column3Body: { column3Body },
  } = useContext(AboutPageContext)

  const onClickColumn1 = async () => {
    column1Files.forEach(({ file }) =>
      downloadRemoteFile(parseContentfulFileUrl(file.url), file.contentType)
    )
  }

  return (
    <S.Container>
      <div>
        <Headline2 accent>{column1Heading}</Headline2>
        <Spacer h36 />
        <Body3>{parseContentfulBody(column1Body)}</Body3>
        <Spacer h36 />
        <Button title="Ladda ner dokumenten" onClick={onClickColumn1} />
      </div>

      <div>
        <Headline2 accent>{column2Heading}</Headline2>
        <Spacer h36 />
        <Body3>{parseContentfulBody(column2Body)}</Body3>
        <Spacer h36 />
        <a href={column2CtaUrl}>
          <Button title="Ta mig till inlämningen" />
        </a>
      </div>

      <div>
        <Headline2 accent>{column3Heading}</Headline2>
        <Spacer h36 />
        <Body3>{parseContentfulBody(column3Body)}</Body3>
        <Spacer h36 />
        <a href={column3CtaUrl}>
          <Button title="Sign me up!" />
        </a>
      </div>
    </S.Container>
  )
}

export default ParticipateSummary
