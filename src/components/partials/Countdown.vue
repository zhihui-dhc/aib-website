<template>
<span class="countdown-string">{{ countdown }}</span>
</template>

<script>
import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'

export default {
  data () {
    return {
      countdown: '',
      countdownFunction: countdown
    }
  },
  methods: {
    updateCountdown () {
      this.countdown = moment('2016-10-8').countdown().toString()
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
