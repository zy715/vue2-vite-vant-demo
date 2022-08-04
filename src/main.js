import Vue from "vue";
import App from "/App.vue"
import router from './router/index.js'
import store from './store'

import '@/utils/flexible'

import "@/styles/reset.scss" // 全局重置样式


new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
}).$mount();