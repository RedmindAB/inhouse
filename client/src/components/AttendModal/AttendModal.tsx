import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import * as S from './styled'
import { Spacer } from '../../theme/base'
import { Body2, Headline1 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import AttendForm from '../AttendForm/AttendForm'
import LargeModal, { LargeModalProps } from '../LargeModal/LargeModal'

type Props = {} & Omit<LargeModalProps, 'left' | 'right'>

const AttendModal: FunctionComponent<Props> = ({ ...largeModalProps }) => {
  const {
    contentfulRegisterPage: {
      attendFormTitle,
      attendFormBody: { attendFormBody },
    },
  } = useStaticQuery(graphql`
    query {
      contentfulRegisterPage {
        attendFormTitle
        attendFormBody {
          attendFormBody
        }
      }
    }
  `)

  return (
    <LargeModal
      {...largeModalProps}
      left={
        <>
          <Headline1 onAccent uppercase>
            {attendFormTitle}
          </Headline1>
          <Spacer h40 />
          <S.BodyContainer>
            <Body2 onAccent>{parseContentfulBody(attendFormBody)}</Body2>
          </S.BodyContainer>
        </>
      }
      right={<AttendForm />}
    />
  )
}

export default AttendModal
