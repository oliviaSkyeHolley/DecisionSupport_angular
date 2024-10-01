export const environment = {
  production: false,

  //Authenticaiton Endpoints
  apiUrl: 'http://decisionsupportdrupal.local/oauth/token',
  csrfTokenUrl: 'http://decisionsupportdrupal.local/session/token',
  //Authentication Endpoints
  apiUrl: 'http://complaintdrupal.local/oauth/token',
  csrfTokenUrl: 'http://complaintdrupal.local/session/token',

  //Process Endpoints
  getProcessURL: 'http://decisionsupportdrupal.local/rest/process/get/',
  getProcessListURL: 'http://decisionsupportdrupal.local/rest/process/list',
  postProcessURL: 'http://decisionsupportdrupal.local/rest/process/post',
  duplicateProcessURL: 'http://decisionsupportdrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://decisionsupportdrupal.local/rest/process/patch/',
  updateProcessURL:'http://decisionsupportdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://decisionsupportdrupal.local/rest/process/delete/',
  getProcessURL: 'http://complaintdrupal.local/rest/process/get/',
  getProcessListURL: 'http://complaintdrupal.local/rest/process/list',
  postProcessURL: 'http://complaintdrupal.local/rest/process/post',
  duplicateProcessURL: 'http://complaintdrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://complaintdrupal.local/rest/process/patch/',
  updateProcessURL:'http://complaintdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://complaintdrupal.local/rest/process/delete/',

  //Investigation Endpoints
  getInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/get/',
  getInvestigationListURL: 'http://decisionsupportdrupal.local/rest/investigation/list',
  postInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/post',
  patchInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/update/',
  archiveInvestigationURL: 'http://decisionsupportdrupal.local/rest/investigation/delete/{investigationId}',
  getInvestigationURL: 'http://complaintdrupal.local/rest/investigation/get/',
  getInvestigationListURL: 'http://complaintdrupal.local/rest/investigation/list',
  postInvestigationURL: 'http://complaintdrupal.local/rest/investigation/post',
  patchInvestigationURL: 'http://complaintdrupal.local/rest/investigation/update/',
  archiveInvestigationURL: 'http://complaintdrupal.local/rest/investigation/delete/{investigationId}',

  //Document Upload Endpoints
  fileUploadURL: 'http://decisionsupportdrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/post',
  getInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/get/',
  archiveInvestigationDocumentsURL: 'http://decisionsupportdrupal.local/rest/investigation/document/delete/',
  fileUploadURL: 'http://complaintdrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/post',
  getInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/get/',
  archiveInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/delete/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};