<template>
  <section id="section-cover">
    <div class="section-container" @click="scrollDown">
      <!--<div id="logo-slash"></div>-->
      <h1 id="cover-title"><img src="../../assets/images/cosmos_logo_m.png" title="Cosmos"></h1>
      <h2 id="cover-subtitle">Internet of Blockchains</h1>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    scrollDown () {
      let height = $('#home-text').offset().top - 48
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
  overflow hidden
  min-height 85vh

  display flex
  align-items center
  justify-content center

  .section-container
    width 15rem
    height 15rem
    border 1px solid hsl(0,0,75%)
    border-radius 15rem
    margin-top 3rem

    display flex
    flex-flow column
    justify-content center
    align-items center

    position relative

    background mbg
    box-shadow inset hsl(0,0,95%) 0 0 2rem

    transition 100ms ease all

    &:hover
      border-color link
      cursor pointer

    &:before
      content ''
      width 16rem
      height 16rem
      border 0.5rem solid hsl(0,0,88)
      border-radius 16rem

      position absolute
      top 50%
      left 50%
      margin-left -8rem - 0.5rem
      margin-top -8rem - 0.5rem

      box-shadow hsl(0,0,95%) 0 0 6rem 2rem

    &:after
      content ''
      width 32rem
      height 32rem
      border 1rem solid hsl(0,0,95)
      border-radius 32rem

      position absolute
      top 50%
      left 50%
      margin-left -16rem - 1rem
      margin-top -16rem - 1rem

      box-shadow hsl(0,0,95%) 0 0 6rem 2rem

#logo-slash
  width 24rem
  height 2rem
  background bc

  position absolute
  top 50%
  left 50%

  margin-left -12rem
  margin-top -1rem

  transform rotate(-45deg)

  z-index -1

#cover-title img
  height 1.8rem

#cover-subtitle
  text-align center
  font-size 0.9rem
  color txt

@media screen and (min-width:720px)
  #section-cover
    .section-container
      width 15rem * 1.5
      height 15rem * 1.5
      border-radius 15rem * 1.5
      &:before
        width 16rem * 1.5
        height 16rem * 1.5
        border-radius 16rem * 1.5
        margin-left -8rem * 1.5 - 0.5rem
        margin-top -8rem * 1.5 - 0.5rem
      &:after
        width 32rem * 1.5
        height 32rem * 1.5
        border-radius 32rem
        margin-left -16rem * 1.5 - 1rem
        margin-top -16rem * 1.5 - 1rem

  #logo-slash
    width 24rem * 1.5
    margin-left -12rem * 1.5
    margin-top -1rem * 1.5

  #cover-title img
    height 1.8rem * 1.25

  #cover-subtitle
    font-size 0.9rem * 1.25

@media screen and (min-width:1200px)
  #section-cover
    height 100vh

@media screen and (min-width: 1440px)
  #section-cover
    .section-container
      width 15rem * 2
      height 15rem * 2
      border-radius 15rem * 2
      &:before
        width 16rem * 2
        height 16rem * 2
        border-radius 16rem * 2
        margin-left -8rem * 2 - 0.5rem
        margin-top -8rem * 2 - 0.5rem
      &:after
        width 32rem * 2
        height 32rem * 2
        border-radius 32rem
        margin-left -16rem * 2 - 1rem
        margin-top -16rem * 2 - 1rem

  #logo-slash
    width 24rem * 2
    margin-left -12rem * 2

  #cover-title img
    height 1.8rem * 1.5

  #cover-subtitle
    font-size 1rem * 1.5
</style>
