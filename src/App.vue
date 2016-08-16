<template>
  <site-header></site-header>
  <page-index></page-index>
  <site-footer></site-footer>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import PageIndex from './components/PageIndex'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    PageIndex
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

a
  color link
  text-decoration none
  &:hover
    color hover

@keyframes rotate-blocks
  0%
    transform scale(1.04) rotate(0deg)
    opacity 1.0
  5%
    transform scale(1.10) rotate(36deg)
    opacity 0.5
  10%
    transform scale(1.04) rotate(36deg)
    opacity 1.0
  15%
    transform scale(1.10) rotate(72deg)
    opacity 0.5
  20%
    transform scale(1.04) rotate(72deg)
    opacity 1.0
  25%
    transform scale(1.10) rotate(108deg)
    opacity 0.5
  30%
    transform scale(1.04) rotate(108deg)
    opacity 1.0
  35%
    transform scale(1.10) rotate(144deg)
    opacity 0.5
  40%
    transform scale(1.04) rotate(144deg)
    opacity 1.0
  45%
    transform scale(1.10) rotate(180deg)
    opacity 0.5
  50%
    transform scale(1.04) rotate(180deg)
    opacity 1.0
  55%
    transform scale(1.10) rotate(216deg)
    opacity 0.5
  60%
    transform scale(1.04) rotate(216deg)
    opacity 1.0
  65%
    transform scale(1.10) rotate(252deg)
    opacity 0.5
  70%
    transform scale(1.04) rotate(252deg)
    opacity 1.0
  75%
    transform scale(1.10) rotate(288deg)
    opacity 0.5
  80%
    transform scale(1.04) rotate(288deg)
    opacity 1.0
  85%
    transform scale(1.10) rotate(324deg)
    opacity 0.5
  90%
    transform scale(1.04) rotate(324deg)
    opacity 1.0
  95%
    transform scale(1.10) rotate(360deg)
    opacity 0.5
  100%
    transform scale(1.04) rotate(360deg)
    opacity 1.0
</style>
