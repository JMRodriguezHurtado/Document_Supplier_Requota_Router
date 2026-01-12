# Document_Reqoute_Supplier_API

 - Document_Reqoute_Supplier_API, este es un router para las APIs: "RE-QUOTA" API, "DOCUMENTS" API, "PAGO PROVEEDORES" API y "CLIENTS (MDG)" API. Routea las requests a la API correspondiente. Este proyecto trabaja utilizando un unico punto de entrada para todas las peticiones, Single Entry Endpoint (S.E.E.) utilizando metodos de Back For Front (B.F.F.), para maximizar los recursos de AWS Lambda.

## Getting Started

 - Una vez clonado el proyecto con "git clone"  un simple "npm i" instalara todas las dependencias necesarias, hay que pedir el archivo .env. 

## Running the tests

 - Para poder probar el proyecto, "npm start" levantara el mismo y permitira que reciba peticiones, recomoiendo POSTMAN para verificar las distintas funcionalidades del proyecto.
## EndPoints incluidos dentro de este proyecto:
- DOCUMENT:     
    - DOCUMENT_TYPE_URL: 'GetDocumentType'
        - Method: POST
    - DOCUMENT_UPLOAD_URL: 'UploadDocument'
        - Method: POST
    - DOCUMENT_LIST_URL: 'GetDocumentsByRole'
        - Method: POST
    - DOCUMENT_DOWNLOAD_URL: 'DownloadDocument'
        - Method: POST

- SUPPLIERS:  
    - SUPPLIERS_EXPENSES_DETAIL_CONSULT_URL: 'GetExpensesDetail'
        - Method: POST
    - SUPPLIERS_EXPENSES_CONSULT_URL: 'GetExpenses'
        - Method: POST
    
- REQUOTE:  
    - REQUOTE_PROCESS_URL: 'AddRequote'
        - Method: POST
    - REQUOTE_DELETE_URL: 'CancelRequote'
        - Method: DELETE
    - REQUOTE_PUT_URL: 'RestartRequote'
        - Method: PUT

- CLIENTS:
    - CLIENTS_ASSOCIATED_ACCOUNT_URL: 'GetAssociatedAccount'
        - Method: GET
    - CLIENTS_GET_CLIENT_ADMINISTRATION_URL: 'GetClient'
        - Method: GET
    - CLIENTS_POST_CLIENT_ADMINISTRATION_URL: 'AddClient'
        - Method: POST
    - CLIENTS_PUT_CLIENT_ADMINISTRATION_URL: 'UpdateClient'
        - Method: PUT
    - CLIENTS_PENDING_URL: 'ProcessClientPending'
        - Method: POST
    - CLIENTS_ADMINISTRATION_URL: 'GetClientConsult'
        - Method: POST
    - CLIENTS_COUNTRY_URL: 'GetCountry'
        - Method: GET
    - CLIENTS_IDENTIFICATION_URL: 'GetIdentificationClass'
        - Method: GET
    - CLIENTS_REPLICATE_URL: 'CopySociety'
        - Method: POST
    - CLIENTS_SOCIETY_URL: 'GetSociety'
        - Method: GET
    - CLIENTS_STATE_URL: 'GetState'
        - Method: GET
    - CLIENTS_TAX_IDENTIFIERS_URL: 'GetTaxIdentifiers'
        - Method: GET
    - CLIENTS_TREATMENT_URL: 'GetTreatment'
        - Method: GET

### Confuraciones del S.E.E.

