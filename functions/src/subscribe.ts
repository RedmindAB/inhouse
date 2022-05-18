import { APIGatewayEvent, Context } from 'aws-lambda'
import { getEventBody } from '../util/helpers'
import BizWizService from './services/bizwiz/bizwiz.service'

const bizwiz = new BizWizService()

export async function handler(event: APIGatewayEvent, context: Context) {
  const { email } = getEventBody(event)

  await bizwiz.authenticate()
  await bizwiz.subscribeEmailToList(email, process.env.BIZWIZ_LIST_ID)

  return {
    statusCode: 204,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
