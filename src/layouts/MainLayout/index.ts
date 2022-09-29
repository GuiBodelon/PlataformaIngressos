import { defineComponent, ref } from 'vue';
import PageHeader from 'src/components/shared/PageHeader.vue';
import PageFooter from 'src/components/shared/PageFooter/index.vue';

export default defineComponent({
  name: 'MainLayout',

  components: { PageHeader, PageFooter },

  setup() {
    const selectedCity = ref({});
    function switchCity(currentCity: object) {
      selectedCity.value = currentCity;
    }

    return {
      switchCity,
      selectedCity,
    };
  },
});
