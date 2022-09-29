<template>
  <footer class="bg-dark text-white wholeFooter">
    <div class="row firstFooterRow">
      <div class="col-lg-2 q-mt-sm logoBlock row">
        <q-img
          src="/media/logo_velox_tam_original.png"
          style="width: 180px; height: 98px"
        />
      </div>
      <div class="col-lg-2 column q-gutter-y-sm atendimentoBlock">
        <div
          class="text-h6 text-bold text-secondary"
          style="border-bottom: 2px solid white"
        >
          Atendimento
        </div>
        <a class="navButton">Ajuda & Contato</a>
        <a class="navButton">Condições de Uso</a>
        <a class="navButton">Meia-Entrada</a>
        <a class="navButton">Promoções</a>
      </div>
      <q-separator spaced inset vertical dark class="gt-sm" />
      <div class="col-lg-2 column q-gutter-y-sm appBlock">
        <div
          class="text-h6 text-bold text-secondary"
          style="border-bottom: 2px solid white"
        >
          Nosso App
        </div>
        <div class="row q-gutter-y-sm q-mt-xs">
          <q-img
            class="appStoreImg"
            src="/media/app_store.png"
            style="width: 150px"
          />
          <q-img
            class="googlePlayImg"
            src="/media/google_play.png"
            style="width: 150px"
          />
        </div>
      </div>
      <q-separator spaced inset vertical dark class="gt-sm" />
      <div class="col-lg-2 column socialBlock">
        <div
          class="text-h6 text-bold text-secondary"
          style="border-bottom: 2px solid white"
        >
          Nossas Redes Sociais
        </div>
        <div class="row items-center">
          <div class="effect thurio col-12 q-mt-md">
            <div class="buttons row q-gutter-x-xm">
              <a
                target="blank"
                href="https://www.facebook.com/VeloxTickets?ref=hl"
                class="insta"
                title="Join us on Facebook"
              >
                <q-icon :name="bricoFacebook" />
              </a>
              <a
                target="blank"
                href="https://twitter.com/veloxtickets"
                class="in"
                title="Join us on Twitter"
              >
                <q-icon :name="bricoTwitterBird" />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/veloxtickets/"
                class="in"
                title="Join us on Instagram"
              >
                <q-icon :name="bricoInstagramFilled" />
              </a>
              <a
                target="blank"
                href="https://www.youtube.com/channel/UC8efY1d5fgf0eG5xtOoNv8Q"
                class="in"
                title="Join us on Youtube"
              >
                <q-icon :name="brndYoutubePlay" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <q-separator spaced inset vertical dark class="gt-sm" />
      <div class="col-lg-2 column q-gutter-y-sm segurancaBlock">
        <div
          class="text-h6 text-bold text-secondary"
          style="border-bottom: 2px solid white"
        >
          Segurança
        </div>
        Selo cloudflare
      </div>
    </div>
    <q-separator spaced dark />
    <div class="row text-white text-center">
      <div class="col-12">Teste</div>
    </div>
    <div
      class="full-width q-pa-lg text-center q-mt-xl text-dark"
      :class="isDarkActive ? 'bg-black text-white' : 'bg-grey-5 text-dark'"
      style="border-top: 1px solid dark"
    >
      {{ $t('footer.text') }}
      <br />
      <span :class="isDarkActive ? '' : 'text-bold'">
        {{ $t('footer.copyright') }}
      </span>
    </div>
  </footer>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { brndYoutubePlay } from 'quasar-extras-svg-icons/brand-icons';
import { useAppStore } from 'src/stores/app';
import {
  bricoFacebook,
  bricoInstagramFilled,
  bricoTwitterBird,
} from 'quasar-extras-svg-icons/brandico-icons';

export default defineComponent({
  name: 'PageFooter',

  setup() {
    const appStore = useAppStore();
    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      bricoFacebook,
      bricoTwitterBird,
      bricoInstagramFilled,
      brndYoutubePlay,
    };
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />
