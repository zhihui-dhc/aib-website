<template>
<div class="countdown-wrapper">
  <div class="key">Crowd sale on October 8th</div>
  <div class="value">{{ countdown }}</div>
  <email-signup-form></email-signup-form>
</div>
</template>

<script>
import EmailSignupForm from './EmailSignupForm'

import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'

export default {
  components: {
    EmailSignupForm
  },
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

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.countdown-wrapper
  text-align center
  padding 0.75*x x

  max-width 480px

  .key
    color txt
    font-size 1.5*x
    text-transform uppercase
    letter-spacing 0.05em

  .value
    color light
    margin-bottom 1.5*x
</style>
