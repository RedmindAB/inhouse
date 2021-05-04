import { APIGatewayEvent } from 'aws-lambda'

export function getEventBody(event: APIGatewayEvent) {
  if (event.isBase64Encoded) {
    return Buffer.from(event.body, 'base64').toString()
  }

  return JSON.parse(event.body)
}
