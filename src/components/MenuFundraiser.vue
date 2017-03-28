<template>
  <menu class="menu-popup menu-fundraiser">
    <div class="container">
      <div class="bounds">
        <nav v-if="fundraiserStatus === 'announced'">
          <a @click="gotoCta">
            View Fundraiser
            <span class="alert">
              <i class="fa fa-clock-o"></i>
              <time-left :date="startDate"></time-left>
            </span>
          </a>
          <a :href="pdf">Fundraiser Terms</a>
          <a href="http://slack.cosmos.network">Discuss on Slack</a>
          <p>The Cosmos fundraiser will begin in <time-left :date="startDate"></time-left> on <a href="">{{ pdtStartDate }}</a></p>
        </nav>
        <nav v-if="fundraiserStatus === 'started'">
          <a :href="config.SALE_URL">
            View Fundraiser
            <span class="alert">
              <i class="fa fa-clock-o"></i>
              <time-left :date="endDate"></time-left>
            </span>
          </a>
          <a :href="pdf">Fundraiser Terms</a>
          <a href="http://slack.cosmos.network">Discuss on Slack</a>
          <p>The Cosmos fundraiser will be live for <time-left :date="endDate"></time-left> until <a href="">{{ pdtEndDate }}</a>.</p>
        </nav>
        <nav v-if="fundraiserStatus === 'ended'">
          <a :href="config.SALE_URL">
            View Fundraiser
            <span class="alert">
              <i class="fa fa-hourglass-end"></i>
            </span>
          </a>
          <a :href="pdf">Fundraiser Terms</a>
          <a href="http://slack.cosmos.network">Discuss on Slack</a>
          <p>The Cosmos fundraiser finished on <a href="">{{ pdtEndDate }}</a>.</p>
        </nav>
      </div>
    </div>
  </menu>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import scrollTo from 'scroll-to'
import TimeLeft from './TimeLeft'
export default {
  name: 'menu-fundraiser',
  components: {
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
    ...mapGetters(['config'])
  },
  data: () => ({
    fundraiserStatus: '',
    pdf: require('../assets/cosmos-contrib-terms.pdf')
  }),
  methods: {
    gotoCta () {
      let y = document.querySelector('#section-first-cta').offsetTop - 48 + 8
      scrollTo(0, y, { duration: 666 })
    },
    gotoFundraiser () {
      window.location.href = this.config.SALE_URL
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
      > a, > p
        padding 0.75rem 0
      > a
        color txt
        border-bottom 1px solid bc
        display flex
        align-items center
        justify-content space-between
        user-select none
        &.disabled
          color light
          cursor not-allowed
        &:hover
          color link
        .alert
          display flex
          align-items center
          background link
          color c-app-fg
          font-size 0.75rem
          padding 0 0.5rem
          border-radius 0.25rem
          height 1.5rem
          i.fa
            color c-app-fg
          i.fa + .ni-time-left
            margin-left 0.25rem
      > p
        color txt
        .ni-time-left
          display inline
          font-weight bold
        a
          color link
          &:hover
            text-decoration underline
</style>
