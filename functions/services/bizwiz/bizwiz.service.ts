import axios from 'axios'
import { crawlForCookie } from './bizwiz.crawler'
import {
  parseSubscriptionRequestBody,
  parseUserCreationRequestBody,
  parseUserSearchHtmlToUserId,
} from './bizwiz.parser'

class BizWizService {
  static httpClient = axios.create({ baseURL: process.env.BIZWIZ_API_URL })
  static password = process.env.BIZWIZ_PASSWORD
  static username = process.env.BIZWIZ_USERNAME

  static async authenticate() {
    const cookie = await crawlForCookie(this.username, this.password)
    this.httpClient.defaults.headers.common.Cookie = cookie
  }

  static async createUser(email: string): Promise<string> {
    const { data } = await this.httpClient.post<any>(
      '/recipientlist/modal/modalpickernewrecipientview?recipientType=MAILRECIPIENT&_viewAs=view_list',
      parseUserCreationRequestBody(email)
    )

    return data.Data.Id.toString()
  }

  static async getUserId(email: string, listId: string) {
    const { data } = await this.httpClient.get<string>(
      `/recipientlist/modal/modalpickerrecipientview?recipientListId=${listId}&recipientType=MAILRECIPIENT&_viewAs=view_list&_search=${email}`
    )
    const userId = parseUserSearchHtmlToUserId(data)

    return userId
  }

  static async subscribeEmailToList(email: string, listId: string) {
    const userId = (await this.getUserId(email, listId)) || (await this.createUser(email))

    await this.httpClient.post(
      `/mailrecipientlist/action/saverecipientstolist?recipientListId=${listId}`,
      parseSubscriptionRequestBody(userId)
    )
  }
}

export default BizWizService
