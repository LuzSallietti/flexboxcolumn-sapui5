sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "invoicesv2/invoicesv2/util/Constants",
    "invoicesv2/invoicesv2/util/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    //EL ORDEN DE LOS PARÁMETROS DEBE SER IGUAL AL DE LOS IMPORTS!!!!
    function (Controller,JSONModel, Constants, Formatter) {
        "use strict";

        return Controller.extend("invoicesv2.invoicesv2.controller.Master", {
            Formatter: Formatter,
            onInit: function () {
                console.log("Init desde Master")

            },
            //Evento del onPress de cada item de la tabla
            onItemPress: function (oEvent) {               
              
                // El path - posición del invoice
                const oItem = oEvent.getSource().getBindingContext(Constants.models.invoiceModel);
                const sPath = oItem.getPath();
                console.log(sPath);

                // Obtener los datos del invoice en sPath
                const oInvoiceData = this.getView().getModel(Constants.models.invoiceModel).getProperty(sPath);
                
                var detailModel = new JSONModel(oInvoiceData);
                this.getOwnerComponent().setModel(detailModel, 'detailModel') // Accedo a la app globalmente y seteo el model con el detalle

               
               //Trabajar el FlexboxColumn para que navegue al la vista y columna contenedora Detail

               let oViewModel = new JSONModel({
                layout: "TwoColumnsMidExpanded"
                });

                this.getOwnerComponent().setModel(oViewModel, "appView")
               
                // Navegar a la vista Detalle
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo(Constants.routes.detailRoute);
            
            }
        });
    });
