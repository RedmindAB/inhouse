import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../../api'
import { HomePageContext } from '../../pages'
import { Input, Spacer } from '../../theme/base'
import { Body2, Headline4, Headline6 } from '../../theme/typography'
import { parseContentfulBody } from '../../util/contentful'
import Button from '../Button/Button'
import * as S from './styled'

type Props = {
  small?: boolean
}

const EmailForm: FunctionComponent<Props> = ({ small }) => {
  const { handleSubmit, register, formState, getValues, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const { contentfulHomePage } = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        newsletterHeading
        newsletterBody {
          newsletterBody
        }
      }
    }
  `)

  const onSubmit = async (data) => {
    try {
      reset()
      await api.post('/subscribe', data)
      setSubmitted(true)
    } catch (error) {
      alert('Oj då! Ett fel uppstod, det gick inte att skicka iväg formuläret.')
    }
  }

  if (small) {
    return (
      <S.SmallContainer>
        <Headline6 uppercase>Prenumerera på vårt nyhetsbrev</Headline6>
        <Spacer h16 />
        <S.SmallForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            name="email"
            ref={register({ required: true })}
          />
          <Spacer w12 />
          <Button
            title={submitted ? 'Signed up!' : 'Sign me up'}
            role="submit"
            variant={submitted ? 'background' : 'default'}
            disabled={submitted}
          />
        </S.SmallForm>
      </S.SmallContainer>
    )
  }

  return (
    <S.Container>
      <div>
        <Headline4 onAccent uppercase>
          {contentfulHomePage.newsletterHeading}
        </Headline4>
        <Spacer h32 />
        <Body2 onAccent>
          {parseContentfulBody(
            contentfulHomePage.newsletterBody.newsletterBody
          )}
        </Body2>
      </div>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          name="email"
          ref={register({ required: true })}
        />
        <Spacer w12 />
        <Button
          title={submitted ? 'Signed up!' : 'Sign me up'}
          role="submit"
          variant={submitted ? 'default' : 'background'}
          disabled={submitted}
        />
      </S.Form>
    </S.Container>
  )
}

export default EmailForm
