export const environment = {
    production: false,

    //Authenticaiton Endpoints
    apiUrl: 'http://decisiondrupal.local/oauth/token',
    csrfTokenUrl: 'http://decisiondrupal.local/session/token',

    //Process Endpoints
    getProcessURL: 'http://decisiondrupal.local/rest/process/get/',
    getProcessListURL: 'http://decisiondrupal.local/rest/process/list',
    postProcessURL: 'http://decisiondrupal.local/rest/process/post',
    duplicateProcessURL: 'http://decisiondrupal.local/rest/process/duplicate',
    patchProcessURL: 'http://decisiondrupal.local/rest/process/patch/',
    archiveProcessURL: 'http://decisiondrupal.local/rest/process/delete/',
    updateProcessURL: 'http://decisiondrupal.local/rest/process/update/',

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
