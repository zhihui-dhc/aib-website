<template>
  <section id="section-cover">
    <div class="section-container">
      <h1 id="cover-title"><span>The Internet of Blockchains</span></h1>
      <div id="cover-description"><span>
        <strong>Cosmos</strong> is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities.
      </span></div>
      <div id="cover-countdown">
        <countdown-detailed></countdown-detailed>
      </div>
    </div>
  </section>
</template>

<script>
import CountdownDetailed from '../partials/CountdownDetailed.vue'
import $ from 'jquery'

export default {
  components: {
    CountdownDetailed
  },
  methods: {
    scrollDown () {
      let height = $('#walkthrough-1').offset().top - 48
      $('html, body').animate({ scrollTop: height }, 666)
    },
    viewStep (id) {
      let scrollSpeed = 666
      let height = $(id).offset().top
      if (id !== '#walkthrough') { height -= 48 }
      $('html, body').animate({ scrollTop: height }, scrollSpeed)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#section-cover
  background-color #000
  background-size cover
  border-top 3rem solid mbg

  .section-container
    max-width 40rem
    min-height 80vh
    padding 0 1.5rem
    margin 0 auto

    text-align center

    display flex
    flex-flow column
    justify-content center
    align-items center
    align-content center

#cover-title span
#cover-description span
#cover-countdown span
  background hsla(0,0,0, 0.25)

#cover-title
#cover-description
  margin-bottom 2rem

#cover-title
  span
    color hsla(0,0,100%,0.93)
    font-size 2rem
    line-height 1.25
    margin-bottom 2rem

#cover-description span
#cover-countdown span
  font-size 1rem
  line-height 1.8
  letter-spacing 0.04rem
  color hsl(0,0,78%)
  color hsl(mhue,msat,60%)
  strong
    font-weight 500
    text-transform uppercase

@media screen and (min-width: 360px)
  #section-cover
    .section-container
      padding 0 1.75rem

  #cover-title
  #cover-description
    margin-bottom 3rem

@media screen and (min-width:414px)
  #section-cover
    .section-container
      padding-left 2rem
      padding-right 2rem

  #cover-title
    margin-bottom 3rem
    span
      font-size 2.5rem

  #cover-description span
  #cover-countdown span
    font-size 1.125rem

@media screen and (min-width: 720px)
  #cover-description span
  #cover-countdown span
    font-size 1.25rem

  #cover-description
    margin-bottom 4.5rem

@media screen and (max-width: 359px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1136.jpg')

@media screen and (min-width: 360px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1280.jpg')

@media screen and (min-width: 375px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1334.jpg')

@media screen and (min-width: 414px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1920.jpg')

@media screen and (min-width: 768px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2048.jpg')

    .section-container
      min-height 600px
      height 80vh

@media screen and (min-width: 800px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2560_1600.jpg')

@media screen and (min-width: 1366px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2732_2048.jpg')

@media screen and (min-width: 1440px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2880_1800.jpg')

@media screen and (min-width: 1441px)
  #section-cover
    background-image url('../../assets/images/bg_cover.jpg')
</style>
