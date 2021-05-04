import axios, { AxiosRequestConfig } from 'axios'
import download from 'downloadjs'

const encodeDataToFormData = (data) => {
  const formData = new FormData()
  Object.keys(data).map((key) => {
    if (key === 'files') {
      for (const file of data[key]) {
        formData.append(key, file, file.name)
      }
    } else {
      formData.append(key, data[key])
    }
  })

  return formData
}

export function submitNetlifyFileForm(data: any) {
  const opts: AxiosRequestConfig = {
    url: '/',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: encodeDataToFormData(data),
  }

  return axios(opts)
}

export function submitNetlifyForm(form: HTMLFormElement) {
  const formData = new FormData(form)
  const body = new URLSearchParams(formData as any).toString()

  const opts: AxiosRequestConfig = {
    url: '/',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: body,
  }

  return axios(opts)
}

export function parseContentfulFileUrl(str: string) {
  return 'https:' + str
}

export const disablePageScroll = () => {
  document.querySelector('html').style.overflow = 'hidden'
}

export const enablePageScroll = () => {
  document.querySelector('html').style.overflow = 'auto'
}

export const downloadRemoteFile = (
  url: string,
  mimeType: string,
  fileName?: string
) => {
  return axios
    .get(url, { responseType: 'blob' })
    .then((res) =>
      download(
        new Blob([res.data], { type: mimeType }),
        fileName || url.substr(url.lastIndexOf('/') + 1).replace(/\?.+$/, ''),
        mimeType
      )
    )
    .catch(console.error)
}
