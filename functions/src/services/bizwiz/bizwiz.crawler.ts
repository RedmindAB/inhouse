import chromium from 'chrome-aws-lambda'

async function crawlForCookie(email: string, password: string) {
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  })
  const page = await browser.newPage()
  await page.goto('https://app.bwz.se/arkitektkopia/login')
  await page.type('#LoginEmail', email)
  await page.type('#Password', password)
  await page.click('button[type=submit]')
  await page.waitForNavigation()
  const cookies = await page.cookies()
  const setCookie = cookies.reduce((acc, curr) => `${acc}${curr.name}=${curr.value};`, '')
  await browser.close()

  return setCookie
}

export { crawlForCookie }
