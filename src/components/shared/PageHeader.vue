<template>
  <q-header class="bg-dark" reveal elevated>
    <PageToolbar @onSwitchCity="switchCity" />
  </q-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageToolbar from './PageToolbar/index.vue';

export default defineComponent({
  name: 'PageHeader',

  emits: ['onSwitchCity'],

  components: {
    PageToolbar,
  },

  setup(props, { emit }) {
    const switchCity = (currentCity: object) => {
      emit('onSwitchCity', currentCity);
    };

    return {
      switchCity,
    };
  },
});
</script>
