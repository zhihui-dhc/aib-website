import VueRouter from 'vue-router'
function r (filename) { return require('../components/' + filename) }

const routes = [
  { path: '/', component: r('PageIndex') },

  { path: '/blog', component: r('PageBlogIndex') },
  { path: '/blog/:entry', component: r('PageBlogEntry') },

  { path: '/faq', component: r('PageFaq') },
  { path: '/plan', component: r('PagePlan') },
  { path: '/whitepaper', component: r('PageWhitepaper') },
  { path: '/fund', component: r('PageFund') }

  // wildcards
  // { path: '/404', component: page('404') },
  // { path: '*', component: page('404') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
