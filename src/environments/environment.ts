export const environment = {
  production: false,

  //Authentication Endpoints
  apiUrl: 'http://complaintdrupal.local/oauth/token',
  csrfTokenUrl: 'http://complaintdrupal.local/session/token',
  getUserDataUrl: 'http://complaintdrupal.local/user/1?_format=json',

  //Process Endpoints
  getProcessURL: 'http://drupaldecisionsupport.local/rest/process/get/',
  getProcessListURL: 'http://drupaldecisionsupport.local/rest/process/list',
  postProcessURL: 'http://drupaldecisionsupport.local/rest/process/post',
  duplicateProcessURL: 'http://drupaldecisionsupport.local/rest/process/duplicate',
  patchProcessURL: 'http://drupaldecisionsupport.local/rest/process/patch/',
  updateProcessURL:'http://drupaldecisionsupport.local/rest/process/update/',
  archiveProcessURL: 'http://drupaldecisionsupport.local/rest/process/delete/',

  //Decision Support Endpoints
  getDecisionSupportURL: 'http://drupaldecisionsupport.local/rest/support/get/',
  getDecisionSupportListURL: 'http://drupaldecisionsupport.local/rest/support/list',
  postDecisionSupportURL: 'http://drupaldecisionsupport.local/rest/support/post',
  patchDecisionSupportURL: 'http://drupaldecisionsupport.local/rest/support/update/',
  archiveDecisionSupportURL: 'http://drupaldecisionsupport.local/rest/support/archive/',

  //Document Upload Endpoints
  fileUploadURL: 'http://complaintdrupal.local/file/upload/decision_support_file/_/file',
  postDecisionSupportDocumentsURL: 'http://complaintdrupal.local/rest/support/file/post',
  getDecisionSupportDocumentsURL: 'http://complaintdrupal.local/rest/support/file/get/',
  archiveDecisionSupportDocumentsURL: 'http://complaintdrupal.local/rest/support/file/archive/',

  getDecisionSupportReportURL: 'http://complaintdrupal.local/rest/support/report/',
  getDecisionSupportReportListURL: 'http://complaintdrupal.local/rest/support/report/',

  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};
