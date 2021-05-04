import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Spacer } from '../../theme/base'
import { Body2, Headline1 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import LargeModal, { LargeModalProps } from '../LargeModal/LargeModal'
import SponsorForm from '../SponsorForm/SponsorForm'

type Props = {} & Omit<LargeModalProps, 'left' | 'right'>

const SponsorModal: FunctionComponent<Props> = ({ ...largeModalProps }) => {
  const {
    contentfulRegisterPage: {
      sponsorFormTitle,
      sponsorFormBody: { sponsorFormBody },
    },
  } = useStaticQuery(graphql`
    query {
      contentfulRegisterPage {
        sponsorFormTitle
        sponsorFormBody {
          sponsorFormBody
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
            {sponsorFormTitle}
          </Headline1>
          <Spacer h40 />
          <Body2 onAccent>{parseContentfulBody(sponsorFormBody)}</Body2>
        </>
      }
      right={<SponsorForm />}
    />
  )
}

export default SponsorModal
