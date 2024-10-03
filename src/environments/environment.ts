export const environment = {
  production: false,

  //Authentication Endpoints
  apiUrl: 'http://complaintdrupal.local/oauth/token',
  csrfTokenUrl: 'http://complaintdrupal.local/session/token',

  //Process Endpoints
  getProcessURL: 'http://complaintdrupal.local/rest/process/get/',
  getProcessListURL: 'http://complaintdrupal.local/rest/process/list',
  postProcessURL: 'http://complaintdrupal.local/rest/process/post',
  duplicateProcessURL: 'http://complaintdrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://complaintdrupal.local/rest/process/patch/',
  updateProcessURL:'http://complaintdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://complaintdrupal.local/rest/process/delete/',

  //Investigation Endpoints
  getInvestigationURL: 'http://complaintdrupal.local/rest/support/get/',
  getInvestigationListURL: 'http://complaintdrupal.local/rest/support/list',
  postInvestigationURL: 'http://complaintdrupal.local/rest/support/post',
  patchInvestigationURL: 'http://complaintdrupal.local/rest/support/update/',
  archiveInvestigationURL: 'http://complaintdrupal.local/rest/support/archive/',

  //Document Upload Endpoints
  fileUploadURL: 'http://complaintdrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/post',
  getInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/get/',
  archiveInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/delete/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};