<template>
  <div>
    <div class="row items-center">
      <div class="text-h6 text-bold">
        {{
          $t('pages.moviePage.components.moviePanel.filters.filterSessionsBy')
        }}
      </div>
    </div>
    <q-separator spaced />
    <div class="row text-bold">
      <q-option-group
        :options="optionsLangs"
        v-model="groupLang"
        class="row"
        type="radio"
      />
      <q-option-group
        :options="optionsChairs"
        v-model="groupChair"
        class="row"
        type="radio"
      />

      <q-space class="gt-xs" />
      <q-btn :icon="imatInfo24px" no-caps flat dense
        >{{
          $t(
            'pages.moviePage.components.moviePanel.filters.infoAboutFilters.label'
          )
        }}
        <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
          <div
            :class="isDarkActive ? 'bg-dark' : 'bg-white'"
            class="q-gutter-y-sm q-pa-md"
            style="width: 90%"
          >
            <div class="text-h6 text-bold">
              {{
                $t(
                  'pages.moviePage.components.moviePanel.filters.infoAboutFilters.label'
                )
              }}
            </div>
            <q-separator spaced />
            <div>
              <strong
                >{{
                  $t(
                    'pages.moviePage.components.moviePanel.filters.infoAboutFilters.dubbed.label'
                  )
                }}:</strong
              >
              {{
                $t(
                  'pages.moviePage.components.moviePanel.filters.infoAboutFilters.dubbed.description'
                )
              }}
            </div>
            <div>
              <strong
                >{{
                  $t(
                    'pages.moviePage.components.moviePanel.filters.infoAboutFilters.subtitled.label'
                  )
                }}:</strong
              >
              {{
                $t(
                  'pages.moviePage.components.moviePanel.filters.infoAboutFilters.subtitled.description'
                )
              }}
            </div>
            <div>
              <strong
                >{{
                  $t(
                    'pages.moviePage.components.moviePanel.filters.infoAboutFilters.seatHasNumber.label'
                  )
                }}:</strong
              >
              {{
                $t(
                  'pages.moviePage.components.moviePanel.filters.infoAboutFilters.seatHasNumber.description'
                )
              }}
            </div>
            <div>
              <strong
                >{{
                  $t(
                    'pages.moviePage.components.moviePanel.filters.infoAboutFilters.seatHasNoNumber.label'
                  )
                }}:</strong
              >
              {{
                $t(
                  'pages.moviePage.components.moviePanel.filters.infoAboutFilters.seatHasNoNumber.description'
                )
              }}
            </div>
          </div>
        </q-popup-proxy>
      </q-btn>
    </div>
    <div class="cinemaCards">
      <div v-for="places in locations" :key="places.identifier">
        <q-card class="q-mt-md gt-xs" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="col-8 q-pt-xs">
              <div class="text-bold text-h6 text-primary">
                {{ places.place.name }}
              </div>
              <div
                class="text-overline text-bold q-mt-sm q-mb-xs flex items-center cursor-pointer"
              >
                <q-icon :name="imatPlace24px" size="1.5em" />
                <div>Itaim Paulista -</div>
                <q-btn label="Ver localização" no-caps dense flat />
              </div>
              <div>
                <q-btn
                  :icon="imatStore24px"
                  color="primary"
                  flat
                  dense
                  size="lg"
                >
                  <q-tooltip class="bg-dark text-bold">
                    {{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.onlineProducts'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-card-section class="col-4 flex justify-end text-right">
              <div class="text-bold text-primary">
                {{
                  $t(
                    'pages.moviePage.components.moviePanel.cards.howToWithdrawPurchase'
                  )
                }}
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator />
          {{ places }}

          <q-card-actions class="q-gutter-y-md row">
            <div class="col-12 row q-gutter-x-md items-center">
              <div class="text-primary text-bold">
                {{ $t('pages.moviePage.components.moviePanel.cards.room') }}
                {{ places.location.identifier.slice(-2) }}
              </div>
              <q-badge
                v-if="
                  places.videoFormat == 'NAC' || places.videoFormat == 'DUB'
                "
                :color="isDarkActive ? 'primary' : 'dark'"
                class="text-bold"
                text-color="white"
                :label="
                  $t('pages.moviePage.components.moviePanel.filters.dubbed')
                "
              />
              <q-badge
                v-else
                :color="isDarkActive ? 'primary' : 'dark'"
                class="text-bold"
                text-color="white"
                :label="
                  $t('pages.moviePage.components.moviePanel.filters.subtitled')
                "
              />
              <q-badge
                v-if="places.additionalProperty.value == 'true'"
                :color="isDarkActive ? 'primary' : 'dark'"
                class="text-bold"
                text-color="white"
                :label="
                  $t(
                    'pages.moviePage.components.moviePanel.filters.seatHasNumber'
                  )
                "
              />
              <q-badge
                v-else
                :color="isDarkActive ? 'primary' : 'dark'"
                class="text-bold"
                text-color="white"
                :label="
                  $t(
                    'pages.moviePage.components.moviePanel.filters.seatHasNoNumber'
                  )
                "
              />
            </div>
            <div class="col-12 row q-gutter-x-md">
              <q-btn-group>
                <q-btn color="primary" class="text-bold">15:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
              <q-btn-group>
                <q-btn color="primary" class="text-bold">17:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
              <q-btn-group>
                <q-btn color="primary" class="text-bold">19:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
            </div>
            <q-separator />
          </q-card-actions>
        </q-card>
        <!--COMPONENTE MOBILE-->
        <q-card class="cardMovieSession q-mt-md lt-sm" flat bordered>
          <q-card-section vertical>
            <q-card-section class="col-8 q-pt-xs">
              <div class="text-bold text-h6 text-primary">
                {{ places.place.name }}
              </div>
              <div
                class="text-overline text-bold q-mt-sm q-mb-xs flex items-center cursor-pointer"
              >
                <q-icon :name="imatPlace24px" size="1.5em" />
                <div>Itaim Paulista -</div>
                <q-btn label="Ver localização" no-caps dense flat />
              </div>
              <div>
                <q-btn
                  :icon="imatStore24px"
                  color="primary"
                  flat
                  dense
                  size="lg"
                >
                  <q-tooltip class="bg-dark text-bold">{{
                    $t(
                      'pages.moviePage.components.moviePanel.tooltips.onlineProducts'
                    )
                  }}</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>

            <q-card-section class="col-4 flex">
              <div class="text-bold text-primary">
                {{
                  $t(
                    'pages.moviePage.components.moviePanel.cards.howToWithdrawPurchase'
                  )
                }}
              </div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions class="q-gutter-y-md row">
            <div class="col-12 row q-gutter-x-md items-center">
              <div class="text-primary text-bold">
                {{ $t('pages.moviePage.components.moviePanel.cards.room') }} 03
              </div>
              <div class="row">
                <q-badge
                  :color="isDarkActive ? 'primary' : 'dark'"
                  class="text-bold q-mr-sm"
                  text-color="white"
                  :label="
                    $t('pages.moviePage.components.moviePanel.filters.dubbed')
                  "
                />
                <q-badge
                  :color="isDarkActive ? 'primary' : 'dark'"
                  class="text-bold"
                  text-color="white"
                  :label="
                    $t(
                      'pages.moviePage.components.moviePanel.filters.seatHasNumber'
                    )
                  "
                />
              </div>
            </div>
            <div class="col-12 row q-gutter-y-md justify-start">
              <q-btn-group spread class="q-mr-sm">
                <q-btn color="primary" class="text-bold">15:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
              <q-btn-group spread class="q-mr-sm">
                <q-btn color="primary" class="text-bold">17:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
              <q-btn-group spread class="q-mr-sm">
                <q-btn color="primary" class="text-bold">19:00</q-btn>
                <q-separator vertical />
                <q-btn :icon="imatPaid24px" color="primary">
                  <q-tooltip class="bg-dark text-bold"
                    >{{
                      $t(
                        'pages.moviePage.components.moviePanel.tooltips.timeSessionDollarIcon'
                      )
                    }}
                  </q-tooltip>
                </q-btn>
              </q-btn-group>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
