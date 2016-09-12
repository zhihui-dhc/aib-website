<template>
  <span class="countdown-string"><strong>{{ countdown }}</strong> until crowdsale</span>
</template>

<script>
import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'

export default {
  data () {
    return {
      countdown: 'Just a little while',
      countdownFunction: countdown
    }
  },
  methods: {
    updateCountdown () {
      this.countdown = moment('2016-10-17').countdown(new Date(), countdown.MONTHS | countdown.DAYS).toString()
    }
  },
  ready () {
    let self = this
    setInterval(function () {
      self.updateCountdown()
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.countdown-string
  strong
    display block

@media screen and (min-width: 568px)
  .countdown-string
    strong
      display inline
</style>


