<template>
  <q-toolbar class="primaryToolbar">
    <q-img
      src="/media/placeholder-logo.png"
      style="max-width: 120px"
      class="cursor-pointer"
      @click="goToIndex()"
    />
    <q-space />
    <div class="row q-gutter-x-md items-center">
      <div class="row items-center">
        <div class="text-white gt-xs">
          {{ $t('layouts.toolbar.buttons.darkMode.label') }}
        </div>
        <q-toggle
          v-model="isDarkModeActive"
          :checked-icon="imatDarkMode24px"
          color="orange-10"
          :unchecked-icon="imatLightMode24px"
          @update:model-value="setDarkMode(isDarkModeActive)"
        >
          <q-tooltip>{{
            isDarkActive
              ? $t('layouts.toolbar.buttons.darkMode.onDark')
              : $t('layouts.toolbar.buttons.darkMode.onLight')
          }}</q-tooltip>
        </q-toggle>
      </div>
      <q-btn
        class="gt-sm"
        :icon="imatLocalActivityRounded24px"
        :label="$t('layouts.toolbar.buttons.faithfulness')"
        flat
        rounded
      />
      <q-btn class="lt-md" :icon="imatLocalActivityRounded24px" flat rounded />
      <q-chip class="gt-xs cursor-pointer">
        <q-avatar :icon="imatAccountCircle24px" size="xl" /> John
      </q-chip>
      <q-btn class="lt-sm" :icon="imatAccountCircle24px" flat rounded />
    </div>
  </q-toolbar>
  <q-toolbar class="secondaryToolbar bg-black">
    <div class="text-bold q-mr-sm">
      {{ $t('layouts.secondaryToolbar.labels.ticketsIn') }}
    </div>
    <q-btn
      id="btnCityDesk"
      ref="btnCityDesk"
      :icon="imatPlace24px"
      flat
      dense
      rounded
      no-caps
      :label="currentSelectedCity"
    >
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
        <div
          :class="isDarkActive ? 'bg-dark' : 'bg-white'"
          class="q-pa-lg"
          style="width: 250px"
        >
          <div class="text-bold q-mb-md text-center text-uppercase">
            {{ $t('layouts.secondaryToolbar.labels.selectCity') }}
          </div>
          <form @submit.prevent.stop="switchCity(currentCity, currentState)">
            <q-select
              filled
              v-model="currentState"
              :options="optionsStates"
              @update:model-value="loadCitiesFilter(currentState)"
              label="Estado"
              class="col-12 q-mb-md"
            >
              <template v-slot:prepend>
                <q-icon name="place" @click.stop.prevent />
              </template>
            </q-select>
            <q-select
              filled
              v-model="currentCity"
              :options="optionsCities"
              label="Cidade"
              class="col-12"
              :rules="rules"
            >
              <template v-slot:prepend>
                <q-icon name="place" @click.stop.prevent />
              </template>
            </q-select>
            <q-btn
              :label="$t('layouts.secondaryToolbar.buttons.switchCity')"
              :color="isDarkActive ? 'secondary' : 'dark'"
              :text-color="isDarkActive ? 'white' : 'white'"
              class="full-width q-mt-sm"
              type="submit"
              v-close-popup
            />
          </form>
        </div>
      </q-popup-proxy>
    </q-btn>
    <q-separator inset vertical spaced dark v-if="$q.screen.gt.sm" />
    <div class="row items-center" v-if="$q.screen.gt.sm">
      <div class="text-bold q-mr-sm">Cinema:</div>
      <q-select dark v-model="currentCity" :options="optionsCities" />
    </div>
  </q-toolbar>
  <q-toolbar
    class="secondaryToolbar bg-black"
    style="border-top: 1px solid"
    v-if="$q.screen.lt.md"
  >
    <div class="text-bold q-mr-sm">Cinema:</div>
    <q-select dark v-model="currentCity" :options="optionsCities" />
  </q-toolbar>
</template>

<script src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
