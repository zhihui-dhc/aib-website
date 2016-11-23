<template>
<div class="card-countdown">{{ countdown }}</div>
</template>

<script>
import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'

export default {
  name: 'card-countdown',
  data () {
    return {
      countdown: ''
    }
  },
  methods: {
    updateCountdown () {
      this.countdown = moment('2016-10-17').countdown(new Date(), countdown.MONTHS | countdown.DAYS).toString()
    }
  },
  mounted () {
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  }
}
</script>
