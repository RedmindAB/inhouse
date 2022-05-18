import axios from 'axios'
import { crawlForCookie } from './bizwiz.crawler'
import {
  parseSubscriptionRequestBody,
  parseUserCreationRequestBody,
  parseUserSearchHtmlToUserId,
} from './bizwiz.parser'

const httpClient = axios.create({ baseURL: process.env.BIZWIZ_API_URL })
const password = process.env.BIZWIZ_PASSWORD
const username = process.env.BIZWIZ_USERNAME

class BizWizService {
  async authenticate() {
    const cookie = await crawlForCookie(username, password)
    httpClient.defaults.headers.common.Cookie = cookie
  }

  async createUser(email: string): Promise<string> {
    const { data } = await httpClient.post<any>(
      '/recipientlist/modal/modalpickernewrecipientview?recipientType=MAILRECIPIENT&_viewAs=view_list',
      parseUserCreationRequestBody(email)
    )

    return data.Data.Id.toString()
  }

  async getUserId(email: string, listId: string) {
    const { data } = await httpClient.get<string>(
      `/recipientlist/modal/modalpickerrecipientview?recipientListId=${listId}&recipientType=MAILRECIPIENT&_viewAs=view_list&_search=${email}`
    )
    const userId = parseUserSearchHtmlToUserId(data)

    return userId
  }

  async subscribeEmailToList(email: string, listId: string) {
    const userId = (await this.getUserId(email, listId)) || (await this.createUser(email))

    await httpClient.post(
      `/mailrecipientlist/action/saverecipientstolist?recipientListId=${listId}`,
      parseSubscriptionRequestBody(userId)
    )
  }
}

export default BizWizService
