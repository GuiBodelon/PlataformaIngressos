<template>
  <q-layout view="hHr lpR fFf">
    <PageHeader @onSwitchCity="switchCity" />
    <q-page-container>
      <router-view v-slot="{ Component }" :currentCity="selectedCity">
        <transition name="scale-app" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <PageFooter />
  </q-layout>
</template>

<script src="./index.ts" />

<style>
/*ROUTER ANIMATED TRANSITION*/
.scale-app-enter-active,
.scale-app-leave-active {
  transition: all 0.5s ease;
}

.scale-app-enter-from,
.scale-app-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
