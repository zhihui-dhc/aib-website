<template>
  <section class="section-cover">
    <div class="sc-backdrop">
    <div class="sc-container">
      <div class="sc-logo">
        <img src="../assets/images/cosmos_logo_m.png">
        <div class="subtitle">Internet of Blockchains</div>
        <p class="sc-desc" v-if="fundraiserStatus === 'announced'">The fundraiser for Cosmos will begin in <time-left :date="startDate"></time-left> on <router-link to="/blog/fundraiser-delay-announcement-ii">{{ pdtStartDate }}</router-link>. Get notified &rarr;</p>
        <p class="sc-desc" v-if="fundraiserStatus === 'started'">The Cosmos fundraiser is live! It will continue for <time-left :date="endDate"></time-left> until {{ pdtEndDate }}.</p>
        <p class="sc-desc" v-if="fundraiserStatus === 'ended'">Welcome to Cosmos. The fundraiser for Cosmos finished on {{ pdtEndDate }}.</p></p>
      </div>

      <div class="sc-fundraiser" v-if="fundraiserStatus === 'announced'">
        <p class="sc-desc">The fundraiser for Cosmos will begin in <time-left :date="startDate"></time-left> on {{ pdtStartDate }}. Get notified &darr;</p>
        <form-email-signup></form-email-signup>
        <a class="link" :href="docs.btc">
          <i class="fa fa-file-pdf-o"></i>
          BTC Contribution Flow
        </a>
        <a class="link" :href="docs.eth">
          <i class="fa fa-file-pdf-o"></i>
          ETH Contribution Flow
        </a>
        <a class="link" :href="docs.terms">
          <i class="fa fa-file-pdf-o"></i>
          Contribution Terms
        </a>
        <a class="link" href="http://slack.cosmos.network">
          <i class="fa fa-slick"></i>
          Discuss on Slack
        </a>
        <div class="sc-countdown">
          <i class="fa fa-clock-o"></i>
          <time-left :date="startDate"></time-left>
        </div>
      </div>

      <div class="sc-fundraiser" v-if="fundraiserStatus === 'started'">
        <p class="sc-desc">The fundraiser for Cosmos is live! It will continue for <time-left :date="endDate"></time-left> until {{ pdtEndDate }}.</p>
        <btn
          id="fundraiser-btn"
          icon="power-off"
          size="lg"
          @click.native="gotoFundraiser"
          value="Launch Fundraiser">
        </btn>
        <a class="link" :href="docs.btc">
          <i class="fa fa-file-pdf-o"></i>
          BTC Contribution Flow
        </a>
        <a class="link" :href="docs.eth">
          <i class="fa fa-file-pdf-o"></i>
          ETH Contribution Flow
        </a>
        <a class="link" :href="docs.terms">
          <i class="fa fa-file-pdf-o"></i>
          Contribution Terms
        </a>
        <a class="link" href="http://slack.cosmos.network">
          <i class="fa fa-slick"></i>
          Discuss on Slack
        </a>

        <div class="sc-countdown">
          <i class="fa fa-clock-o"></i>
          <time-left :date="endDate"></time-left>
        </div>
      </div>

      <div class="sc-fundraiser" v-if="fundraiserStatus === 'ended'">
        <p class="sc-desc">Welcome to Cosmos. The fundraiser for Cosmos finished on {{ pdtEndDate }}.</p>
        <btn
          id="fundraiser-btn"
          icon="power-off"
          size="lg"
          @click.native="gotoFundraiser"
          value="Launch Fundraiser">
        </btn>
        <a class="link" :href="docs.btc">
          <i class="fa fa-file-pdf-o"></i>
          BTC Contribution Flow
        </a>
        <a class="link" :href="docs.eth">
          <i class="fa fa-file-pdf-o"></i>
          ETH Contribution Flow
        </a>
        <a class="link" :href="docs.terms">
          <i class="fa fa-file-pdf-o"></i>
          Contribution Terms
        </a>
        <a class="link" href="http://slack.cosmos.network">
          <i class="fa fa-slick"></i>
          Discuss on Slack
        </a>

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
import moment from 'moment-timezone'
import TimeLeft from './TimeLeft'
import FormEmailSignup from './FormEmailSignup'
import Btn from '@nylira/vue-button'
export default {
  name: 'menu-fundraiser',
  components: {
    Btn,
    FormEmailSignup,
    TimeLeft
  },
  computed: {
    announceDate () {
      return moment(moment.utc(this.config.ANNOUNCE_DATETIME)).local()
    },
    startDate () {
      return moment(moment.utc(this.config.START_DATETIME)).local()
    },
    endDate () {
      let utcEndDate = moment.utc(this.config.START_DATETIME)
        .add(this.config.ENDS_AFTER, 'days').valueOf()
      return moment(utcEndDate).local()
    },
    pdtStartDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let pdt = moment(utc).tz(this.config.TIMEZONE)
      return pdt.format('LLL z')
    },
    pdtEndDate () {
      let utcEndDate = moment.utc(this.config.START_DATETIME)
        .add(this.config.ENDS_AFTER, 'days').valueOf()
      let pdt = moment(utcEndDate).tz(this.config.TIMEZONE)
      return pdt.format('LLL z')
    },
    ...mapGetters(['config', 'docs'])
  },
  data: () => ({
    fundraiserStatus: ''
  }),
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.FUNDRAISER_URL
    },
    refreshTimers () {
      if (Date.now() >= moment(this.endDate).valueOf()) {
        this.fundraiserStatus = 'ended'
        return
      }
      if (Date.now() >= moment(this.startDate).valueOf()) {
        this.fundraiserStatus = 'started'
        return
      }
      if (Date.now() >= moment(this.announceDate).valueOf()) {
        this.fundraiserStatus = 'announced'
        return
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

  p, .form-email-signup, #fundraiser-btn
    margin-bottom 1.5rem

  #fundraiser-btn
    width 100%
    max-width 20rem

  .link
    text-align center
    height 2rem
    width 100%
    max-width 20rem
    display flex
    align-items center
    justify-content center
    i.fa
      margin-right 0.375rem

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

    .link
      height 2.5rem

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

    .link
      height 2.5rem
      font-weight 400
      color txt
      border 1px solid lighten(ibc, 33.333%)
      margin-bottom 0.5rem
      background hsla(0,0,100%,0.25)
      &:last-of-type
        margin-bottom 0

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

@media screen and (min-width: 1024px)
  .sc-container
    display flex
    height 75vh
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
    .form-email-signup, #fundraiser-btn
      shadow()
      width 20rem
</style>
