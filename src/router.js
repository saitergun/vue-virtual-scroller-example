import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'Post',
    path: '/:id',
    component: () => import('@/pages/Post.vue'),
    props: (route) => ({
      id: Number(route.params.id),
    }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
