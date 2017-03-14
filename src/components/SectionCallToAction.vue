<template>
  <div class="section-cta">
    <div class="section-cta-container">
      <header class="section-cta-header">
        <h2 class="section-cta-title">Fundraising Event</h2>
        <time-remaining class="section-cta-subtitle" :date="END_DATETIME" :started="FUNDRAISE_STARTED" fuzzy="true"></time-remaining>
      </header>
      <main class="section-cta-main">
        <template v-if="FUNDRAISE_ENDED">
          <btn
            class="section-cta-btn"
            size="lg"
            value="View Fundraiser"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
          <div class="section-cta-description">Fundraise has ended on May 5th 2017.</div>
        </template>
        <template v-else-if="FUNDRAISE_STARTED">
          <btn
            class="section-cta-btn"
            size="lg"
            value="View Fundraiser"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
          <div class="section-cta-description">Fundraise is live! Click to visit the donation page.</div>
        </template>
        <template v-else>
          <form-email-signup class="section-cta-form"></form-email-signup>
          <div class="section-cta-description">Enter your email to get a notification when the fundraiser begins.</div>
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
import FormEmailSignup from './FormEmailSignup'
import TimeRemaining from './TimeRemaining'
import moment from 'moment'
export default {
  name: 'section-cta',
  components: {
    Btn,
    FormEmailSignup,
    TimeRemaining
  },
  computed: {
    FUNDRAISE_STARTED () {
      return Date.now() >= moment(this.config.START_DATETIME).valueOf()
    },
    FUNDRAISE_ENDED () {
      return Date.now() >= moment(this.END_DATETIME).valueOf()
    },
    END_DATETIME () {
      if (this.FUNDRAISE_STARTED) {
        return moment(this.config.START_DATETIME)
          .add(this.config.ENDS_AFTER, 'days')._d
      } else {
        return this.config.START_DATETIME
      }
    },
    ...mapGetters(['config'])
  },
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.SALE_URL
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

.section-cta-header
  margin-bottom 1rem

.section-cta-title
  font-size 1.5rem
  font-weight 600

.section-cta-subtitle
  font-size 1.375rem

.section-cta-form
  margin-bottom 0

.section-cta-form, .section-cta-btn.ni-btn-wrapper .ni-btn
  width 17rem

.section-cta-description
  margin 1rem auto 0
  font-size 0.875rem
  color dim

@media screen and (min-width: 768px)
  .section-cta-container
    padding-top 4rem
    padding-bottom 4rem

  .section-cta-header
    margin-bottom 1.5rem

  .section-cta-title
    font-size 2rem
  .section-cta-subtitle
    font-size 1.5rem
</style>
