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
      let height = $('#walkthrough-1').offset().top
      $('html, body').animate({ scrollTop: height }, 666)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-cover
  width 100vw
  height 100vh

  display flex
  flex-flow column
  justify-content center
  align-items center


hub-size = 16*x
bdw = 2px
bkw = 10px

h1
  font-size 0.125 * hub-size
  text-transform uppercase
  font-weight bold
  letter-spacing 0.25em
  line-height 1.25

h2
  font-size 0.05 * hub-size
  color dim

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
    border bkw solid bc

    margin-left -1 * bdw
    margin-top -1 * bdw

    transform-origin 50% 50%
    transform scale(1.12)
    // animation rotate-blocks 30s ease infinite

    cursor pointer

    transition 0.3s ease-in-out border-color

  &:hover
    border-color dim
    &:before
      border-color light

@media screen and (min-width: 375px) and (min-height: 375px)
  hub-size = 19*x
  bdw = 2px

  h1
    font-size 0.125 * hub-size

  h2
    font-size 0.05 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw solid bc
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 768px) and (min-height: 768px)
  hub-size = 32*x
  bdw = 2px

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      transform scale(1.08)
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw solid bc
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 800px) and (min-height: 800px)
  hub-size = 36*x
  bdw = 2px

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw solid bc
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 1024px) and (min-height: 1024px)
  hub-size = 44*x
  bdw = 2px

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size

    &:before
      width hub-size
      height hub-size
      border-radius hub-size
      border bkw solid bc
      margin-left -1 * bdw
      margin-top -1 * bdw
</style>
