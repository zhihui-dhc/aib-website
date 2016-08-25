<template>
  <section class="section-default section-cd">
    <div class="section-container">
      <countdown></countdown>
    </div>
  </section> 
</template>

<script>
import Countdown from '../partials/Countdown.vue'

export default {
  components: {
    Countdown
  }
}
</script>

<style lang="stylus" scoped">
@import '../../styles/variables.styl'

.section-cd
  border-top 1px solid bc
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
