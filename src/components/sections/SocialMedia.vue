<template>
  <section>
    <nav class="three-col-links">
      <a href="https://www.reddit.com/r/thecosmos" target="_blank">
        <img src="../../assets/images/logo-bw-reddit.png" alt="Reddit">
        <span class="label">r/thecosmos</span>
      </a>
      <a href="http://forum.tendermint.com:3000/" target="_blank">
        <img src="../../assets/images/logo-bw-slack.png" alt="Slack">
        <span class="label">Tendermint</span>
      </a>
      <a href="https://twitter.com/cosmos_hq" target="_blank">
        <img src="../../assets/images/logo-bw-twitter.png" alt="Twitter">
        <span class="label">@cosmos_hq</span>
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
  border-top dbd

.three-col-links
  display flex
  justify-content center

  a
    display flex
    cursor pointer
    padding 1.5rem

    img
      width 2rem
      height 2rem
      opacity 0.666

    .label
      display none
      padding-left 0.333rem
      color dim

    &:hover
      text-decoration none
      img
        opacity 1
      .label
        color txt

@media screen and (min-width: 360px)
  .three-col-links
    a
      img
        width 3rem
        height 3rem
    
@media screen and (min-width: 720px)
  .three-col-links
    padding 3rem 0
    a
      display flex
      align-items center
      .label
        display block

@media screen and (min-width: 1200px)
  .three-col-links
    a
      padding-left 3rem
      padding-right 3rem
</style>
