export const environment = {
  production: false,

  //Authenticaiton Endpoints
  apiUrl: 'http://decisionsupportdrupal.local/oauth/token',
  csrfTokenUrl: 'http://decisionsupportdrupal.local/session/token',
  //Authentication Endpoints
  apiUrl: 'http://complaintdrupal.local/oauth/token',
  csrfTokenUrl: 'http://complaintdrupal.local/session/token',

  //Process Endpoints
  updateProcessURL:'http://decisionsupportdrupal.local/rest/process/update/',
  getProcessURL: 'http://complaintdrupal.local/rest/process/get/',
  getProcessListURL: 'http://complaintdrupal.local/rest/process/list',
  postProcessURL: 'http://complaintdrupal.local/rest/process/post',
  duplicateProcessURL: 'http://complaintdrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://complaintdrupal.local/rest/process/patch/',
  updateProcessURL:'http://complaintdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://complaintdrupal.local/rest/process/delete/',

  //Investigation Endpoints
  getInvestigationURL: 'http://decisiondrupal.local/rest/investigation/get/',
  getInvestigationListURL: 'http://decisiondrupal.local/rest/investigation/list',
  postInvestigationURL: 'http://decisiondrupal.local/rest/investigation/post',
  patchInvestigationURL: 'http://decisiondrupal.local/rest/investigation/update/',
  archiveInvestigationURL: 'http://decisiondrupal.local/rest/investigation/delete/{investigationId}',

  //Document Upload Endpoints
  fileUploadURL: 'http://decisiondrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/investigation/document/post',
  getInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/investigation/document/get/',
  archiveInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/investigation/document/delete/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};
