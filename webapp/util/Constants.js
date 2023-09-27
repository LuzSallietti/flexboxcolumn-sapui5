sap.ui.define([], function (){
    'use strict';
    return {       
        namespace: {
            name: "invoicesv2/invoicesv2"
        },
        service: {
            northwindUrl:"/northwind/northwind.svc" 
        },
        properties: {
           invoices: "/Invoices",           
        },
        models: {
            invoiceModel: "invoiceModel",
            i18n: "i18n",
            detailModel: "detailModel",
            appView: "appView"
            
        },
        layouts: {
            oneColumn: "OneColumn",
            twoColumnsMidExpanded: "TwoColumnsMidExpanded"
        }            
    }
}, true)