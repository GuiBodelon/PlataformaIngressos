import { defineComponent, ref, computed } from 'vue';
import {
  imatPlayCircleOutline24px,
  imatPlace24px,
  imatStore24px,
  imatPaid24px,
  imatInfo24px,
} from 'quasar-extras-svg-icons/icons-material';
import { useAppStore } from 'src/stores/app';

export default defineComponent({
  name: 'MoviePegi',

  props: {
    places: {
      type: Array,
    },
    locations: {
      type: Array,
    },
  },

  setup() {
    const appStore = useAppStore();
    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      groupLang: ref(null),
      optionsLangs: [
        { label: 'Dublado', value: 'dub' },
        { label: 'Legendado', value: 'leg' },
      ],
      groupChair: ref(null),
      optionsChairs: [
        { label: 'Poltrona Numerada', value: 'numbered' },
        {
          label: 'Sem Poltrona Numerada',
          value: 'notNumbered',
        },
      ],
      imatPlayCircleOutline24px,
      imatPlace24px,
      imatStore24px,
      imatPaid24px,
      imatInfo24px,
    };
  },
});
