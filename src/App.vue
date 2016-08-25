<template>
  <site-header></site-header>
  <div id="site-content">
    <router-view></router-view>
  </div>
  <site-footer></site-footer>
</template>

<script>
import SiteHeader from './components/site/Header.vue'
import SiteFooter from './components/site/Footer.vue'
import store from './vuex/store.js'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  store
}
</script>

<style lang="stylus">
@import './styles/variables.styl'

global-reset()
reset-html5()

*
  box-sizing border-box

body
  df()
  display flex
  flex-flow column
  background mbg

  min-height 100vh

#site-content
  flex 1

a
  color link
  text-decoration none
  &:hover
    color hover

@import './styles/article.styl'
@import './styles/animations.styl'
</style>
