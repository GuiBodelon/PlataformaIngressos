<template>
  <q-page class="indexPage">
    <div class="flex full-width justify-center">
      <MovieCarousel />
    </div>

    <MoviesFilter
      class="q-mt-md"
      @onSwitchTabPanel="switchTabPanel"
      @onFilterMovieBasedOnGenre="filterMovieBasedOnGenre"
      @onFilterMovieBasedOnTitle="filterMovieBasedOnTitle"
      :selected-city="currentCity"
    />
    <MovieSchedule
      :currentEvents="filteredCurrentEvents"
      :selectedTabSchedule="selectedTabSchedule"
      :loadingMovies="loading"
    />
  </q-page>
</template>

<script src="./index.ts" />
