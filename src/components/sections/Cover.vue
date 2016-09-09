<template>
  <section id="section-cover">
    <div class="section-container">
      <h1>The Internet of Blockchains</h1>
      <div class="description">
        <p>Cosmos is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities.</p>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
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
  background url('../../assets/images/bg_cover_1136.png')
  background-size cover
  border-top 3rem solid mbg

  .section-container
    max-width 40rem
    min-height 80vh
    padding 0 1.5rem
    margin 0 auto

    text-align center
    color #fff

    display flex
    flex-flow column
    justify-content center
    align-items center
    align-content center

    h1, .description
      text-shadow #000 0 0 1rem
    h1
      font-size 2rem
      line-height 1.25
      margin-bottom 2rem

    .description
      font-size 1rem
      line-height 1.75
      letter-spacing 0.025rem
      color hsl(0,0,75%)

@media screen and (min-width: 360px)
  #section-cover
    .section-container
      padding 0 2rem

@media screen and (min-width:414px)
  #section-cover
    .section-container
      padding-left 2rem
      padding-right 2rem

      h1
        font-size 2.5rem
        margin-bottom 3rem

      .description
        font-size 1.125rem

@media screen and (min-width: 720px)
  #section-cover
    .section-container
      .description
        font-size 1.25rem

@media screen and (min-width: 360px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1280.png')

@media screen and (min-width: 375px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1334.png')

@media screen and (min-width: 414px)
  #section-cover
    background-image url('../../assets/images/bg_cover_1920.png')

@media screen and (min-width: 768px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2048.png')

@media screen and (min-width: 800px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2560_1600.png')

@media screen and (min-width: 1366px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2732_2048.png')

@media screen and (min-width: 1440px)
  #section-cover
    background-image url('../../assets/images/bg_cover_2880_1800.png')

@media screen and (min-width: 1441px)
  #section-cover
    background-image url('../../assets/images/bg_cover.png')
</style>
