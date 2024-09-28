export const environment = {
  production: false,

  //Authenticaiton Endpoints
  apiUrl: 'http://decisionsupportdrupal.local/oauth/token',
  csrfTokenUrl: 'http://decisionsupportdrupal.local/session/token',

  //Process Endpoints
  getProcessURL: 'http://decisionsupportdrupal.local/rest/process/get/',
  getProcessListURL: 'http://decisionsupportdrupal.local/rest/process/list',
  postProcessURL: 'http://decisionsupportdrupal.local/rest/process/post',
  duplicateProcessURL:  'https://decisionsupportdrupal/rest/process/duplicate',
  patchProcessURL: 'http://decisionsupportdrupal.local/rest/process/patch/',
  updateProcessURL:'http://decisionsupportdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://decisionsupportdrupal.local/rest/process/delete/',

  //Investigation Endpoints
  getInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/get/',
  getInvestigationListURL: 'http://decisionsupportdrupal.local/rest/investigation/list',
  postInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/post',
  patchInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/update/',
  archiveInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/delete/{investigationId}',

  //Document Upload Endpoints
  fileUploadURL: 'http://decisionsupportdrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/post',
  getInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/get/',
  archiveInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/delete/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};