import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout/MainLayout.vue'),
    redirect: () => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: '/Portal/Ingresso/Cinema/Sao-Paulo' };
    },
    children: [
      {
        path: '/Portal/Ingresso/Cinema/:cityName',
        component: () => import('pages/IndexPage/index.vue'),
      },
      {
        path: '/Portal/Ingresso/Cinema/:cityName/:movieName/:movieId/',
        component: () => import('pages/MoviePage/index.vue'),
        children: [
          {
            path: '/Portal/Ingresso/:cityName/:movieName/:movieId/',
            component: () =>
              import('pages/MoviePage/components/MoviePanel/index.vue'),
          },
          {
            path: '/Portal/Ingresso/:cityName/:movieName/:movieId/:eventDate/',
            component: () =>
              import('pages/MoviePage/components/MoviePanel/index.vue'),
          },
          {
            path: '/Portal/Ingresso/:cityName/:movieName/:movieId/:eventDate/',
            component: () =>
              import('pages/MoviePage/components/MoviePanel/index.vue'),
          },
          {
            path: '/Portal/Ingresso/:cityName/:movieName/:movieId/:eventDate/:placeName/:placeId',
            component: () =>
              import('pages/MoviePage/components/MoviePanel/index.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
