import { defineComponent, computed } from 'vue';
import { date } from 'quasar';

export default defineComponent({
  name: 'MovieSchedule',

  props: {
    currentEvents: {
      required: true,
      type: Object,
    },
    selectedTabSchedule: {
      required: false,
      type: String,
    },
    loadingMovies: {
      type: Boolean,
    },
  },

  setup(props) {
    const currentTabSchedule = computed(() => {
      return props.selectedTabSchedule;
    });

    const today = date.formatDate(new Date(), 'YYYY-MM-DD');
    return {
      currentTabSchedule,
      today,
    };
  },
});
