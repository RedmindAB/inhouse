import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Spacer, TextArea } from '../../theme/base'
import { Headline5 } from '../../theme/typography'
import { submitNetlifyFileForm } from '../../util/helpers'
import AcceptTerms from '../AcceptTerms/AcceptTerms'
import Button from '../Button/Button'
import MultiSelect from '../MultiSelect'

type Props = {}

const ParticipateForm: FunctionComponent<Props> = () => {
  const { handleSubmit, register, formState, getValues, reset } = useForm()
  const [categories, setCategories] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleTerms = () => setHasAcceptedTerms(!hasAcceptedTerms)

  const { allContentfulCompetitionCategory } = useStaticQuery(graphql`
    query {
      allContentfulCompetitionCategory {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const data = allContentfulCompetitionCategory.edges.map(({ node }) => node)

  const onSubmit = async (data: any) => {
    if (!hasAcceptedTerms) {
      return alert('Du måste godkänna integritetspolicyn först')
    }

    if (!categories.length) {
      return alert('Du måste välja minst en kategori att tävla i')
    }

    try {
      setLoading(true)

      await submitNetlifyFileForm({
        'form-name': 'participate',
        ...data,
        category: categories.join(', '),
      }).catch(console.error)

      reset()
      setSubmitted(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form name="participate_form" id="participate-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="hidden"
        name="form-name"
        value="participate_form"
        disabled={loading}
        ref={register({})}
      />
      <Input
        placeholder="Företagsnamn"
        name="company_name"
        disabled={loading}
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <Input
        placeholder="Kontakt e-mail"
        type="email"
        name="contact"
        disabled={loading}
        ref={register({
          required: true,
        })}
      />
      <Spacer h32 />
      <MultiSelect
        options={data.map(({ name }) => name)}
        onChange={setCategories}
        disabled={loading}
        placeholder="Välj kategorier"
      />
      <Spacer h32 />
      <TextArea
        placeholder="Lämna ett meddelande"
        name="comment"
        disabled={loading}
        ref={register({
          required: false,
        })}
      />
      <Spacer h32 />
      <Headline5 color="black">Bifoga bild</Headline5>
      <Spacer h12 />
      <Input
        type="file"
        disabled={loading}
        ref={register({ required: true })}
        name="image"
        style={{ border: 0, padding: 0 }}
      />
      <Spacer h16 />
      <Headline5 color="black">Bifoga PDF</Headline5>
      <Spacer h12 />
      <Input
        type="file"
        disabled={loading}
        ref={register({ required: true })}
        name="pdf"
        style={{ border: 0, padding: 0 }}
      />
      <Spacer h16 />
      <AcceptTerms checked={hasAcceptedTerms} onChange={toggleTerms} />
      <Spacer h40 />

      {!loading && !submitted && (
        <Button
          title={submitted ? 'Inskickat' : 'Skicka'}
          role="submit"
          variant={submitted ? 'default' : 'background'}
          disabled={submitted}
        />
      )}
      {loading && <Headline5 color="black">Skickar in bidrag..</Headline5>}
      {submitted && <Headline5 color="black">Inskickat</Headline5>}
    </form>
  )
}

export default ParticipateForm
