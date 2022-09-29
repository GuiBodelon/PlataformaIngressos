module.exports = function() {
  function loadVariationOptions(
    variationOptionsRef,
    deliveryVegasObj,
    CODPRODUTO
  ) {
    var PRODUTO2 = deliveryVegasObj.PRODUTOS.find(obj => {
      return obj.CODPRODUTO === CODPRODUTO;
    });

    if (PRODUTO2) {
      PRODUTO2.VARIACOES.forEach(VARIACAO => {
        VARIACAO_TIPO = deliveryVegasObj.VARIACOES.find(obj => {
          return obj.TIPO_VARIACAO === VARIACAO.TIPO_VARIACAO;
        });

        if (VARIACAO_TIPO) {
          let varOption = {
            varCode: VARIACAO.TIPO_VARIACAO,
            varName: VARIACAO_TIPO.DESCRICAO,
            dataType: VARIACAO_TIPO.TIPO_DADO,
            value: VARIACAO.VALOR_PADRAO,
            possibleValues: []
          };

          VARIACAO_TIPO.VALORES.forEach(VALOR => {
            varOption.possibleValues.push(VALOR);
          });

          variationOptionsRef.push(varOption);
        }
      });
    }
  }

  var deliveryVegas = require("./deliveryvegas.js");

  var deliveryVegasObj = deliveryVegas();

  var result = {
    id: deliveryVegasObj.MOVIMENTOS[0].IDMOVIME,
    date: deliveryVegasObj.MOVIMENTOS[0].DATA,
    items: []
  };

  deliveryVegasObj.MOVIMENTOS[0].ITENS.forEach(ITEM => {
    let item = {
      id: ITEM.ID,
      barCode: ITEM.CODBARRA,
      productCode: ITEM.CODPRODUTO,
      productName: ITEM.DESCRICAO,
      productImage:
        "https://img.veloxtickets.com/content/produtos/combo-cine-inter_11eaed5d2ad6144d8d2d641c6771402f_produtolocal.jpg?20091430",
      typeOptions: [],
      variationOptions: []
    };

    let PRODUTO = deliveryVegasObj.PRODUTOS.find(obj => {
      return obj.CODPRODUTO === item.productCode;
    });

    console.log(PRODUTO);
    if (PRODUTO) {
      PRODUTO.OPCIONAIS.forEach(OPCIONAL => {
        let typeOption = {
          code: OPCIONAL.TIPO,
          name: OPCIONAL.TIPO_DESCR,
          productOptions: []
        };

        OPCIONAL.PRODUTOS.forEach(OPT_PRODUTO => {
          let productOption = {
            productCode: OPT_PRODUTO.CODPRODUTO,
            productName: OPT_PRODUTO.DESCRICAO,
            productImage:
              "https://img.veloxtickets.com/content/produtos/combo-cine-inter_11eaed5d2ad6144d8d2d641c6771402f_produtolocal.jpg?20091430",
            variationOptions: []
          };

          loadVariationOptions(
            productOption.variationOptions,
            deliveryVegasObj,
            productOption.productCode
          );

          typeOption.productOptions.push(productOption);
        });

        item.typeOptions.push(typeOption);
      });
    }

    loadVariationOptions(
      item.variationOptions,
      deliveryVegasObj,
      item.productCode
    );

    result.items.push(item);
  });

  return result;
};
