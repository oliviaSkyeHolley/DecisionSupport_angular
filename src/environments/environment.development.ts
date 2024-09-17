export const environment = {
    production: false,

    //Authenticaiton Endpoints
    apiUrl: 'http://complaintdrupal.local/oauth/token',
    csrfTokenUrl: 'http://complaintdrupal.local/session/token',

    //Process Endpoints
    getProcessURL: '',
    getProcessListURL: '',
    postProcessURL: '',
    duplicateProcessURL: '',
    patchProcessURL: '',
    archiveProcessURL: '',

    //Investigation Endpoints
    getInvestigationURL: 'http://complaintdrupal.local/rest/investigation/get/',
    getInvestigationListURL: 'http://complaintdrupal.local/rest/investigation/list',
    postInvestigationURL: 'http://complaintdrupal.local/rest/investigation/post',
    patchInvestigationURL: 'http://complaintdrupal.local/rest/investigation/patch/',
    archiveInvestigationURL: 'http://complaintdrupal.local/rest/investigation/archive/',

    //Document Upload Endpoints
    fileUploadURL: 'http://complaintdrupal.local/file/upload/investigation_documents/_/file',
    postInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/post/',
    getInvestigationDocumentsURL: 'http://complaintdrupal.local/rest/investigation/document/get/',
 
    //Client
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret'
  };