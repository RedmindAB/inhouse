import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body2, Headline1 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import LargeModal, { LargeModalProps } from '../LargeModal/LargeModal'
import ParticipateForm from '../ParticipateForm/ParticipateForm'

type Props = {} & Omit<LargeModalProps, 'left' | 'right'>

const ParticipateModal: FunctionComponent<Props> = ({ ...largeModalProps }) => {
  const {
    contentfulRegisterPage: {
      competeFormTitle,
      competeFormBody: { competeFormBody },
    },
  } = useStaticQuery(graphql`
    query {
      contentfulRegisterPage {
        competeFormTitle
        competeFormBody {
          competeFormBody
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
            {competeFormTitle}
          </Headline1>
          <Spacer h40 />
          <Body2 onAccent>{parseContentfulBody(competeFormBody)}</Body2>
        </>
      }
      right={<ParticipateForm />}
    />
  )
}

export default ParticipateModal
