import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'MoviePegi',

  props: {
    ageRange: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const pegiColor = ref('');
    const pegiLabel = ref('');

    onMounted(() => {
      if (props.ageRange == '') {
        pegiColor.value = 'green';
        pegiLabel.value = 'L';
      } else if (props.ageRange == '10') {
        pegiColor.value = 'blue';
        pegiLabel.value = '10';
      } else if (props.ageRange == '12') {
        pegiColor.value = 'yellow';
        pegiLabel.value = '12';
      } else if (props.ageRange == '14') {
        pegiColor.value = 'orange';
        pegiLabel.value = '14';
      } else if (props.ageRange == '16') {
        pegiColor.value = 'red';
        pegiLabel.value = '16';
      } else {
        pegiColor.value = 'dark';
        pegiLabel.value = '18';
      }
    });
    return {
      pegiColor,
      pegiLabel,
    };
  },
});
