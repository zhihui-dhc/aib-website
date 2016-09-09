import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'

// editing the <head>
Vue.use(VueHead)

// enable more descriptive debug messages in the browser console
// Vue.config.debug = true

import Filters from './filters/index.js'
Filters(Vue)

import Router from './router/index.js'
let router = Router(Vue)

router.start(App, 'app')
