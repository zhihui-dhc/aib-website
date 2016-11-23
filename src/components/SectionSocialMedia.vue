<template>
  <section class="section-social-media">
    <nav>
      <a href="https://www.reddit.com/r/thecosmos" target="_blank">
        <img src="../assets/images/logo-bw-reddit.png" alt="Reddit">
        <span class="label">r/thecosmos</span>
      </a>
      <a href="http://forum.tendermint.com:3000/" target="_blank">
        <img src="../assets/images/logo-bw-slack.png" alt="Slack">
        <span class="label">Tendermint</span>
      </a>
      <a href="https://twitter.com/cosmos_hq" target="_blank">
        <img src="../assets/images/logo-bw-twitter.png" alt="Twitter">
        <span class="label">@cosmos_hq</span>
      </a>
    </nav>
  </section>
</template>

<script>
import FormEmailSignup from './FormEmailSignup'
export default {
  name: 'section-social-media',
  components: {
    FormEmailSignup
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-social-media
  nav
    border-top dbd
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
  .section-social-media
    a
      img
        width 3rem
        height 3rem
    
@media screen and (min-width: 720px)
  .section-social-media
    nav
      padding 3rem 0
    a
      display flex
      align-items center
      .label
        display block

@media screen and (min-width: 1200px)
  .section-social-media
    a
      padding-left 3rem
      padding-right 3rem
</style>
