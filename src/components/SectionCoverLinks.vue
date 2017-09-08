<template>
  <div class="section-cover-links">
    <btn
      type="link"
      to="/hackatom"
      icon="clock-o"
      value="HackAtom 2017 Information">
    </btn>
    <btn
      type="anchor"
      href="https://blog.cosmos.network/fundraiser-was-a-resounding-success-bf378b96fe00"
      icon="hourglass-end"
      value="Fundraiser Results">
    </btn>
    <btn
      type="anchor"
      href="https://cosmos.rocket.chat"
      icon="rocket"
      value="Chat on Rocket">
    </btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
export default {
  name: 'section-cover-links',
  components: {
    Btn
  },
  computed: {
    ...mapGetters(['docs', 'config'])
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-cover-links
  display flex
  flex-flow column nowrap
  align-items center
  .ni-btn
    width 100%
    margin-bottom 0.25rem
    max-width 24rem
    margin 0 auto

@media screen and (min-width: 360px)
  .section-cover-links .ni-btn
    margin-bottom 0.375rem
</style>
