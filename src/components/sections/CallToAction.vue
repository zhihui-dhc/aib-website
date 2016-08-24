<template>
  <section class="section-default section-cd">
    <div class="section-container">
      <countdown></countdown>
    </div>
  </section> 
</template>

<script>
import Countdown from '../Countdown.vue'

export default {
  components: {
    Countdown
  }
}
</script>

<style lang="stylus" scoped">
@import '../../styles/variables.styl'

.section-cd
  background #f6f6f6
  .section-container
    padding 0 !important

.countdown-wrapper
  margin 0 auto
  border none

@media screen and (min-width: 768px)
  .section-default
    .section-container
      padding 3*x 0 !important
</style>
