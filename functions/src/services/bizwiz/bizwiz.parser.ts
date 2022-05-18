import parse from 'node-html-parser'

export function parseUserCreationRequestBody(email: string) {
  const [fName, lName] = email.split('@')

  return {
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[0].Id']: '1',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[0].Name']: 'Email',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[0].Type']: 'EMAIL',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[0].Value']: email,
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[1].Id']: '2',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[1].Name']: 'Firstname',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[1].Type']: 'FIRSTNAME',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[1].Value']: fName,
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[2].Id']: '3',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[2].Name']: 'Lastname',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[2].Type']: 'LASTNAME',
    ['RecipientPropertiesViewModel.RecipientPropertyViewModels[2].Value']: lName,
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[0].Id']: '8',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[0].Name']:
      'Companybuyingstatus',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[0].Type']: 'TEXT',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[0].Value']: '',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[1].Id']: '5',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[1].Name']: 'CompanyName',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[1].Type']: 'TEXT',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[1].Value']: '',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[2].Id']: '6',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[2].Name']: 'CoWorkerEmail',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[2].Type']: 'TEXT',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[2].Value']: '',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[3].Id']: '7',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[3].Name']: 'CoworkerID',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[3].Type']: 'TEXT',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[3].Value']: '',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[4].Id']: '4',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[4].Name']: 'CRMID',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[4].Type']: 'TEXT',
    ['HiddenRecipientPropertiesViewModel.RecipientPropertyViewModels[4].Value']: '',
  }
}

export function parseSubscriptionRequestBody(userId: string) {
  return {
    SelectedItems: [{ Id: +userId, type: '', ExtraData: '' }],
    TreatIdsAsSelected: true,
  }
}

export function parseUserSearchHtmlToUserId(data: string) {
  const root = parse(data)
  const userTr = root.querySelector('tbody.sel-table tr:nth-child(1)')
  const userId = userTr && userTr.attributes && userTr.attributes['data-id']

  return userId
}
