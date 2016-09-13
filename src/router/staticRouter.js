// ANY ROUTES ABOVE THIS IS GENERATED FROM `npm run blog`
import VueRouter from 'vue-router'

// STATIC ROUTES
import PageIndex from '../components/pages/Index.vue'
import PageBlogIndex from '../components/pages/BlogIndex.vue'
import PageFaq from '../components/pages/FAQ.vue'
import PagePlan from '../components/pages/Plan.vue'
import PageWhitepaper from '../components/pages/Whitepaper.vue'
import PageFund from '../components/pages/Fund.vue'

let staticRoutes = {
  '/': { component: PageIndex },
  '/blog': { component: PageBlogIndex },
  '/faq': { component: PageFaq },
  '/plan': { component: PagePlan },
  '/whitepaper': { component: PageWhitepaper },
  '/fund': { component: PageFund }
}

let routes = Object.assign(staticRoutes, blogRoutes)

export default function (vue) {
  vue.use(VueRouter)

  let router = new VueRouter({history: true})

  router.map(routes)

  return router
}
