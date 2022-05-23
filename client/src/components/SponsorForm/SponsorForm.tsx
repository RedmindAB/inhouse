import React, { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Spacer, TextArea } from '../../theme/base'
import { submitNetlifyForm } from '../../util/helpers'
import AcceptTerms from '../AcceptTerms/AcceptTerms'
import Button from '../Button/Button'

type Props = {}

const SponsorForm: FunctionComponent<Props> = () => {
  const { handleSubmit, register, reset, formState, getValues } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)

  const toggleTerms = () => setHasAcceptedTerms(!hasAcceptedTerms)

  const onSubmit = async () => {
    if (!hasAcceptedTerms) {
      return alert('Du måste godkänna integritetspolicyn först')
    }
    try {
      const form = document.querySelector<HTMLFormElement>('#sponsor-form')
      await submitNetlifyForm(form)

      reset()
      setSubmitted(true)
    } catch (error) {
      alert('Oj då! Ett fel uppstod, det gick inte att skicka iväg formuläret.')
    }
  }

  return (
    <form name="sponsor_form" id="sponsor-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="form-name" value="sponsor_form" />
      <Input
        placeholder="Företagsnamn"
        name="company_name"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <Input
        placeholder="Kontakt Email"
        name="email"
        type="email"
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <TextArea
        placeholder="Lämna ett meddelande"
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

export default SponsorForm
