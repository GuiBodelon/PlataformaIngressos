import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { Notify } from 'quasar';
import { useRoute } from 'vue-router';
import Event from 'src/interfaces/IEvent';

export const useSingleMovieStore = defineStore('useSingleMovieStore', {
  state: () => ({
    $route: useRoute(),
    currentMovie: <Event[]>[],
    eventDates: [],
    eventInfo: [],
    eventPlaces: [],
    filteredEventPlaces: [],
    eventLocations: [],
    optionsAvailablePlaces: [
      {
        value: '',
        label: '',
        description: '',
      },
    ],
    tab: [],
    customRequest: '',
    loading: false,
    loadingCinemas: false,
    months: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    dayOfWeek: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  }),
  getters: {
    //
  },
  actions: {
    //Get general Movie data
    async fetchMovieData() {
      this.loading = true;
      await api
        .post('graphql', {
          query:
            `query fetchData{
            movies (movieIdentifier: ` +
            this.$route.params.movieId +
            `){
              identifier,
              name,
              normalizedName,
              description
              genre,
              duration,
              image{
                contentUrl
              },
              typicalAgeRange,
            }
        }`,
        })
        .then((response) => {
          //Get general Movie data
          this.currentMovie = response.data.data.movies;
          //Set loader equal to false after all responses
          this.loading = false;
        })
        //Notify if error
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
        });
    },
    //Get Event Dates
    async fetchEventDates() {
      this.loading = true;
      await api
        .post('graphql', {
          query:
            `query fetchData{
              eventDates (cityIdentifier: "SAOPAULO", movieIdentifier: ` +
            this.$route.params.movieId +
            `)
              }`,
        })
        .then((response) => {
          //Map function to handle the received date and name tabs/labels correctly
          this.eventDates = response.data.data.eventDates.map(
            (item: string) => {
              //Convert the received date into official javascript date
              const eventDate = new Date(item);
              //Raw date to name each tab
              const rawDate = item;
              return {
                //Raw date to name each tab
                rawDate,
                //Formatted date for tab labels
                formattedEventDate:
                  this.dayOfWeek[eventDate.getDay()] +
                  ' ' +
                  [eventDate.getDate() + 1] +
                  ' ' +
                  this.months[eventDate.getMonth()],
              };
            }
          );
          //Get raw first Scheduled Date for the tab model value (available dates)
          this.tab = response.data.data.eventDates[0];
          //Set loader equal to false after all responses
          this.loading = false;
        })
        //Notify if error
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
        });
    },
    //Get Places
    async fetchPlaces() {
      if (this.$route.params.eventDate === undefined) {
        this.customRequest = 'firstScheduledDateOrToday: true';
      } else {
        this.customRequest =
          'fromStartDate: "' +
          this.$route.params.eventDate +
          '", toStartDate: "' +
          this.$route.params.eventDate +
          'T23:59:59"';
      }
      this.loadingCinemas = true;
      await api
        .post('graphql', {
          query:
            `query fetchData{
              events (cityIdentifier: "SAOPAULO", movieIdentifier: ` +
            this.$route.params.movieId +
            ',' +
            this.customRequest +
            `) {
                place {
                  identifier
                  name,
                },
                identifier,
                startDate,
                videoFormat,
                location {
                  identifier,
                  name
                }
                additionalProperty {
                  name,
                  value
                }
              }
          }`,
        })
        .then((response) => {
          //Get array list of available rooms
          this.eventLocations = response.data.data.events;
          //Get array list of available places for the current movie for later request
          this.eventInfo = response.data.data.events.map(
            (item: { place: { identifier: string } }) => {
              const eq = item.place.identifier;
              return {
                identifier: { eq },
              };
            }
          );
          //Set loader equal to false after all responses
          this.loading = false;
          //Remove quotes from array Keys
          const placesArray = JSON.stringify(this.eventInfo)
            .replace(/"(\w+)":/g, '$1:')
            .replace(/"(\d+)"/g, '$1');
          api
            .post('graphql', {
              query:
                `query fetchData{
                places (where: {
                  or: [` +
                placesArray +
                `]
                  }) {
                  identifier,
                  name,
                  normalizedName,
                  containsPlace{
                    identifier,
                    name,
                  }
                }
              }`,
            })
            .then((response) => {
              //Get array list of available cinemas
              this.eventPlaces = response.data.data.places;
              this.filteredEventPlaces = response.data.data.places;
              //Set loader equal to false after all responses
              this.loadingCinemas = false;
              //Populate Q-Select of available Cinemas
              this.optionsAvailablePlaces = response.data.data.places.map(
                (item: {
                  identifier: string;
                  name: string;
                  normalizedName: string;
                }) => {
                  return {
                    value: item.identifier,
                    label: item.name,
                    description: item.normalizedName,
                  };
                }
              );
              this.optionsAvailablePlaces.splice(0, 0, {
                value: 'todos',
                label: 'Todos Cinemas',
                description: 'todos',
              });
            });
        })
        //Notify if error
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
        });
    },
  },
});
