<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    navigation
    infinite
    navigation-icon="radio_button_unchecked"
    control-color="primary"
    arrows
    :autoplay="autoplay"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    class="movieCarousel"
  >
    <q-carousel-slide
      :name="1"
      img-src="https://img.veloxtickets.com/content/titulos/carrossel/propag_dragon-ball-super-super-herois-estreia_191_carrossel.jpg?22082604"
    >
    </q-carousel-slide>
    <q-carousel-slide
      :name="2"
      img-src="https://img.veloxtickets.com/content/titulos/carrossel/propag_a-fera_189_carrossel.jpg?22085049"
    >
    </q-carousel-slide>
    <q-carousel-slide
      :name="3"
      img-src="https://img.veloxtickets.com/content/titulos/carrossel/propag_trem-bala_187_carrossel.jpg?22084851"
    >
    </q-carousel-slide>
    <q-carousel-slide
      :name="4"
      img-src="https://img.veloxtickets.com/content/titulos/carrossel/propag_minions-estreia_175_carrossel.jpg?22085332"
    >
    </q-carousel-slide>
    <q-carousel-slide
      :name="5"
      img-src="https://img.veloxtickets.com/content/titulos/carrossel/propag_thor-amor-e-trovao_177_carrossel.jpg?22085042"
    >
    </q-carousel-slide>
  </q-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MovieCarousel',

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />
