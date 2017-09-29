import VueRouter from 'vue-router'
const Index = resolve => require(['../components/Index/PageIndex'], resolve)
const About = resolve => require(['../components/About/PageAbout'], resolve)
const Offices = resolve => require(['../components/Offices/PageOffices'], resolve)
const CareersIndex = resolve => require(['../components/Career/PageCareersIndex'], resolve)
const CareersEntry = resolve => require(['../components/Career/PageCareersEntry'], resolve)
const routes = [
  { path: '/', component: Index },
  { path: '/about', name: 'about', component: About },
  { path: '/offices', component: Offices },
  { path: '/careers', component: CareersIndex },
  { path: '/careers/:entry', component: CareersEntry }
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
