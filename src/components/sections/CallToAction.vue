<template>
  <section id="section-cta">
    <div class="section-container">
      <h2>Token Crowdfund</h2>
      <div class="description">
        <p>
          Atom tokens are available for purchase soon.
        </p>
      </div>
      <email-signup-form></email-signup-form>
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

#section-cta
  border-top dbd

  .section-container
    max-width 480px
    margin 0 auto

    text-align center
    padding 3rem 1.5rem

    h2
      font-size 1.5rem
      margin 0 0 1rem
      letter-spacing 0.01em
    .description
      margin 0 0 1.5rem

    form
      margin-bottom 1rem
@media screen and (min-width:720px)
  #section-cta
    .section-container
      h2
        font-size 2em
</style>
