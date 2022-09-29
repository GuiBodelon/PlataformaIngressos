module.exports = function() {
  return {
    MOVIMENTOS: [
      {
        IDMOVIME: "MOV1",
        DATA: "2020-01-01",
        ENTREGA_POSSIVEL: true,
        ENTREGA_POSSIVEL_MSG:
          "" /* Se NAO POSSIVEL uma mensagem estará aqui  */,
        ITENS: [
          {
            ID: "ITE1",
            CODBARRA: "CODBAR1",
            CODPRODUTO: "COMBO1",
            DESCRICAO: "Combo 1",
            QTD: 1,
            TEM_OPCIONAIS: true,
            ENTREGA_STATUS: "",
            ENTREGA_STATUS_MOM: null
          },
          {
            ID: "ITE2",
            CODBARRA: "CODBAR2",
            CODPRODUTO: "COMBO1",
            DESCRICAO: "Combo 1",
            QTD: 1,
            TEM_OPCIONAIS: true
          },
          {
            ID: "ITE3",
            CODBARRA: "CODBAR3",
            CODPRODUTO: "COMBO1",
            DESCRICAO: "Combo 1",
            QTD: 1,
            TEM_OPCIONAIS: true
          },
          {
            ID: "ITE4",
            CODBARRA: "CODBAR4",
            CODPRODUTO: "PIPOCA_MED",
            DESCRICAO: "Pipoca média",
            QTD: 1,
            TEM_OPCIONAIS: false
          },
          {
            ID: "ITE5",
            CODBARRA: "CODBAR5",
            CODPRODUTO: "PIPOCA_MED",
            DESCRICAO: "Pipoca média",
            QTD: 1,
            TEM_OPCIONAIS: false
          }
        ]
      }
    ],
    PRODUTOS: [
      {
        CODPRODUTO: "COMBO1",
        DESCRICAO: "Combo 1",
        OPCIONAIS: [
          {
            TIPO: "REFRIGERANTE",
            TIPO_DESCR: "Refrigerante",
            PRODUTOS: [
              {
                CODPRODUTO: "COCA_PEQ",
                DESCRICAO: "Coca Cola 300ml",
                TEM_OPCIONAIS: false
              },
              {
                CODPRODUTO: "GUARANA_PEQ",
                DESCRICAO: "Guaraná 300ml",
                TEM_OPCIONAIS: false
              }
            ]
          },
          {
            TIPO: "PIPOCA_PEQ",
            TIPO_DESCR: "Pipoca Pequena",
            PRODUTOS: [
              {
                CODPRODUTO: "PIPOCA_PEQ",
                DESCRICAO: "Pipoca Pequena",
                TEM_OPCIONAIS: false
              }
            ]
          }
        ],
        VARIACOES: []
      },
      {
        CODPRODUTO: "COCA_PEQ",
        DESCRICAO: "Coca Cola 300ml",
        OPCIONAIS: [],
        VARIACOES: [
          {
            TIPO_VARIACAO: "GELO",
            OBRIGATORIO: false,
            VALOR_PADRAO: "Com"
          }
        ]
      },
      {
        CODPRODUTO: "GUARANA_PEQ",
        DESCRICAO: "Guaraná 300ml",
        OPCIONAIS: [],
        VARIACOES: [
          {
            TIPO_VARIACAO: "GELO",
            OBRIGATORIO: true,
            VALOR_PADRAO: "Com"
          }
        ]
      },
      {
        CODPRODUTO: "PIPOCA_PEQ",
        DESCRICAO: "Pipoca Pequena",
        OPCIONAIS: [],
        VARIACOES: [
          {
            TIPO_VARIACAO: "SAL",
            OBRIGATORIO: true,
            VALOR_PADRAO: "Com"
          },
          {
            TIPO_VARIACAO: "MANTEIGA",
            OBRIGATORIO: true,
            VALOR_PADRAO: "Sem"
          }
        ]
      },
      {
        CODPRODUTO: "PIPOCA_MED",
        DESCRICAO: "Pipoca Média",
        OPCIONAIS: [],
        VARIACOES: [
          {
            TIPO_VARIACAO: "SAL",
            OBRIGATORIO: true,
            VALOR_PADRAO: "Com"
          },
          {
            TIPO_VARIACAO: "MANTEIGA",
            OBRIGATORIO: true,
            VALOR_PADRAO: "Sem"
          }
        ]
      }
    ],
    VARIACOES: [
      {
        TIPO_VARIACAO: "GELO",
        DESCRICAO: "Gelo",
        TIPO_DADO: "C",
        VALORES: ["Com", "Sem"]
      },
      {
        TIPO_VARIACAO: "MANTEIGA",
        DESCRICAO: "Manteiga",
        TIPO_DADO: "C",
        VALORES: ["Sem", "Com pouco", "Com muito"]
      },
      {
        TIPO_VARIACAO: "SAL",
        DESCRICAO: "Sal",
        TIPO_DADO: "C",
        VALORES: ["Com", "Sem"]
      }
    ]
  };
};
