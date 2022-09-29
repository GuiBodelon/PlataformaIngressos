import { defineComponent, ref } from 'vue';
import MovieCarousel from './components/MovieCarousel/index.vue';
import MovieSchedule from './components/MovieSchedule/index.vue';
import MoviesFilter from './components/MoviesFilter/index.vue';
import { useMoviesStore } from './store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'IndexPage',

  props: {
    currentCity: {
      type: Object,
      default: function () {
        return {
          value: 'SAOPAULO',
          label: 'São Paulo',
          description: 'São Paulo',
        };
      },
    },
  },

  components: {
    MovieCarousel,
    MovieSchedule,
    MoviesFilter,
  },

  async mounted() {
    this.fetchData();
  },

  watch: {
    currentCity: function () {
      this.fetchData();
    },
  },

  methods: {
    async fetchData() {
      let cityValue = {};
      if (this.currentCity.value === undefined) {
        cityValue = 'SAOPAULO';
      } else {
        cityValue = this.currentCity.value;
      }
      await this.store.fetchMoviesFiltered(cityValue);
    },
  },

  setup() {
    const store = useMoviesStore();
    const { currentEvents, filteredCurrentEvents, loading } =
      storeToRefs(store);

    const selectedTabSchedule = ref('inTheaters');
    function switchTabPanel(selectedSchedule: string) {
      selectedTabSchedule.value = selectedSchedule;
    }

    function filterMovieBasedOnGenre(currentCategory: string) {
      if (currentCategory == 'todas') {
        filteredCurrentEvents.value = currentEvents.value;
      } else {
        filteredCurrentEvents.value = currentEvents.value.filter((el) => {
          return (
            el.genre
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') == currentCategory
          );
        });
      }
    }

    function filterMovieBasedOnTitle(currentSearchedTitle: string) {
      if (!currentSearchedTitle) {
        filteredCurrentEvents.value = currentEvents.value;
      } else {
        filteredCurrentEvents.value = currentEvents.value.filter((el) => {
          return el.name
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(currentSearchedTitle);
        });
      }
    }

    return {
      currentEvents,
      filteredCurrentEvents,
      loading,
      selectedTabSchedule,
      switchTabPanel,
      filterMovieBasedOnGenre,
      filterMovieBasedOnTitle,
      store,
    };
  },
});
