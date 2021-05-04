import { APIGatewayEvent, Context } from 'aws-lambda'
import Mailchimp from 'mailchimp-api-v3'
import { getEventBody } from '../util/helpers'

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)

export async function handler(event: APIGatewayEvent, context: Context) {
  const { email } = getEventBody(event)

  await mailchimp.post({
    path: `/lists/{list_id}/members`,
    path_params: { list_id: process.env.MAILCHIMP_AUDIENCE_ID },
    body: {
      email_address: email,
      status: 'subscribed',
    },
  })

  return {
    statusCode: 204,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
