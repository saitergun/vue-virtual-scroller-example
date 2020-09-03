import Vue from 'vue';
import vueScrollBehavior from 'vue-scroll-behavior';

import router from './router';
import store from './store';

import App from './App.vue';

import './styles/scss/app.scss';

import './registerServiceWorker';

Vue.use(vueScrollBehavior, { router });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
