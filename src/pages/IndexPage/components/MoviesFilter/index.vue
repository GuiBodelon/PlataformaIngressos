<template>
  <div class="row full-width justify-between items-start q-gutter-y-md q-px-md">
    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 row">
      <div class="col-12 text-bold text-h6 q-mb-md">
        {{ $t('pages.homePage.components.movieFilter.eventTabs.title') }}
        {{ selectedCity.label ?? 'São Paulo' }}
      </div>
      <q-btn-toggle
        class="col-12"
        v-model="selectedSchedule"
        :options="optionsSchedules"
        toggle-color="secondary"
        :color="isDarkActive ? 'white' : 'dark'"
        :text-color="isDarkActive ? 'dark' : 'white'"
        @update:model-value="switchTabPanel(selectedSchedule)"
        spread
      />
    </div>

    <div class="col-lg-2 col-md-3 col-sm-5 col-xs-6 q-pr-sm row">
      <div class="col-12 text-bold q-mb-sm text-uppercase">
        {{ $t('pages.homePage.components.movieFilter.inputs.debut') }}
      </div>
      <q-select
        class="col-12"
        borderless
        outlined
        v-model="debut"
        :options="optionsDebut"
      />
    </div>
    <div class="col-lg-2 col-md-3 col-sm-5 col-xs-6 q-pl-sm row">
      <div class="col-12 text-bold q-mb-sm text-uppercase">
        {{ $t('pages.homePage.components.movieFilter.inputs.category') }}
      </div>
      <q-select
        class="col-12"
        borderless
        outlined
        v-model="category"
        :options="optionsCategory"
        @update:model-value="filterMovieBasedOnGenre(category)"
      />
    </div>
    <div class="col-lg-4 col-12 q-px-sm">
      <div class="row">
        <div class="col-12 text-bold text-uppercase">
          {{ $t('pages.homePage.components.movieFilter.inputs.search.label') }}
        </div>
        <q-input
          class="col-12"
          bottom-slots
          v-model="searchTitle"
          :label="
            $t(
              'pages.homePage.components.movieFilter.inputs.search.placeholder'
            )
          "
          @keyup="filterMovieBasedOnTitle(searchTitle)"
        >
          <template v-slot:append>
            <q-icon
              v-if="searchTitle !== ''"
              name="close"
              @click="searchTitle = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" />
