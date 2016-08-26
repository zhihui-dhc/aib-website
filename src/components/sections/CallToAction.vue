<template>
  <section class="section-default section-cd">
    <div class="section-container">
      <div class="countdown-wrapper">
        <div class="key">Crowd sale on October 8th</div>
        <div class="value"><countdown-string></countdown-string></div>
        <email-signup-form></email-signup-form>
      </div>
    </div>
  </section> 
</template>

<script>
import EmailSignupForm from '../partials/EmailSignupForm'
import Countdown from '../partials/Countdown.vue'

export default {
  components: {
    Countdown,
    EmailSignupForm
  }
}
</script>

<style lang="stylus" scoped">
@import '../../styles/variables.styl'

.section-cd
  border-top 1px solid bc

  // show on top of hovering sidebars
  position relative
  z-index 1
  background mbg

  .section-container
    padding 0 !important

.countdown-wrapper
  text-align center
  padding 2*x x

  max-width 480px
  margin 0 auto

  .key
    color txt
    font-size 1.25*x
    text-transform uppercase
    letter-spacing 0.05em

  .value
    color light
    margin-bottom 1.5*x

@media screen and (min-width: 768px)
  .section-cd
    .section-container
      padding 3*x 0 !important

  .countdown-wrapper
    .key
      font-size 1.5*x
</style>
