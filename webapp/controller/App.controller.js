sap.ui.define(    [
      "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel",
      "invoicesv2/invoicesv2/util/Constants"    
    ],
    function(BaseController, JSONModel, Constants) {
      "use strict";
  
      return BaseController.extend("invoicesv2.invoicesv2.controller.App", {
        onInit() {
         
          //Crear modelo para almacenar layout de FlexBox Column
          let oViewModel = new JSONModel({
            layout: Constants.layouts.oneColumn 
          });

          this.getOwnerComponent().setModel(oViewModel, Constants.models.appView);        

          //Obtener datos de la API
          const url = sap.ui.require.toUrl(Constants.namespace.name) + Constants.service.northwindUrl;
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: false
                })

                this._model.read(Constants.properties.invoices, {
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })                
        },
        success: function (oData) {
          const oModel = new JSONModel(oData.results);                        
          
          //almacenar los datos de manera global
          this.getOwnerComponent().setModel(oModel, Constants.models.invoiceModel); 
      },
      error: function () {
          //En lugar de un alert, debe ir un Message toast conteniendo el mensaje
          alert("Error");
      },
      });
    }
  );
  