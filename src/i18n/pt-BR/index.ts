// This is just an example,
// so you can safely delete all default props below

export default {
  layouts: {
    toolbar: {
      buttons: {
        darkMode: {
          label: 'Modo Escuro',
          onDark: 'Acender a Luz',
          onLight: 'Apagar a Luz',
        },
        faithfulness: 'Fidelidade',
      },
    },
    secondaryToolbar: {
      labels: {
        ticketsIn: 'Ingressos em',
        cinema: 'Cinema',
        selectCity: 'Escolher cidade',
      },
      buttons: {
        switchCity: 'Trocar Cidade',
      },
      selects: {
        state: 'Estado',
        city: 'Cidade',
      },
    },
  },
  pages: {
    homePage: {
      components: {
        movieFilter: {
          eventTabs: {
            title: 'Programação em',
            inTheaters: 'Em cartaz',
            comingSoon: 'Em breve',
          },
          inputs: {
            debut: 'Estreia',
            category: 'Categoria',
            search: {
              label: 'Pesquise',
              placeholder: 'Pesquise por título ou elenco',
            },
          },
        },
        movieSchedule: {
          placeholder: 'Em breve',
          buttons: {
            buy: 'Comprar',
          },
        },
      },
    },
    moviePage: {
      titles: {
        chooseDate: 'Escolha uma data para assistir este filme',
        availableCinemas: 'Cinemas disponíveis',
      },
      labels: {
        genre: 'Gênero',
        duration: 'Duração',
        synopsis: 'Sinopse',
        pegi: 'Classificação',
      },
      buttons: {
        trailer: 'Trailer',
        comments: 'Comentários',
        back: 'Voltar',
      },
      components: {
        moviePanel: {
          filters: {
            filterSessionsBy: 'Filtrar sessões por',
            infoAboutFilters: {
              label: 'Informações sobre os filtros.',
              title: 'Opções de Filtros',
              dubbed: {
                label: 'Dúblado',
                description: 'áudio do filme dublado na língua portuguesa.',
              },
              subtitled: {
                label: 'Legendado',
                description:
                  'áudio do filme no idioma original, com legendas em português.',
              },
              seatHasNumber: {
                label: 'Poltrona Numerada',
                description:
                  'sala de cinema com lugares marcados, para escolha e reserva prévia.',
              },
              seatHasNoNumber: {
                label: 'Sem Poltrona Numerada',
                description:
                  'sala sem lugares marcados, de modo que serão selecionados ao adentrar na sala de cinema.',
              },
            },
            dubbed: 'Dublado',
            subtitled: 'Legendado',
            seatHasNumber: 'Poltrona Numerada',
            seatHasNoNumber: 'Sem Poltrona Numerada',
          },
          tooltips: {
            onlineProducts: 'Este cinema possuí venda de produtos online',
            timeSessionDollarIcon:
              'Visualizar informações sobre preços e lugares disponíveis',
          },
          cards: {
            location: 'Ver localização',
            room: 'Sala',
            howToWithdrawPurchase: 'Como retirar sua compra:',
          },
        },
      },
    },
  },
  footer: {
    text: 'Velox Tickets LTDA - CNPJ: 44.593.013/0001-97 - R. Damião Pinheiro Machado, 420 - Vila São Lúcio - Térreo - Botucatu-SP - 18600-000',
    copyright: 'Copyright © - VeloxTickets. Todos os direitos reservados',
  },
};
