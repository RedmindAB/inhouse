import React, { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Spacer, TextArea } from '../../theme/base'
import { submitNetlifyForm } from '../../util/helpers'
import AcceptTerms from '../AcceptTerms/AcceptTerms'
import Button from '../Button/Button'

type Props = {}

const AttendForm: FunctionComponent<Props> = () => {
  const { handleSubmit, register, formState, getValues, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)

  const toggleTerms = () => setHasAcceptedTerms(!hasAcceptedTerms)

  const onSubmit = async () => {
    if (!hasAcceptedTerms) {
      return alert('Du måste godkänna integritetspolicyn först')
    }

    try {
      const form = document.querySelector<HTMLFormElement>('#attend-form')
      await submitNetlifyForm(form)

      reset()
      setSubmitted(true)
    } catch (error) {
      alert('Oj då! Ett fel uppstod, det gick inte att skicka iväg formuläret.')
    }
  }

  return (
    <form name="attend_form" id="attend-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="form-name" value="attend_form" />
      <Input
        placeholder="Företagsnamn"
        name="company_name"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <Input
        placeholder="Kontakt e-mail"
        name="contact"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <Input
        placeholder="Antal gäster"
        name="guests"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <TextArea
        placeholder="Allergier och begäran"
        name="comment"
        ref={register({
          required: true,
        })}
      />
      <Spacer h40 />
      <AcceptTerms checked={hasAcceptedTerms} onChange={toggleTerms} />
      <Spacer h40 />
      <Button
        title={submitted ? 'Inskickat' : 'Skicka'}
        role="submit"
        variant={submitted ? 'default' : 'background'}
        disabled={submitted}
      />
    </form>
  )
}

export default AttendForm
