<template>
  <div class="fundraiser-alert">

    <div class="container" @click="gotoCta" v-if="fundraiserStatus === 'announced'">
      <p>The Cosmos fundraiser will begin in <time-left :date="startDate"></time-left> on {{ pdtStartDate }}</p>
    </div>

    <div class="container" @click="gotoCta" v-if="fundraiserStatus === 'started'">
      <p>The Cosmos fundraiser will be live for <time-left :date="endDate"></time-left> until {{ pdtEndDate }}.</p>
    </div>

    <div class="container" @click="gotoCta" v-if="fundraiserStatus === 'ended'">
      <p>The Cosmos fundraiser finished on {{ pdtEndDate }}.</p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollTo from 'scroll-to'
import moment from 'moment-timezone'
import TimeLeft from './TimeLeft'
export default {
  name: 'fundraiser-alert',
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
    fundraiserStatus: ''
  }),
  methods: {
    gotoCta () {
      let y = document.querySelector('#section-first-cta').offsetTop - 48 + 8
      scrollTo(0, y, { duration: 666 })
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
@import '../styles/variables.styl'

.fundraiser-alert
  position absolute
  top 3rem
  left 0
  padding 0.5rem
  display flex
  width 100vw
  justify-content center
  cursor pointer
  max-width 100%

  .container
    width 100%
    padding 0.5rem 0.75rem
    border 1px solid bc
    background alpha(c-app-fg,50%)

    display flex
    justify-content center
    align-items center

    font-size 0.75rem

    .ni-time-left
      display inline
      font-weight bold

@media screen and (min-width: 360px)
  .fundraiser-alert .container
    font-size 0.875rem
    padding 0.75rem

@media screen and (min-width: 414px)
  .fundraiser-alert .container
    font-size 1rem
    padding 1rem
</style>
