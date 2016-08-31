// ANY ROUTES ABOVE THIS IS GENERATED FROM `npm run blog`
import VueRouter from 'vue-router'

// STATIC ROUTES
import PageIndex from '../components/pages/Index.vue'
import PageWhitepaper from '../components/pages/Whitepaper.vue'
import PagePlan from '../components/pages/Plan.vue'
import PageFaq from '../components/pages/FAQ.vue'
import PageBlogIndex from '../components/pages/BlogIndex.vue'

let staticRoutes = {
  '/': { component: PageIndex },
  '/whitepaper': { component: PageWhitepaper },
  '/plan': { component: PagePlan },
  '/faq': { component: PageFaq },
  '/blog': { component: PageBlogIndex }
}

let routes = Object.assign(staticRoutes, blogRoutes)

export default function (vue) {
  vue.use(VueRouter)

  let router = new VueRouter({history: true})

  router.beforeEach(function () {
    window.scrollTo(0, 0)
  })

  router.map(routes)

  return router
}
