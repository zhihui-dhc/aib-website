<template>
  <section class="section-cover">
    <div class="sc-backdrop">
    <div class="sc-container">
      <div class="sc-logo">
        <img src="../assets/images/cosmos_logo_m.png">
        <div class="subtitle">Internet of Blockchains</div>
        <p class="sc-desc">The Cosmos fundraiser raised <strong>{{ amountRaised }}</strong> and finished on {{ pdtEndDate }}.</p></p>
      </div>

      <div class="sc-fundraiser">
        <p class="sc-desc">The Cosmos fundraiser raised <strong>{{ amountRaised }}</strong> and finished on {{ pdtEndDate }}.</p></p>
        <form-email-signup></form-email-signup>
        <section-cover-links></section-cover-links>
        <div class="sc-countdown">
          <i class="fa fa-hourglass-end"></i>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FormEmailSignup from './FormEmailSignup'
import SectionCoverLinks from './SectionCoverLinks'
export default {
  name: 'menu-fundraiser',
  components: {
    FormEmailSignup,
    SectionCoverLinks
  },
  computed: {
    ...mapGetters(['config'])
  },
  data: () => ({
    amountRaised: '$16.8 million USD',
    pdtEndDate: 'April 6, 2017 6:28AM PDT'
  })
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-cover
  background url('../assets/images/cover_image.png') center center

.sc-backdrop
  background hsla(0,0,100%,0.5)
  margin 0.5rem

.sc-container
  max-width 1024px
  margin 0 auto

.sc-logo
  display flex
  flex-flow column nowrap
  align-items center
  justify-content center
  padding 3rem

  img
    height 2rem
    margin-bottom 0.5rem

  .subtitle
    text-transform uppercase
    color dim
    font-size 0.75rem
    letter-spacing 0.05em
    font-weight 500

  .sc-desc
    display none

.sc-desc
  max-width 22rem
  text-align center
  line-height 2

  .ni-time-left
    display inline
    font-weight bold
    white-space nowrap

.sc-fundraiser
  padding 0 1.5rem 3rem
  display flex
  justify-content center
  flex-flow column nowrap
  align-items center

  p, .form-email-signup
    margin-bottom 1.5rem

.sc-countdown
  display none

@media screen and (min-width: 360px)
  .sc-logo
    padding-top 4rem
    img
      height 2.4rem
    .subtitle
      font-size 0.9rem

  .sc-fundraiser
    padding-left 2rem
    padding-right 2rem
    padding-bottom 4rem

    .form-email-signup, #fundraiser-btn
      margin-bottom 2rem

@media screen and (min-width: 414px)
  .sc-logo
    img
      height 2.6rem
    .subtitle
      font-size 0.975rem

  .sc-fundraiser
    padding-left 3rem
    padding-right 3rem

    .form-email-signup, #fundraiser-btn
      margin-bottom 2rem

@media screen and (min-width: 768px)
  .sc-logo
    img
      height 3rem
    .subtitle
      font-size 1.125rem
  .sc-desc
    font-size 1.33rem
    font-weight 400
  .sc-fundraiser
    .sc-desc
      margin-bottom 3rem
    .form-email-signup, #fundraiser-btn
      shadow()
      width 30rem
      max-width 30rem

@media screen and (min-width: 1024px)
  .sc-container
    display flex
    height 66.66vh
    max-height 56.25vw
    padding 3rem 0

  .sc-logo, .sc-fundraiser
    padding 3rem

  .sc-logo
    flex 1
    padding-bottom 4rem

  .sc-logo
    align-items flex-start
    .subtitle
      margin-bottom 3rem
    .sc-desc
      text-align left
      display block

  .sc-fundraiser
    .sc-desc
      display none

    .ni-links
      border-top 4px solid bc
      padding-top 2rem - 0.25rem
</style>
