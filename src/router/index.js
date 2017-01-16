import VueRouter from 'vue-router'
function r (filename) { return require('../components/Page' + filename) }

const routes = [
  { path: '/', component: r('Index') },

  { path: '/blog', component: r('BlogIndex') },
  { path: '/blog/:entry', component: r('BlogEntry') },
  { path: '/blog/:entry/:comment', component: r('BlogEntryComment') },

  { path: '/comment/new', component: r('CommentNew') },
  { path: '/comment/edit', component: r('CommentEdit') },

  { path: '/faq', name: 'faq', component: r('Faq') },
  { path: '/plan', name: 'plan', component: r('Plan') },

  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/whitepaper/:locale', name: 'whitepaper', component: r('Whitepaper') },

  { path: '/signup', name: 'signup', component: r('UserSignUp') },
  { path: '/signin', name: 'signin', component: r('UserSignIn') },
  { path: '/reset', name: 'reset', component: r('UserReset') },
  { path: '/settings', name: 'settings', component: r('UserSettings') },

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
