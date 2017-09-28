import VueRouter from 'vue-router'
function r (page) { return () => import('../components/Page' + page) }

const routes = [
  { path: '/', component: r('Index') },
  { path: '/about', name: 'about', component: r('About') },
  { path: '/offices', component: r('Offices') },
  { path: '/careers', component: r('CareersIndex') },
  { path: '/careers/:entry', component: r('CareersEntry') }
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
