export const environment = {
  production: false,

  //Authenticaiton Endpoints
  apiUrl: 'http://decisionsupportdrupal.local/oauth/token',
  csrfTokenUrl: 'http://decisionsupportdrupal.local/session/token',
  getUserDataUrl: 'http://decisionsupportdrupal.local/user/1?_format=json',

  //Process Endpoints
  getProcessURL: 'http://decisionsupportdrupal.local/rest/process/get/',
  getProcessListURL: 'http://decisionsupportdrupal.local/rest/process/list',
  postProcessURL: 'http://decisionsupportdrupal.local/rest/process/post',
  duplicateProcessURL: 'http://decisionsupportdrupal.local/rest/process/duplicate',
  patchProcessURL: 'http://decisionsupportdrupal.local/rest/process/patch/',
  updateProcessURL:'http://decisionsupportdrupal.local/rest/process/update/',
  archiveProcessURL: 'http://decisionsupportdrupal.local/rest/process/delete/',

   //Decision Support Endpoints
   getDecisionSupportURL: 'http://decisionsupportdrupal.local/rest/support/get/',
   getDecisionSupportListURL:  'http://decisionsupportdrupal.local/rest/support/list',
   postDecisionSupportURL: 'http://decisionsupportdrupal.local/rest/support/post',
   patchDecisionSupportURL: 'http://decisionsupportdrupal.local/rest/support/update/',
   archiveDecisionSupportURL: 'http://decisionsupportdrupal.local/rest/support/archive/',

  //Document Upload Endpoints
  fileUploadURL: 'http://decisionsupportdrupal.local/file/upload/decision_support_file/_/file',
  postDecisionSupportDocumentsURL: 'http://decisionsupportdrupal.local/rest/support/file/post',
  getDecisionSupportDocumentsURL: 'http://decisionsupportdrupal.local/rest/support/file/get/',
  archiveDecisionSupportDocumentsURL: 'http://decisionsupportdrupal.local/rest/support/file/delete/',

  getDecisionSupportReportURL: 'http://decisionsupportdrupal.local/rest/support/report/',
  getDecisionSupportReportListURL: 'http://decisionsupportdrupal.local/rest/support/reportlist',
  //Client
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
};
