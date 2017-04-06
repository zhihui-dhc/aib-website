<template>
  <menu class="menu-popup menu-fundraiser">
    <div class="container">
      <div class="bounds">
        <nav v-if="status === 'announced'">
          <menu-fundraiser-links :status="status"></menu-fundraiser-links>
          <p>The Cosmos fundraiser will begin in <time-left :date="startDate"></time-left> on {{ pdtStartDate }}</p>
        </nav>
        <nav v-if="status === 'started'">
          <menu-fundraiser-links :status="status"></menu-fundraiser-links>
          <p>The Cosmos fundraiser will be live for <time-left :date="endDate"></time-left> until {{ pdtEndDate }}.</p>
        </nav>
        <nav v-if="status === 'ended'">
          <menu-fundraiser-links :status="status"></menu-fundraiser-links>
          <p>The Cosmos fundraiser finished on {{ pdtEndDate }}.</p>
        </nav>
      </div>
    </div>
  </menu>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'
import MenuFundraiserLinks from './MenuFundraiserLinks'
import TimeLeft from './TimeLeft'
export default {
  name: 'menu-fundraiser',
  components: {
    TimeLeft,
    MenuFundraiserLinks
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
    ...mapGetters(['config'])
  },
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.FUNDRAISER_URL
    }
  },
  props: ['status']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

@media screen and (min-width: 1024px)
  .menu-fundraiser
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh

    .container
      width 1024px
      height 100vh
      position relative
      margin 0 auto

    .bounds
      position absolute
      top 3rem
      right 0
      background c-app-fg
      width 20rem
      shadow()

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem
      > p
        padding 0.75rem 0
        color txt
        .ni-time-left
          display inline
          font-weight bold
</style>
