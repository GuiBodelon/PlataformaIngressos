<template>
  <q-tab-panels
    v-model="currentTabSchedule"
    animated
    class="bg-transparent tabMovies"
  >
    <q-tab-panel name="inTheaters" class="moviePanel">
      <q-circular-progress
        indeterminate
        size="40px"
        :thickness="0.4"
        font-size="50px"
        color="secondary"
        track-color="grey-3"
        center-color="grey-8"
        class="absolute-center"
        v-if="loadingMovies"
      />
      <q-intersection
        v-for="event in currentEvents"
        :key="event.identifier"
        transition="scale"
        once
      >
        <div
          class="imgHoverZoom overflow-hidden cursor-pointer"
          v-for="image in event.image[0]"
          :key="image.index"
        >
          <q-img
            :src="image"
            loading="lazy"
            spinner-color="white"
            fit="fill"
            class="movieImg"
          >
          </q-img>
          <div class="absolute-bottom text-center q-px-md q-mb-md">
            <q-btn
              :label="$t('pages.homePage.components.movieSchedule.buttons.buy')"
              color="primary"
              class="full-width btnBuy"
              :to="`/Portal/Ingresso/Sao-Paulo/${event.normalizedName}/${event.identifier}/`"
            />
          </div>
        </div>
      </q-intersection>
    </q-tab-panel>

    <q-tab-panel
      name="comingSoon"
      class="row full-width q-pa-xl justify-start q-gutter-md overflow-hidden"
    >
      <div class="text-h4">
        {{ $t('pages.homePage.components.movieSchedule.placeholder') }}
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
