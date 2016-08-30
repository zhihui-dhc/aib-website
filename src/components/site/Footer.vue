<template>
  <section-call-to-action></section-call-to-action>
  <footer id="site-footer">
    <p>&copy; 2016 Cosmos Foundation</p>
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
  background #fff
  height 3*x

  display flex
  flex-flow row


  p
    padding 0 x
    line-height 3*x
</style>
