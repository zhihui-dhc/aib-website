<template>
  <section-call-to-action></section-call-to-action>
  <footer id="site-footer">
    <p>&copy; 2016 Cosmos Inc</p>
  </footer>
</template>

<script>
import SectionCallToAction from '../sections/CallToAction.vue'

export default {
  components: {
    SectionCallToAction
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#site-footer
  width 100vw
  height 3*x
  line-height 3*x

  display flex
  flex-flow row
  p
    padding 0 x
</style>
