// BLOG ROUTES
import BlogPurposeOfCosmos from '../components/blog/purpose-of-cosmos.vue'
import BlogDisclaimersForCrowdfundParticipants from '../components/blog/disclaimers-for-crowdfund-participants.vue'
import BlogJustATest from '../components/blog/just-a-test.vue'
let blogRoutes = {
  '/blog/purpose-of-cosmos': { component: BlogPurposeOfCosmos },
  '/blog/disclaimers-for-crowdfund-participants': { component: BlogDisclaimersForCrowdfundParticipants },
  '/blog/just-a-test': { component: BlogJustATest }
}

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
