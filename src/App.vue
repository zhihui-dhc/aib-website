<template>
  <site-header></site-header>
  <router-view></router-view>
  <site-footer></site-footer>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
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
  padding-top 3*x

a
  color link
  text-decoration none
  &:hover
    color hover

@import './styles/article.styl'
@import './styles/animations.styl'
</style>
