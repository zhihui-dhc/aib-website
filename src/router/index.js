import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },

  { path: '/blog', component: r('BlogIndex') },
  { path: '/blog/:entry', component: r('BlogEntry') },

  { path: '/faq', name: 'faq', component: r('Faq') },

  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },

  { path: '/about', name: 'about', component: r('About') },

  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') },

  // wildcards
  { path: '/404', component: r('404') },
  { path: '*', component: r('404') }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
