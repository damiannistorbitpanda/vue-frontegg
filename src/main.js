import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Frontegg } from '@frontegg/vue';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
});


Vue.use(Frontegg, {
  contextOptions: {
    baseUrl: 'https://app-wdsf50edp7my.frontegg.com',
    clientId: '89681848-7b39-446c-8bc9-6d1991fcfb3a'
  },
  hostedLoginBox: true,
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
