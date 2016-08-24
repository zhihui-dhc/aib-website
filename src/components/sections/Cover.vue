<template>
<section class="section-cover">
  <div class="blockchain" @click="scrollDown">
    <h1>Cosmos</h1>
    <h2>a network of distributed ledgers</h2>
  </div>
</section>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    scrollDown () {
      console.log('scrolling down!')
      let height = $('#scroll-to-here').offset().top - 48
      $('html, body').animate({ scrollTop: height }, 666)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-cover
  width 100vw
  height 80vh
  min-height 480px
  max-height 133.33vw
  display flex
  flex-flow column
  justify-content center
  align-items center

h1
  text-transform uppercase
  font-size 2.5*x
  font-weight bold
  letter-spacing 0.25em
  line-height 1.25

h2
  font-size x
  color dim

hub-size = 300px
bdw = 2px
bkw = 10px

.blockchain
  width hub-size
  height hub-size
  border-radius 0.5*hub-size

  display flex
  justify-content center
  align-items center
  flex-flow column

  position relative

  border bdw solid bc

  transition 0.3s ease-in-out border-color

  &:before
    content ''
    box-sizing border-box
    display block
    position absolute
    top 0
    left 0
    width hub-size
    height hub-size

    border-radius hub-size
    border bkw dashed bc

    margin-left -1 * bdw
    margin-top -1 * bdw

    transform-origin 50% 50%
    animation rotate-blocks 30s ease infinite

    cursor pointer

    transition 0.3s ease-in-out border-color

  &:hover
    border-color lighten(mcolor, 50%)
    &:before
      border-color lighten(mcolor, 50%)

@media screen and (min-width: 560px)
  hub-size = 400px
  bdw = 2px
  bkw = 10px

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw dashed bc
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 960px)
  hub-size = 560px
  bdw = 2px
  bkw = 15px

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw dashed bc
      margin-left -1 * bdw
      margin-top -1 * bdw
  h1
    font-size 3*x
  h2
    font-size 1.25*x

@media screen and (min-width: 1200px)
  .section-cover
    margin-top -3*x
    height 100vh
    min-height 50vw
</style>
