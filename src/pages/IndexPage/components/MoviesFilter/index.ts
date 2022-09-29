import { useAppStore } from 'src/stores/app';
import { computed, defineComponent, ref } from 'vue';
import { i18n } from 'boot/i18n';

export default defineComponent({
  name: 'MoviesFilter',

  emits: [
    'onSwitchTabPanel',
    'onSwitchCity',
    'onFilterMovieBasedOnGenre',
    'onFilterMovieBasedOnTitle',
  ],

  props: ['selectedCity'],

  setup(props, { emit }) {
    const appStore = useAppStore();
    const t = i18n.global.t.bind(i18n);

    const currentCity = ref({
      value: 'SAOPAULO',
      label: 'São Paulo',
      description: 'São Paulo',
    });
    const currentState = ref({
      value: 'SP',
      label: 'SP',
      description: 'SP',
    });

    const selectedSchedule = ref('inTheaters');
    const optionsSchedules = ref([
      {
        label: t('pages.homePage.components.movieFilter.eventTabs.inTheaters'),
        value: 'inTheaters',
      },
      {
        label: t('pages.homePage.components.movieFilter.eventTabs.comingSoon'),
        value: 'comingSoon',
      },
    ]);

    const switchTabPanel = (selectedSchedule: string) => {
      emit('onSwitchTabPanel', selectedSchedule);
    };

    const currentCategory = ref('');
    const currentSearchedTitle = ref('');
    function filterMovieBasedOnGenre(category: string) {
      currentCategory.value = category
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      emit('onFilterMovieBasedOnGenre', currentCategory.value);
    }
    function filterMovieBasedOnTitle(searchTitle: string) {
      currentSearchedTitle.value = searchTitle
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      emit('onFilterMovieBasedOnTitle', currentSearchedTitle.value);
    }

    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      currentCity,
      currentState,
      selectedSchedule,
      optionsSchedules,
      debut: ref('Todos'),
      optionsDebut: ['Todos', 'Estreia', 'Pré-Estreia', 'Pré-Venda'],
      category: ref('Todas'),
      optionsCategory: [
        'Todas',
        'Ação',
        'Aventura',
        'Animação',
        'Comédia',
        'Drama',
        'Suspense',
        'Terror',
      ],
      searchTitle: ref(''),
      switchTabPanel,
      filterMovieBasedOnGenre,
      filterMovieBasedOnTitle,
      currentCategory,
      currentSearchedTitle,
    };
  },
});
