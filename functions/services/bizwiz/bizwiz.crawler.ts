import puppeteer from 'puppeteer'

async function crawlForCookie(email: string, password: string) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://app.bwz.se/arkitektkopia/login')
  await page.type('#LoginEmail', email)
  await page.type('#Password', password)
  await page.click('button[type=submit]')
  await page.waitForNavigation()
  const cookies = await page.cookies()
  const setCookie = cookies.reduce((acc, curr) => `${acc}${curr.name}=${curr.value};`, '')

  return setCookie
}

export { crawlForCookie }
