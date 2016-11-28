// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import App from './App'

// sync store and router
import { sync } from 'vuex-router-sync'
import store from './store/index.js'
import router from './router/index.js'
sync(store, router)

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(VueI18n)

// i18n settings
Vue.config.lang = 'en'
Vue.config.fallbackLang = 'en'
Vue.locale('en', require('./content/interface/en.json'))
Vue.locale('ja', require('./content/interface/ja.json'))
Vue.locale('ko', require('./content/interface/ko.json'))
Vue.locale('zh', require('./content/interface/zh.json'))

/* eslint no-unused-vars: 0 */
const app = new Vue({
  router,
  render (h) {
    return h(App)
  },
  store
}).$mount('#app')
