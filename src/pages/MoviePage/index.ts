import { useRouter } from 'vue-router';
import { computed, defineComponent, ref } from 'vue';
import { useSingleMovieStore } from './store';
import { storeToRefs } from 'pinia';
import MoviePegi from './components/MoviePegi/index.vue';
import { useAppStore } from 'src/stores/app';
import { imatCalendarMonth24px } from 'quasar-extras-svg-icons/icons-material';

export default defineComponent({
  name: 'IndexPage',

  components: {
    MoviePegi,
  },

  async mounted() {
    this.movieStore.fetchMovieData();
    this.movieStore.fetchEventDates();
    this.movieStore.fetchPlaces();
  },

  created() {
    this.$watch(
      () => this.$route.params,
      (
        toParams: { eventDate: string },
        previousParams: { eventDate: string }
      ) => {
        if (
          toParams.eventDate &&
          toParams.eventDate !== previousParams.eventDate
        ) {
          this.movieStore.fetchPlaces();
        }
      }
    );
  },

  setup() {
    const $router = useRouter();
    const movieStore = useSingleMovieStore();
    const appStore = useAppStore();
    const {
      tab,
      currentMovie,
      loading,
      loadingCinemas,
      eventInfo,
      eventDates,
      eventPlaces,
      filteredEventPlaces,
      eventLocations,
      optionsAvailablePlaces,
    } = storeToRefs(movieStore);
    const movieRating = ref(3);
    const availablePlaces = ref(null);

    function filterPlaces(availablePlaces: {
      value: string;
      description: string;
    }) {
      if (availablePlaces) {
        if (availablePlaces.value == 'todos') {
          filteredEventPlaces.value = eventPlaces.value;
        } else {
          filteredEventPlaces.value = eventPlaces.value.filter(
            (item: { normalizedName: string }) => {
              return item.normalizedName == availablePlaces.description;
            }
          );
        }
      }
    }

    function applyFilterToRoute(
      normalizedName: string,
      movieIdentifier: string,
      tab: string,
      availablePlaces: { description: string; value: string }
    ) {
      if (availablePlaces === null) {
        $router.push(
          `/Portal/Ingresso/Sao-Paulo/${normalizedName}/${movieIdentifier}/${tab}/`
        );
      } else {
        $router.push(
          `/Portal/Ingresso/Sao-Paulo/${normalizedName}/${movieIdentifier}/${tab}/${availablePlaces.description}/${availablePlaces.value}`
        );
      }
    }

    return {
      movieStore,
      availablePlaces,
      optionsAvailablePlaces,
      tab,
      isDarkActive: computed(() => appStore.isDarkActive),
      currentMovie,
      eventDates,
      loading,
      loadingCinemas,
      movieRating,
      eventInfo,
      eventPlaces,
      filteredEventPlaces,
      eventLocations,
      imatCalendarMonth24px,
      applyFilterToRoute,
      filterPlaces,
    };
  },
});