- La siguiente es un ejemplo de una configuracion global para todos los endpoints incluidos en este proyecto:
    -   
        { 
            "apiData": {

                "ApplicationUser":"Usuario Cifrado",  
                "Ip": "string Ip valido",  
                "BrowserId": Number(1)  
                    },  
            "requests": [
        
            {   
                "keyEndpoint": "DOCUMENT_TYPE_URL",  
                "method": "POST",  
                "payload":  
                    {  
                        "body":  
                           {
                                "option": int (1 (for Projects))
                                "applicationUser": "string (usuario encryptado)",
                                "roleId": "15, 1, 4(string roles (numbers) del usuario separados por comas)"
                            }
                    }
            },  
            {
                "keyEndpoint": "DOCUMENT_UPLOAD_URL",
                "method": "POST",
                "payload":
                    {
                        "body":
                            {
                                "option": int (2 (for Projects) or 1 (for ODC))
                                "applicationUser": "string usuario encryptado",
                                "documentTypeId": int,
                                "file": "string encrypted file",
                                "filePath": "",
                                "fileName": "string nombre del documento",
                                "description": "string",
                                "roleId": "34,12(string roles (numbers) del usuario separados por comas)",
                                "scenarioId": int | 0,
                                "serviceOrderId": int | 0,
                                "SupplierId" = int | 0,
                                "CompanyId" = int | 0
                            }
                    }
            },
            {
                "keyEndpoint": "DOCUMENT_LIST_URL",
                "method": "POST",
                "payload": 
                    {
                     "body": 
                        {
                            "option": int (2 (for Projects) or 9 (for ODC))
                            "roleId": "34,12(string roles (numbers) del usuario separados por comas)",					
                            "applicationUser": "string usuario encryptado",	
                            "scenarioId": "string (number)",
                        }   
                    }
            },
            {
                "keyEndpoint": "DOCUMENT_DOWNLOAD_URL",
                "method": "POST",
                "payload": 
                    {
                        body:
                        {
                            "applicationUser": "string usuario encryptado",  
                            "documentId": int
                        }
                        
                    }
            },
            {
                "keyEndpoint": "SUPPLIERS_EXPENSES_DETAIL_CONSULT_URL",
                "method": "POST",
                "payload": 
                    {
                        "body":
                            {
                                "projectFolioId": 0 (int (filter)),
                                "projectNameId": 0 (int (filter)),
                                "ceco": "0" (string (number) (filter)),
                                "expenseStatusId": 0 (int (filter)),
                                "responsible": "0" (string (number) (filter)),
                                "executive": "" (string (filter)),
                                "projectName": "" (string (filter)),
                                "projectFolio": "" (string (filter)),
                                "year": 0 (int (filter)),
                                "paid": "0" (string (number) (filter)),
                                "purchases": "" (string (filter)),
                                "businessPayments": "" (string (filter)),
                                "applicationUser": "string encrypted user",
                                "projectStatusId": "0" (string (number) (filter)),
                                "client": "0" (string (number) (filter)),
                                "clientTypeId": "0" (string (number) (filter)),
                                "businessId": 0 (int (filter)),
                                "societyId": "0" (string (number) (filter))
                            }
                    }
            },
            {
                "keyEndpoint": "SUPPLIERS_EXPENSES_CONSULT_URL",
                "method": "POST",
                "payload": 
                    {
                     "body":
                        {
                            "projectFolioId": int (filter),
                            "projectNameId": 0 (filter),
                            "ceco": "0" (string (number) (filter)),
                            "expenseStatusId": 0 (int (filter)),
                            "responsible": "0" (string (number) (filter)),
                            "executive": "" (string (filter)),
                            "projectName": ""(string (filter)),
                            "projectFolio": ""(string (filter)),
                            "year": 0 (int (filter)),
                            "paid": "0" (string (number) (filter)),
                            "purchases": "" (string (filter)),
                            "businessPayments": "" (string (filter)),
                            "applicationUser": "string encrypted user",
                            "projectStatusId": "0" (string (number) (filter)),
                            "businessId": 0 (int (filter)),
                            "societyId": "0" (string (number) (filter))
                        }   
                    }
            },
            {
                "keyEndpoint": "REQUOTE_PROCESS_URL",
                "method": "POST",
                "payload": {
                        "params":
                            {
                                "serviceOrderId": int
                                "requoteVersion": int 
                                "scenarioId": int 
                                "categoryId": int 
                                "supplierId": int 
                                "productTypeId": int 
                                "productType": string 
                                "productSubtypeId": int 
                                "productSubtype": string 
                                "productId": int 
                                "product": string 
                                "description": string 
                                "quantity": int 
                                "temporality": int 
                                "experiences": int 
                                "statusId": int 
                                "unitMeasureId": int 
                                "observations": string 
                                "unitPrice": decimal 
                                "total": decimal 
                                "strategicCost": decimal 
                                "currencyTypeId": int 
                                "originalUnitCost": decimal 
                                "unitCost": decimal 
                                "outsourcingCost": decimal 
                                "participation": decimal 
                                "contribution": decimal 
                                "difference": decimal 
                                "sellingPrice": decimal 
                                "purchasePrice": decimal 
                                "nNach": decimal 
                                "gNach": decimal 
                                "salaryCalculatorId": int 
                                "assimilatedSalary": decimal 
                                "grossSalaryWithCommission": decimal
                                "additionalCosts": decimal 
                                "taxBaseNNach": decimal 
                                "administrativeOutsourcingCost": decimal 
                                "applicationUser": string 
                                "response": int 
                            }
                }
            },
            {
                "keyEndpoint": "REQUOTE_DELETE_URL",
                "method": "DELETE",
                "payload":
                    {
                        "params":
                            {
                        
                            }
                    }
            },
            {
                "keyEndpoint": "REQUOTE_PUT_URL",
                "method": "PUT",
                "payload": 
                    {
                        "params":
                            {
                                "idEscenario": int 
                                "versionRecotizacion": int 
                                "usuario": string
                                "response": int 
                            }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_ASSOCIATED_ACCOUNT_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            },
            {
                "keyEndpoint": "CLIENTS_GET_CLIENT_ADMINISTRATION_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            },
            {
                "keyEndpoint": "CLIENTS_POST_CLIENT_ADMINISTRATION_URL",
                "method": "POST",
                "payload": 
                    {
                        "params": 
                           {
                            "applicationUser": "string",
                            "ip": "string",
                            "browserId": 0,
                            "nombreComercial": "string",
                            "nombreContactoComercial": "string",
                            "telefonoContactoComercial": "string",
                            "correoContactoComercial": "string",
                            "nombreContactoAdministrativo": "string",
                            "telefonoContactoAdministrativo": "string",
                            "correoContactoAdministrativo": "string",
                            "diasCredito": 0,
                            "usuarioalta": "string",
                            "fechaAltaReal": "string",
                            "fechaActualizacionReal": "string",
                            "finderFee": true,
                            "request": {
                                "idTipoRol": "string",
                                "idSociedad": "string",
                                "idSociedadModelo": "string",
                                "claveInterlocutorComercial": "string",
                                "claveAgrupacion": "string",
                                "claveTratamiento": "string",
                                "usuario": "string",
                                "tipoOrigen": "string",
                                "alias": "string",
                                "paisOperacion": "string",
                                "nombreOrganizacionPrimario": "string",
                                "nombreOrganizacionSecundario": "string",
                                "nombreOrganizacionTerciario": "string",
                                "correoElectronico": {
                                "empresarial": "string",
                                "personal": "string"
                                },
                                "domicilio": {
                                "clavePais": "string",
                                "claveRegion": "string",
                                "poblacion": "string",
                                "colonia": "string",
                                "codigoPostal": "string",
                                "calle": "string",
                                "numeroExterior": "string",
                                "numeroInterior": "string",
                                "numeroTelefono": "string"
                                },
                                "compras": {
                                "claveOrganizacion": "string",
                                "codigoCondicionPago": "string",
                                "codigoMoneda": "string",
                                "verificacionEntradaMercancia": true
                                },
                                "ventas": {
                                "claveOrganizacion": "string",
                                "codigoCondicionPago": "string",
                                "codigoMoneda": "string",
                                "codigoCanalDistribucion": "string",
                                "codigoSector": "string",
                                "codigoEsquemaCalculo": "string",
                                "codigoCentroSuministrador": "string",
                                "codigoGrupoImputacion": "string"
                                },
                                "sociedad": {
                                "claveBancoPropio": "string",
                                "claveBloqueoPago": "string",
                                "clavePaisRetencion": "string",
                                "codigoCondicionPago": "string",
                                "codigoViaPago": "string",
                                "cuentaContable": "string",
                                "numeroEmpleado": "string",
                                "tipoAsignacionPoliza": "string",
                                "grupoTesoreria": "string",
                                "compensacion": true,
                                "verificacionFacturasDoble": true
                                },
                                "tipoBloqueo": {
                                "central": true,
                                "contabilizacionCentral": true,
                                "comprasCentral": true,
                                "contabilizacionSociedad": true,
                                "organizacionCentral": true
                                },
                                "identificacionesFiscales": [
                                {
                                    "clavePais": "string",
                                    "numero": "string",
                                    "personaFisica": true
                                }
                                ],
                                "cuentasBancarias": [
                                {
                                    "id": "string",
                                    "clavePaisBanco": "string",
                                    "claveBanco": "string",
                                    "claveControl": "string",
                                    "numeroCuenta": "string",
                                    "numeroCuentaExtensa": "string",
                                    "referencia": "string"
                                }
                                ],
                                "regimenesFiscales": [
                                {
                                    "codigo": "string",
                                    "codigoClase": "string",
                                    "institutoResponsable": "string",
                                    "fechaRegistro": "string",
                                    "fechaInicioValidez": "string",
                                    "fechaFinValidez": "string"
                                }
                                ],
                                "retenciones": [
                                {
                                    "idTipo": "string",
                                    "claveIndicador": "string",
                                    "procedeCalculo": true,
                                    "fechaInicio": "string",
                                    "fechaFin": "string"
                                }
                                ],
                                "roles": [
                                {
                                    "clave": "string"
                                }
                                ]
                            }
                            }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_PUT_CLIENT_ADMINISTRATION_URL",
                "method": "PUT",
                "payload": 
                    {
                        "params": 
                        {
                        "apiUser": "string",
                        "applicationUser": "string",
                        "password": "string",
                        "ip": "string",
                        "browserId": 0,
                        "nombreComercial": "string",
                        "nombreContactoComercial": "string",
                        "telefonoContactoComercial": "string",
                        "correoContactoComercial": "string",
                        "nombreContactoAdministrativo": "string",
                        "telefonoContactoAdministrativo": "string",
                        "correoContactoAdministrativo": "string",
                        "diasCredito": 0,
                        "usuarioalta": "string",
                        "fechaAltaReal": "string",
                        "fechaActualizacionReal": "string",
                        "finderFee": true,
                        "request": {
                            "idTipoRol": "string",
                            "idSociedad": "string",
                            "claveDeudor": "string",
                            "claveProveedor": "string",
                            "claveAgrupacion": "string",
                            "claveTratamiento": "string",
                            "usuario": "string",
                            "tipoOrigen": "string",
                            "paisOperacion": "string",
                            "nombreOrganizacionPrimario": "string",
                            "nombreOrganizacionSecundario": "string",
                            "nombreOrganizacionTerciario": "string",
                            "correoElectronico": {
                            "empresarial": "string",
                            "personal": "string"
                            },
                            "domicilio": {
                            "clavePais": "string",
                            "claveRegion": "string",
                            "poblacion": "string",
                            "colonia": "string",
                            "codigoPostal": "string",
                            "calle": "string",
                            "numeroExterior": "string",
                            "numeroInterior": "string",
                            "numeroTelefono": "string"
                            },
                            "compras": {
                            "claveOrganizacion": "string",
                            "codigoCondicionPago": "string",
                            "codigoMoneda": "string",
                            "verificacionEntradaMercancia": true
                            },
                            "ventas": {
                            "claveOrganizacion": "string",
                            "codigoCondicionPago": "string",
                            "codigoMoneda": "string",
                            "codigoCanalDistribucion": "string",
                            "codigoSector": "string",
                            "codigoEsquemaCalculo": "string",
                            "codigoCentroSuministrador": "string",
                            "codigoGrupoImputacion": "string"
                            },
                            "sociedades": [
                            {
                                "idTipoOperacion": "string",
                                "claveBancoPropio": "string",
                                "claveBloqueoPago": "string",
                                "clavePaisRetencion": "string",
                                "codigoCondicionPago": "string",
                                "codigoViaPago": "string",
                                "cuentaContable": "string",
                                "numeroEmpleado": "string",
                                "tipoAsignacionPoliza": "string",
                                "grupoTesoreria": "string",
                                "compensacion": true,
                                "verificacionFacturasDoble": true
                            }
                            ],
                            "tipoBloqueo": {
                            "central": true,
                            "contabilizacionCentral": true,
                            "comprasCentral": true,
                            "contabilizacionSociedad": true,
                            "organizacionCentral": true
                            },
                            "identificacionesFiscales": [
                            {
                                "clavePais": "string",
                                "numero": "string",
                                "personaFisica": true
                            }
                            ],
                            "cuentasBancarias": [
                            {
                                "id": "string",
                                "clavePaisBanco": "string",
                                "claveBanco": "string",
                                "claveControl": "string",
                                "indicador": "string",
                                "numeroCuenta": "string",
                                "numeroCuentaExtensa": "string",
                                "referencia": "string"
                            }
                            ],
                            "regimenesFiscales": [
                            {
                                "codigo": "string",
                                "codigoClase": "string",
                                "institutoResponsable": "string",
                                "fechaRegistro": "string",
                                "fechaInicioValidez": "string",
                                "fechaFinValidez": "string"
                            }
                            ],
                            "retenciones": [
                            {
                                "idTipo": "string",
                                "claveIndicador": "string",
                                "indicador": "string",
                                "procedeCalculo": true,
                                "fechaInicio": "string",
                                "fechaFin": "string"
                            }
                            ],
                            "roles": [
                            {
                                "clave": "string",
                                "indicador": "string"
                            }
                            ]
                        }
                    }

                }
            },
            {
                "keyEndpoint": "CLIENTS_PENDING_URL",
                "method": "POST",
                "payload": 
                    {
                        "params": 
                        {
                        "applicationUser": "string",
                        "ip": "string",
                        "browserId": 0,
                        "usuario": "string"
                        }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_ADMINISTRATION_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": 
                        {
                        "applicationUser": "string",
                        "ip": "string",
                        "browserId": 0,
                        "request": {
                            "idTipoRol": "string",
                            "idSociedad": "string",
                            "claveInterlocutorComercial": "string",
                            "claveOrganizacionCompras": "string",
                            "claveOrganizacionVentas": "string",
                            "numeroIdentificacionFiscal": "string",
                            "nombreOrganizacion": "string",
                            "usuario": "string"
                        }
                    }
                }
            },
            {
                "keyEndpoint": "CLIENTS_COUNTRY_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            }
            {
                "keyEndpoint": "CLIENTS_IDENTIFICATION_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            },
            {
                "keyEndpoint": "CLIENTS_REPLICATE_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": 
                        {
                        "idTipoRol": "string",
                        "idSociedad": "string",
                        "idSociedadModelo": "string",
                        "claveDeudor": "string",
                        "cuentaContable": "string",
                        "usuario": "string",
                        "apiUser": "string",
                        "applicationUser": "string",
                        "password": "string",
                        "ip": "string",
                        "browserId": 0
                        }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_SOCIETY_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            },
            {
                "keyEndpoint": "CLIENTS_STATE_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": 
                            {
                                "countryId": int
                            }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_TAX_IDENTIFIERS_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": 
                            {
                                "clavePais": string
                            }
                    }
            },
            {
                "keyEndpoint": "CLIENTS_TREATMENT_URL",
                "method": "GET",
                "payload": 
                    {
                        "params": {}
                    }
            }
                ]
        }  


### Built With

* [NodeJS](https://nodejs.org/es/) - Dependency Management

## Authors

* **JMRH** - Desarrollador Fullstack
