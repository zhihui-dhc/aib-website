<template>
  <div class="section-cta">
    <div class="section-cta-container">
      <header class="section-cta-header">
        <h2 class="section-cta-title">Fundraiser Event</h2>
        <time-remaining class="section-cta-subtitle" :date="endDate" :started="fundraiseStarted" :fuzzy="!fundraiseAnnounced"></time-remaining>
      </header>
      <main class="section-cta-main">
        <template v-if="fundraiseEnded">
          <div class="section-cta-description">Fundraise has ended.</div>
          <btn
            class="section-cta-btn"
            size="lg"
            value="View Fundraiser"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
        </template>
        <template v-else-if="fundraiseStarted">
          <div class="section-cta-description">Fundraise is live! Click to visit the donation page.</div>
          <btn
            class="section-cta-btn"
            size="lg"
            value="View Fundraiser"
            icon="bar-chart"
            @click.native="gotoFundraiser">
          </btn>
        </template>
        <template v-else>
          <div v-if="fundraiseAnnounced" class="section-cta-description">The Cosmos fundraiser will begin on {{ friendlyStartDate }}. Enter your email to receive live notifications:</div>
          <div v-else class="section-cta-description">The start date will be announced shortly. Stay tuned! Enter your email to receive live fundraiser notifications.</div>
          <form-email-signup class="section-cta-form"></form-email-signup>
          <div class="section-cta-description">Chat with the Cosmos community about the fundraiser on <a href="http://slack.cosmos.network"><i class="fa fa-slick"></i> Slack</a>.</div>
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
    friendlyStartDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let local = moment(utc).local()
      return moment(local).format('MMMM DD, YYYY [at] h:mm A')
    },
    announcedDate () {
      return moment(moment.utc(this.config.ANNOUNCE_DATETIME)).local()
    },
    startDate () {
      return moment(moment.utc(this.config.START_DATETIME)).local()
    },
    endDate () {
      if (this.fundraiseStarted) {
        let utcEndDate = moment.utc(this.config.START_DATETIME)
          .add(this.config.ENDS_AFTER, 'days').valueOf()
        return moment(utcEndDate).local()
      } else {
        return this.startDate
      }
    },
    ...mapGetters(['config'])
  },
  data: () => ({
    fundraiseAnnounced: false,
    fundraiseStarted: false,
    fundraiseEnded: false
  }),
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.SALE_URL
    },
    refreshTimers () {
      // console.log('refreshing timers...')
      if (Date.now() >= moment(this.announcedDate).valueOf()) {
        this.fundraiseAnnounced = true
      }
      if (Date.now() >= moment(this.startDate).valueOf()) {
        this.fundraiseStarted = true
      }
      if (Date.now() >= moment(this.endDate).valueOf()) {
        this.fundraiseEnded = true
      }
    }
  },
  mounted () {
    this.refreshTimers()
    setInterval(this.refreshTimers, 1000)
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
  border none

.section-cta-form .input-group
  margin 0

.section-cta-form, .section-cta-btn.ni-btn-wrapper .ni-btn
  width 100%
  max-width 20rem
  margin-bottom 1.5rem

.section-cta-description
  margin-left auto
  margin-right auto
  max-width 26rem
  font-size 0.875rem

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

  .section-cta-description
    font-size 1rem
    margin-bottom 2.25rem
</style>
