<template>
  <q-page v-if="loading">
    <q-circular-progress
      indeterminate
      size="40px"
      :thickness="0.4"
      font-size="50px"
      color="secondary"
      track-color="grey-3"
      center-color="grey-8"
      class="absolute-center"
    />
  </q-page>
  <q-page class="moviePage" v-else>
    <div
      class="row justify-center items-start"
      v-for="movie in currentMovie"
      :key="movie.identifier"
    >
      <div class="col-12 text-h4 text-uppercase text-bold movieTitle">
        {{ movie.name }}
        <q-separator spaced />
      </div>
      <div class="movieInfo col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12 row">
        <div class="row q-gutter-y-md">
          <div
            class="col-12"
            v-for="image in movie.image[0]"
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
          </div>
          <div class="col-12 row items-center cursor-pointer">
            <q-rating
              v-model="movieRating"
              size="2em"
              color="primary"
              class="q-mr-sm"
              readonly
            />
            <strong> (194) </strong>
          </div>
          <div class="col-12">
            <strong> {{ $t('pages.moviePage.labels.genre') }}: </strong>
            {{ movie.genre }}
          </div>
          <div class="col-12">
            <strong> {{ $t('pages.moviePage.labels.duration') }}: </strong>
            {{ movie.duration }}
          </div>
          <div class="col-12">
            <div class="text-justify">
              <strong> {{ $t('pages.moviePage.labels.synopsis') }}: </strong>
              {{ movie.description }}
            </div>
          </div>
          <div class="col-12">
            <strong class="q-mr-sm">
              {{ $t('pages.moviePage.labels.pegi') }}:
            </strong>
            <MoviePegi :ageRange="movie.typicalAgeRange"></MoviePegi>
          </div>
          <div class="col-12 row q-gutter-y-md justify-between full-width">
            <q-btn
              color="primary"
              :label="$t('pages.moviePage.buttons.trailer')"
              class="full-width"
              no-caps
            />
            <div class="row items-center full-width">
              <q-btn color="primary" class="full-width" push no-caps>
                {{ $t('pages.moviePage.buttons.comments') }}
                <strong class="q-ml-sm">(60)</strong>
              </q-btn>
            </div>
            <q-btn
              color="primary"
              :label="$t('pages.moviePage.buttons.back')"
              to="/Portal/Ingresso/Cinema/Sao-Paulo"
              outline
              class="full-width"
              @click="availablePlaces = null"
            />
          </div>
        </div>
      </div>
      <div class="col-xl-10 col-lg-8 col-md-8 col-sm-12 col-xs-12 movieDates">
        <div class="row q-gutter-y-lg items-baseline">
          <div class="text-h6 text-bold col-xl-6 col-lg-6 col-sm-12 col-xs-12">
            {{ $t('pages.moviePage.titles.chooseDate') }}
          </div>
          <div
            class="row items-baseline availablePlaces col-xl-6 col-lg-6 col-sm-12 col-xs-12"
          >
            <div class="text-bold q-mr-sm">
              {{ $t('pages.moviePage.titles.availableCinemas') }}
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-12 col-xs-12">
              <q-select
                filled
                label="Selecione..."
                :options="optionsAvailablePlaces"
                v-model="availablePlaces"
                @update:model-value="
                  applyFilterToRoute(
                    movie.normalizedName,
                    movie.identifier,
                    tab,
                    availablePlaces
                  );
                  filterPlaces(availablePlaces);
                "
              />
            </div>
          </div>
        </div>
        <q-separator spaced />
        <q-tabs
          v-model="tab"
          class="full-width"
          :class="isDarkActive ? 'text-white' : 'text-dark '"
          active-color="primary"
          indicator-color="primary"
          align="left"
          @update:model-value="
            applyFilterToRoute(
              movie.normalizedName,
              movie.identifier,
              tab,
              availablePlaces
            );
            availablePlaces = null;
          "
        >
          <q-tab
            v-for="eventDate in eventDates"
            :key="eventDate.index"
            :label="eventDate.formattedEventDate"
            :icon="imatCalendarMonth24px"
            :name="eventDate.rawDate"
          />
        </q-tabs>

        <q-separator spaced />
        <div style="min-height: 20vh; position: relative">
          <div v-if="loadingCinemas">
            <div class="row justify-between q-mt-lg">
              <q-skeleton width="45%" />
              <q-skeleton width="20%" />
            </div>
            <q-skeleton height="20vh" class="q-mt-lg" />
            <q-skeleton height="20vh" class="q-mt-lg" />
          </div>

          <router-view
            v-else
            :places="filteredEventPlaces"
            :locations="eventLocations"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
