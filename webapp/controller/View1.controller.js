sap.ui.define([

    "sap/ui/core/mvc/Controller",

    "sap/m/MessageToast",

    "sap/m/MessagePopover"



],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */

    function (Controller, MessageToast) {

        "use strict";

        return Controller.extend("project1.controller.View1", {

            onInit: function () {

                   
                sap.m.MessageToast.show("orcesepoate")

            },

            alertCeva:function(oEvent){
              
             

            // var unText= this.byId("text1").getText();
            //    alert(unText)

               var parsed = parseInt(this.byId("text1").getText());

               var counted = parsed+1;

               this.byId("text1").setText(counted)
               
                // this.byId("text1").setText(oEvent.getSource().getText());
             
                // var textNou = this.byId("ipt1").getValue();
            
                // this.byId("text1").setText(textNou);
                
            },
            pressedTile:function(){
                MessageToast.show("m-a apasat")
            }
            

        });



    });



