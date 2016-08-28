import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'

// setup addons
Vue.use(VueRouter)

// enable more descriptive debug messages in the browser console
Vue.config.debug = true

// fetch the page templates
import App from './App.vue'
import PageIndex from './components/pages/Index.vue'
import PageWhitePaper from './components/pages/WhitePaper.vue'
import PagePlan from './components/pages/Plan.vue'
import PageFAQ from './components/pages/FAQ.vue'
import PageBlogIndex from './components/pages/BlogIndex.vue'
import PageBlogPost from './components/pages/BlogPost.vue'

// register the page templates with Vue
Vue.component('page-index', PageIndex)
Vue.component('page-whitepaper', PageWhitePaper)
Vue.component('page-plan', PageWhitePaper)
Vue.component('page-faq', PageFAQ)
Vue.component('page-blog-index', PageBlogIndex)
Vue.component('page-blog-post', PageBlogPost)

let router = new VueRouter({history: true})

// basic transitions
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.map({
  '/': {component: PageIndex},
  '/whitepaper': {component: PageWhitePaper},
  '/plan': {component: PagePlan},
  '/faq': {component: PageFAQ},
  '/blog': {component: PageBlogIndex},
  '/blog/:post': {component: PageBlogPost}
})

// filters
import dateLong from './filters/dateLong'
Vue.filter('dateLong', dateLong)
import dateShort from './filters/dateShort'
Vue.filter('dateShort', dateShort)
import markdown from './filters/markdown'
Vue.filter('markdown', markdown)

router.start(App, 'app')

// stabilize vh class items
function stabilizeVH (element) {
  var HEIGHT_CHANGE_TOLERANCE = 100 // Approximate height of URL bar in Chrome on tablet
  var viewportHeight = window.innerHeight
  var elementHeight = element.offsetHeight
  var originalElementPercent = element.offsetHeight / viewportHeight

  window.addEventListener('resize', function () {
    if (Math.abs(viewportHeight - window.innerHeight) > HEIGHT_CHANGE_TOLERANCE) {
      viewportHeight = window.innerHeight
      elementHeight = window.innerHeight * originalElementPercent
      update()
    }
  })

  function update () {
    element.style.height = elementHeight + 'px'
  }

  update()
}

$(function () {
  var elements = document.querySelectorAll('.stabilizeVH')
  for (var i = 0; i < elements.length; i++) {
    stabilizeVH(elements[i])
  }
})
