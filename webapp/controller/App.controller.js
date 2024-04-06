sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("z10.fundamentos.controller.App", {
        onInit: function() {

          //declara um modelo JSON
          let oModeloEstados = new JSONModel();

          //declara um objeto com uma propriedade do tipo array e varios objetos dentro do array sendo uma colecao
            let oEstados = {
              valores: [
                {
                  nome: "Sao Paulo",
                  abrev: "SP",
                  pais: "BR"
                },
                {
                  nome: "Para",
                  abrev: "PA",
                  pais: "BR"
                },
                {
                  nome: "Parana",
                  abrev: "PR",
                  pais: "BR"
                },
                {
                  nome: "Rio de Janeiro",
                  abrev: "RJ",
                  pais: "BR"
                }
              ]
            };

            //configura a raiz do modelo "/" com o objeto oEstados, como sendo o conteudo do modelo
            oModeloEstados.setProperty("/", oEstados);

            //associa o modelo Estados ao Component.js, pra ficar disponivel para as views
            this.getOwnerComponent().setModel(oModeloEstados, 'estados');

        }
      });
    }
  );
  