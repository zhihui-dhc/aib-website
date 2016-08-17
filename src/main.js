import Vue from 'vue'
import VueRouter from 'vue-router'

// setup addons
Vue.use(VueRouter)

// enable more descriptive debug messages in the browser console
Vue.config.debug = true

// fetch the page templates
import App from './App.vue'
import PageIndex from './components/PageIndex.vue'
import PageWhitepaper from './components/PageWhitepaper.vue'
import PagePlan from './components/PagePlan.vue'
import PageFaq from './components/PageFaq.vue'

// register the page templates with Vue
Vue.component('page-index', PageIndex)
Vue.component('page-whitepaper', PageWhitepaper)
Vue.component('page-plan', PageWhitepaper)
Vue.component('page-faq', PageFaq)

let router = new VueRouter({history: false})

// basic transitions
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.map({
  '/': {component: PageIndex},
  '/whitepaper': {component: PageWhitepaper},
  '/plan': {component: PagePlan},
  '/faq': {component: PageFaq}
})

// filters
// import fiveNines from './filters/fiveNines'
// Vue.filter('fiveNines', fiveNines)

router.start(App, 'app')
