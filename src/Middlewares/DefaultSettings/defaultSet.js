function buildDefaultSet(allKeys) { 
   return {
    // DOCUMENTS API
    DOCUMENT: { 
        DOCUMENT_TYPE_URL: {
            documentTypeId: 0,
            documentType: ""
        },
        DOCUMENT_UPLOAD_URL: {
            filePath: "",
            serviceOrderId: 0,
            supplierId: 0,
            companyId: 0,
            scenarioId: 0
        },
        DOCUMENT_LIST_URL: {
            date: "",
            serviceOrderId: "0",				
            documentId: "0",					
            supplierId: "0",
            companyId: "0"					
        },
        DOWNLOAD_DOCUMENT_URL: {}
    },
    // SUPPLIERS API
    SUPPLIERS: { 
        SUPPLIERS_EXPENSES_DETAIL_CONSULT_URL: 
        {
            projectFolioId: 0,
            projectNameId: 0,
            ceco: "0",
            expenseStatusId: 0,
            responsible: "0",
            executive: "",
            projectName: "",
            projectFolio: "",
            year: 0,
            paid: "0",
            purchases: "" ,
            businessPayments: "" ,
            projectStatusId: "0",
            client: "0",
            clientTypeId: "0",
            businessId: 0,
            societyId: "0"
        },
        SUPPLIERS_EXPENSES_CONSULT_URL: 
        {
            projectFolioId: 0,
            projectNameId: 0 ,
            ceco: "0",
            expenseStatusId: 0,
            responsible: "0",
            executive: "",
            projectName: "",
            projectFolio: "",
            year: 0 ,
            paid: "0" ,
            purchases: "",
            businessPayments: "",
            projectStatusId: "0",
            businessId: 0,
            societyId: "0"
        }
    },
    // REQUOTE API
    REQUOTE: { 
        REQUOTE_PROCESS_URL: {},
        REQUOTE_DELETE_URL: {},
        REQUOTE_PUT_URL: {}
    },
    //CLIENTS API
    CLIENTS: {
        CLIENTS_ASSOCIATED_ACCOUNT_URL: {},
        CLIENTS_GET_CLIENT_ADMINISTRATION_URL: {},       
        CLIENTS_POST_CLIENT_ADMINISTRATION_URL: 
        {
            apiUser: allKeys.API_USER_CLIENTS,
            password: allKeys.PASSWORD_CLIENTS,
        },      
        CLIENTS_PUT_CLIENT_ADMINISTRATION_URL: {},     
        CLIENTS_PENDING_URL: 
        {
            apiUser: allKeys.API_USER_CLIENTS,
            password: allKeys.PASSWORD_CLIENTS
        },
        CLIENTS_ADMINISTRATION_URL: 
        {
            apiUser: allKeys.API_USER_CLIENTS,
            password: allKeys.PASSWORD_CLIENTS
        },
        CLIENTS_COUNTRY_URL: {},
        CLIENTS_IDENTIFICATION_URL: {},
        CLIENTS_REPLICATE_URL: {},
        CLIENTS_SOCIETY_URL: {},
        CLIENTS_STATE_URL: {},             
        CLIENTS_TAX_IDENTIFIERS_URL: {},
        CLIENTS_TREATMENT_URL: {}   
    }
   }
}

module.exports = { buildDefaultSet };