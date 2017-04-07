<template>
  <div class="section-cta">
    <div class="section-cta-container">
      <header class="section-cta-header">
        <h2 class="section-cta-title">Fundraiser Event</h2>
        <!--<time-remaining class="section-cta-subtitle" :date="endDate" :started="fundraiseStarted" :fuzzy="!fundraiseAnnounced"></time-remaining>-->
        <div class="section-cta-subtitle">raised {{ amountRaised }} in 28 minutes.</div>
      </header>
      <main class="section-cta-main">

        <div class="section-cta-description">Fundraiser has ended on {{ pdtEndDate }}. Thank you for your contributions!</div>
        <btn
          class="section-cta-btn"
          size="lg"
          value="Open Fundraiser"
          icon="external-link"
          @click.native="gotoFundraiser">
        </btn>
        <div class="section-cta-description">Join <a href="http://slack.cosmos.network">#cosmos</a> on Slack to talk about the fundraiser with the community.</div>

      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import FormEmailSignup from './FormEmailSignup'
import TimeRemaining from './TimeRemaining'
export default {
  name: 'section-cta',
  components: {
    Btn,
    FormEmailSignup,
    TimeRemaining
  },
  computed: {
    ...mapGetters(['config'])
  },
  data: () => ({
    amountRaised: '$16.8 million USD',
    pdtEndDate: 'April 6, 2017 6:28AM PDT'
  }),
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.FUNDRAISER_URL
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-cta
  background c-app-fg

.section-cta-container
  max-width 40rem
  margin 0 auto

  text-align center
  padding 2rem 1.5rem

.section-cta-header, .section-cta-description
  margin-bottom 1.5rem

.section-cta-title
  font-size 1.5rem
  font-weight 600

.section-cta-subtitle
  font-size 1.375rem

.section-cta-form
  margin-bottom 1.5rem
  margin-left auto
  margin-right auto

.section-cta-description
  margin-left auto
  margin-right auto
  max-width 24rem
  font-size 0.875rem
  &:last-of-type
    margin-bottom 0

  a
    color txt
    text-decoration underline

.section-cta-btn.ni-btn-wrapper
  max-width 20rem
  width 100%

@media screen and (min-width: 768px)
  .section-cta-container
    padding-top 4rem
    padding-bottom 4rem

  .section-cta-header
    margin-bottom 2rem

  .section-cta-title
    font-size 2rem

  .section-cta-subtitle
    font-size 1.66rem

  .section-cta-form, .section-cta-btn.ni-btn-wrapper .ni-btn,
  .section-cta-description
    margin-bottom 2.25rem

  .section-cta-description
    font-size 1rem
</style>
