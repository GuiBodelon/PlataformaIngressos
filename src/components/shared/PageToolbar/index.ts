import { useRouter } from 'vue-router';
import { computed, defineComponent, onMounted, ref } from 'vue';
import Cities from 'src/interfaces/ICities';
import States from 'src/interfaces/IStates';
import OptionsSelect from 'src/interfaces/IOptionsSelect';
import { Notify, useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import {
  imatAccountCircle24px,
  imatLocalActivityRounded24px,
  imatDarkMode24px,
  imatLightMode24px,
  imatPlace24px,
} from 'quasar-extras-svg-icons/icons-material';
import { useAppStore } from 'src/stores/app';
export default defineComponent({
  name: 'PageToolbar',

  emits: ['onSwitchCity'],

  mounted() {
    this.isDarkModeActive = this.appStore.dark;
    this.setDarkMode(this.appStore.dark);
  },

  setup(props, { emit }) {
    const appStore = useAppStore();
    const $q = useQuasar();
    const $router = useRouter();
    const isDarkModeActive = ref(false);
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
    const cities = ref<Cities[]>([]);
    const states = ref<States[]>([]);
    const optionsStates = ref<OptionsSelect[]>([]);
    const optionsCities = ref<OptionsSelect[]>([]);
    function setDarkMode(val: boolean) {
      $q.dark.set(val);
      appStore.setDarkMode(val);
    }

    function goToIndex() {
      $router.push('/Portal/Ingresso/Cinema/Sao-Paulo');
    }

    onMounted(() => {
      api
        .post('graphql', {
          query: `query fetchData{
            states {
              identifier,
              name,
              containsPlace {
                identifier
                name
              }
            }
            cities {
              identifier,
              name
            }
          }`,
        })
        .then((response) => {
          optionsStates.value = response.data.data['states'].map(
            (item: States) => {
              return {
                value: item.identifier,
                label: item.identifier,
                description: item.identifier,
              };
            }
          );
          optionsCities.value = response.data.data['cities'].map(
            (item: Cities) => {
              return {
                value: item.identifier,
                label: item.name,
                description: item.name,
              };
            }
          );
        })
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
        });
    });

    function loadCitiesFilter(currentState: OptionsSelect) {
      currentCity.value = {
        value: '',
        label: '',
        description: '',
      };
      api
        .post('graphql', {
          query:
            `query fetchData{
              states (stateIdentifier: "` +
            currentState.value +
            `"){
                containsPlace {
                  identifier
                  name
                }
              }
            }`,
        })
        .then((response) => {
          optionsCities.value = response.data.data[
            'states'
          ][0].containsPlace.map((item: States) => {
            return {
              value: item.identifier,
              label: item.name,
              description: item.name,
            };
          });
        })
        .catch((err) => {
          Notify.create({
            color: 'negative',
            message: 'Loading failed - ' + err,
            icon: 'report_problem',
          });
        });
    }

    const currentSelectedCity = ref('SP - São Paulo');
    const switchCity = (
      currentCity: OptionsSelect,
      currentState: OptionsSelect
    ) => {
      emit('onSwitchCity', currentCity);
      return (currentSelectedCity.value =
        currentState.label + ' - ' + currentCity.label);
    };

    return {
      appStore,
      isDarkActive: computed(() => appStore.isDarkActive),
      imatAccountCircle24px,
      imatLocalActivityRounded24px,
      imatDarkMode24px,
      imatLightMode24px,
      imatPlace24px,
      goToIndex,
      isDarkModeActive,
      setDarkMode,
      currentCity,
      currentState,
      cities,
      states,
      optionsStates,
      optionsCities,
      loadCitiesFilter,
      switchCity,
      currentSelectedCity,
      rules: [
        (val: unknown) => val !== null || 'Por favor selecione uma cidade.',
      ],
    };
  },
});
