export const environment = {
  production: false,

  //Authentication Endpoints
  apiUrl: 'http://decisiondrupal.local/oauth/token',
  csrfTokenUrl: 'http://decisiondrupal.local/session/token',

  //Process Endpoints
  getProcessURL: 'http://decisiondrupal.local/rest/process/get/',
  getProcessListURL: 'http://decisiondrupal.local/rest/process/list',
  postProcessURL: 'http://decisiondrupal.local/rest/process/post',
  duplicateProcessURL: 'http://decisiondrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://decisiondrupal.local/rest/process/patch/',
  updateProcessURL:'http://decisiondrupal.local/rest/process/update/',
  archiveProcessURL: 'http://decisiondrupal.local/rest/process/delete/',

  //Investigation Endpoints
  getInvestigationURL: 'http://decisiondrupal.local/rest/decision_support/get/',
  getInvestigationListURL: 'http://decisiondrupal.local/rest/decision_support/list',
  postInvestigationURL: 'http://decisiondrupal.local/rest/decision_support/post',
  patchInvestigationURL: 'http://decisiondrupal.local/rest/decision_support/update/',
  archiveInvestigationURL: 'http://decisiondrupal.local/rest/decision_support/delete/',
  getDecisionSupportReportListURL: 'http://decisiondrupal.local/rest/decision_support/list',
  getDecisionSupportReportURL: 'http://decisiondrupal.local/rest/decision_support/get/',

  //Document Upload Endpoints
  fileUploadURL: 'http://decisiondrupal.local/file/upload/investigation_documents/_/file',
  postInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/decision_support/document/post',
  getInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/decision_support/document/get/',
  archiveInvestigationDocumentsURL: 'http://decisiondrupal.local/rest/decision_support/document/delete/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};
