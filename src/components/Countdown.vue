<template>
<div class="countdown-wrapper">
  <div class="key">Crowd sale on October 8th</div>
  <div class="value">{{ countdown }}</div>
  <form>
    <input type="email" placeholder="your@email.com">
    <input type="submit" value="Alert Me">
  </form>
</div>
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

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.countdown-wrapper
  text-align center
  padding 0.75*x x

  max-width 480px

  .key
    color txt
    font-weight bold

  .value
    color light
    margin-bottom x

  form
    display flex
    flex-flow row

    max-width 320px
    margin x auto 0.25*x

  input
    -webkit-appearance none
    background #fff
    border-radius 0
    padding 0 0.5*x
    margin 0
    height 2*x

    df()
    line-height 2*x - 2px
    border 1px solid light
  

    &[type="email"]
      flex 2
      margin-right 0.5*x
    &[type="submit"]
      flex 1
      background mcolor
      color #fff
      border-color mcolor
</style>
