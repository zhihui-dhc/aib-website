// STATIC ROUTES
import VueRouter from 'vue-router'
function page (filename) { return require('../components/pages/' + filename) }
function post (filename) { return require('../components/blog/' + filename) }

var staticRoutes = [
  { path: '/', component: page('Index') },

  { path: '/blog', component: page('BlogIndex') },
  { path: '/faq', component: page('FAQ') },
  { path: '/plan', component: page('Plan') },
  { path: '/whitepaper', component: page('Whitepaper') },
  { path: '/fund', component: page('Fund') }

  // wildcards
  // { path: '/404', component: page('404') },
  // { path: '*', component: page('404') }
]

const routes = staticRoutes.concat(blogRoutes)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
