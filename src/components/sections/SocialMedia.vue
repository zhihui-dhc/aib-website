<template>
  <section>
    <nav class="three-col-links">
      <a href="https://twitter.com/cosmos_hq">
        <span class="key">Twitter</span>
        <span class="value">@cosmos_hq</span>
      </a>
      <a href="http://forum.tendermint.com:3000/">
        <span class="key">Slack</span>
        <span class="value">Tendermint</span>
      </a>
      <a href="https://www.reddit.com/r/thecosmos">
        <span class="key">Reddit</span>
        <span class="value">r/thecosmos</span>
      </a>
    </nav>
  </section>
</template>

<script>
import EmailSignupForm from '../partials/EmailSignupForm'
import Countdown from '../partials/Countdown.vue'

export default {
  components: {
    Countdown,
    EmailSignupForm
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

section
  border-top 1px solid bc

.three-col-links
  display flex
  flex-flow column
  overflow hidden

  a
    flex 1
    margin-bottom 1px
    background #fff
    padding 0.75*x x

    display flex
    justify-content space-between

    cursor pointer

    text-decoration none
    .key
      font-weight bold
      color txt
    .value
      color light
    &:hover
      background mbg

@media screen and (min-width: 768px)
  .three-col-links
    flex-flow row
    justify-content center
    justify-content space-around

    max-width 960px
    margin 0 auto
    padding 4*x 0

    a
      flex-flow column
      align-items center
      justify-content center
      flex 1

      height 10*x
      max-width 10*x
      border-radius 10*x
      border 1px solid bc

      position relative

      &:after
        content ''
        display block
        position absolute
        top 50%
        left 50%
        margin-left -5.5*x - 6px
        margin-top -5.5*x - 6px

        width 11*x
        height 11*x
        border-radius 13*x
        border 6px solid lighten(bc, 50%)
      &:hover
        background #fff
        border-color dim
</style>
