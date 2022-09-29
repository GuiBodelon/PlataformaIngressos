import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';
import Event from 'src/interfaces/IEvent';

export const useMoviesStore = defineStore('useMoviesStore', {
  state: () => ({
    currentEvents: <Event[]>[],
    filteredCurrentEvents: <Event[]>[],
    loading: false,
  }),
  getters: {
    allFilteredMovies: (state) => {
      return state.filteredCurrentEvents;
    },
  },
  actions: {
    async fetchMoviesFiltered(cityValue: object) {
      this.loading = true;
      api
        .post('graphql', {
          query:
            `query fetchData {
                comingSoonMovies {
                  name,
                  normalizedName,
                  identifier
                }
                scheduledMovies( cityIdentifier: "` +
            cityValue +
            `")
                {
                  identifier,
                  name,
                  normalizedName,
                  description,
                  duration,
                  genre,
                  image{
                    contentUrl
                  },
                  typicalAgeRange,
                }
              }`,
        })
        .then((response) => {
          this.currentEvents = response.data.data['scheduledMovies'];
          this.filteredCurrentEvents = response.data.data['scheduledMovies'];
          this.loading = false;
        })
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
          this.loading = false;
        });
    },
  },
});
