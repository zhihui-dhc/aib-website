import VueRouter from 'vue-router'
function r (page) { return require('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },

  { path: '/blog', component: r('BlogIndex') },

  { path: '/blog/purpose-of-cosmos', redirect: '/blog/why-we-are-building-the-internet-of-blockchains' },
  { path: '/blog/fundraiser-flow-bounty', redirect: '/blog/think-like-a-hacker-make-it-big' },
  { path: '/blog/fundraiser-delay-announcement-ii', redirect: '/blog/new-date-fundraiser-date-moved-to-april-6' },
  { path: '/blog/atom-supply-distribution', redirect: '/blog/atom-supply-and-distribution' },
  { path: '/blog/inflation-cosmos', redirect: '/blog/understanding-inflation-in-cosmos' },
  { path: '/blog/fundraiser-results', redirect: '/blog/fundraiser-was-a-resounding-success' },
  { path: '/blog/:entry', component: r('BlogEntry') },

  { path: '/faq', name: 'faq', component: r('Faq') },

  { path: '/plan', name: 'plan', component: r('Plan') },
  { path: '/plan/:locale', name: 'plan-localized', component: r('Plan') },

  { path: '/about', name: 'about', component: r('About') },

  { path: '/whitepaper', name: 'whitepaper', component: r('Whitepaper') },
  { path: '/whitepaper/en-US', redirect: '/whitepaper' },
  { path: '/whitepaper/:locale', name: 'whitepaper-localized', component: r('Whitepaper') },

  { path: '/hackatom', name: 'hackatom-en-us', component: r('HackAtom') },
  { path: '/hackatom/zh-cn', name: 'hackatom-zh-cn', component: r('HackAtomZhCn') },

  // redirects
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
