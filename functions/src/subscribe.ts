import { APIGatewayEvent, Context } from 'aws-lambda'
import BizWizService from '../services/bizwiz/bizwiz.service'
import { getEventBody } from '../util/helpers'

export async function handler(event: APIGatewayEvent, context: Context) {
  const { email } = getEventBody(event)

  await BizWizService.authenticate()
  await BizWizService.subscribeEmailToList(email, process.env.BIZWIZ_LIST_ID)

  return {
    statusCode: 204,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
