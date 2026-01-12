const API_ROUTES = {
    // DOCUMENTS API
    DOCUMENT: { 
        DOCUMENT_TYPE_URL: 'GetDocumentType',
        DOCUMENT_UPLOAD_URL: 'UploadDocument',
        DOCUMENT_LIST_URL: 'GetDocumentsByRole',
        DOCUMENT_DOWNLOAD_URL: 'DownloadDocument',
    },
    // SUPPLIERS API
    SUPPLIERS: { 
        SUPPLIERS_EXPENSES_DETAIL_CONSULT_URL: 'GetExpensesDetail',
        SUPPLIERS_EXPENSES_CONSULT_URL: 'GetExpenses',
    },
    // REQUOTE API
    REQUOTE: { 
        REQUOTE_PROCESS_URL: 'AddRequote',          
        REQUOTE_DELETE_URL: 'CancelRequote',        
        REQUOTE_PUT_URL: 'RestartRequote',
    },
    // CLIENTS API
    CLIENTS: {
        CLIENTS_ASSOCIATED_ACCOUNT_URL: 'GetAssociatedAccount',
        CLIENTS_GET_CLIENT_ADMINISTRATION_URL: 'GetClient',
        CLIENTS_POST_CLIENT_ADMINISTRATION_URL: 'AddClient',
        CLIENTS_PUT_CLIENT_ADMINISTRATION_URL: 'UpdateClient',
        CLIENTS_PENDING_URL: 'ProcessClientPending',
        CLIENTS_ADMINISTRATION_URL: 'GetClientConsult',
        CLIENTS_COUNTRY_URL: 'GetCountry',
        CLIENTS_IDENTIFICATION_URL: 'GetIdentificationClass',
        CLIENTS_REPLICATE_URL: 'CopySociety',
        CLIENTS_SOCIETY_URL: 'GetSociety',
        CLIENTS_STATE_URL: 'GetState',
        CLIENTS_TAX_IDENTIFIERS_URL: 'GetTaxIdentifiers',
        CLIENTS_TREATMENT_URL: 'GetTreatment',
        }
};

module.exports = {
   API_ROUTES
};