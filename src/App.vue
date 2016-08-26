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
@import './styles/screen.styl'
</style>
