<template>
  <section class="section-home-cover">
    <img class="section-home-logo" src="../assets/images/bg-cover.png">
    <div class="section-container">
      <section-cover-alert></section-cover-alert>
      <h1><img src="../assets/images/cosmos-logo-white-alpha.png"></h1>
      <p class="tagline">Internet of Blockchains</p>
      <p class="introduction">Cosmos is a network and a framework for interoperability between blockchains.</p>
      <div class="btns">
        <btn
          type="link"
          to="/whitepaper"
          size="lg"
          icon="file-text-o"
          value="Whitepaper">
        </btn>
        <btn
          type="anchor"
          href="https://cosmos.rocket.chat"
          size="lg"
          icon="comments-o"
          theme="alpha-black"
          target="_blank"
          value="Chat on Rocket">
        </btn>
      </div>
      <p class="source"><i class="fa fa-github"></i> View source code on <a href="https://github.com/cosmos" target="_blank">GitHub</a></p>
    </div>
  </section>
</template>

<script>
import SectionCoverAlert from './SectionCoverAlert'
import Btn from '@nylira/vue-button'
export default {
  components: {
    SectionCoverAlert,
    Btn
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-home-cover
  background #111
  position relative
  border-bottom 1px solid lighten(mcolor, 10%)
  margin-top -3rem

  .section-container
    margin-top 3rem
    padding 2*x 1.5*x
    position relative
    z-index 5

  h1
    text-transform uppercase
    color hsl(0,0,100%)
    font-weight 600
    line-height 1
    font-size 2.75*x
    letter-spacing 0.66rem
    margin-bottom 0.5*x
    img
      height 3rem
      opacity 0.9

  .tagline
    color hsl(0,0,50%)
    letter-spacing 0.055rem
    text-transform uppercase
    font-weight 500
    margin-bottom 2rem

  .introduction
    color hsl(0,0,75%)
    max-width 20*x
    font-size 1.25*x
    margin-bottom 3*x

  .btns
    margin-bottom x
    .ni-btn
      width 100%
      margin-bottom 0.5*x
      max-width 18*x

  .source
    color hsl(0,0,50%)
    i.fa
      padding-right 0.25rem
    a
      color hsl(0,0,75%)
      font-weight 500

.section-home-logo
  display none

@media screen and (min-width: 360px)
  .section-home-cover .section-container
    padding 3*x 1.75*x

@media screen and (min-width: 414px)
  .section-home-cover .section-container
    padding 3*x 2.25*x

    h1
      font-size 3*x
    .tagline
      font-size 1.095*x

@media screen and (min-width: 768px)
  .section-home-cover .section-container
    padding 4*x 2*x
    max-width 640px
    margin-left auto
    margin-right auto

    .introduction
      font-size 1.5*x
      max-width 28*x

    .btns
      margin-bottom 1.5*x
      display flex
      flex-flow row nowrap
      max-width 32*x
      .ni-btn
        margin 0
        margin-right x

  .section-home-cover
    overflow hidden
    
  .section-home-logo
    display block
    width 80vw
    height 80vw
    position absolute
    top -2.5vw
    right -20vw
    opacity 0.15

@media screen and (min-width: 1024px)
  .section-home-cover .section-container
    max-width 900px
    .tagline
      margin-bottom 3*x
    .introduction
      margin-bottom 4*x

  .section-home-logo
    top -7.5vw
    right -20vw

@media screen and (min-width: 1280px)
  .section-home-cover .section-container
    padding 5*x 2*x 6*x
    max-width 1080px

  .section-home-logo
    width 70vw
    height 70vw

@media screen and (min-width: 1680px)
  .section-home-logo
    top -15vw
    right -15vw
</style>
