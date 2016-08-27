<template>
<section class="section-cover">
  <div class="blockchain" @click="scrollDown">
    <h1>Cosmos</h1>
    <h2>the network of blockchains</h2>
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
  justify-content center
  align-items center
  overflow hidden

b1c = hsl(mhue,0%,75%)
b2c = hsl(mhue,0%,93%)
b3c = hsl(mhue,0%,93%)

hub-size = 14*x
bdw = 0.005 * hub-size
bkw = 0.025 * hub-size

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

  border bdw solid b1c

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

    border-radius 0.5*hub-size
    border bkw solid b2c

    margin-left -1 * bdw
    margin-top -1 * bdw

    transform-origin 50% 50%
    transform scale(1.12)

    cursor pointer

    transition 0.3s ease-in-out border-color

  &:after
    content ''
    box-sizing border-box
    display block
    position absolute
    top 0
    left 0
    width hub-size
    height hub-size

    border-radius 0.5*hub-size
    border bdw solid b3c

    margin-left -1 * bdw
    margin-top -1 * bdw

    transform-origin 50% 50%
    transform scale(2)

    cursor pointer

    transition 0.3s ease-in-out border-color

  &:hover
    border-color lighten(mcolor, 85%)
    &:before
      border-color lighten(mcolor, 85%)
    &:after
      border-color lighten(mcolor, 85%)

@media screen and (min-width: 414px)
  hub-size = 20*x
  bdw = 0.005 * hub-size
  bkw = 0.025 * hub-size

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size
    border bdw solid b1c

    &:before
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bkw solid b2c
      margin-left -1 * bdw
      margin-top -1 * bdw

    &:after
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bdw solid b3c
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 768px)
  hub-size = 30*x
  bdw = 0.005 * hub-size
  bkw = 0.025 * hub-size

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size
    border bdw solid b1c

    &:before
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bkw solid b2c
      margin-left -1 * bdw
      margin-top -1 * bdw

    &:after
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bdw solid b3c
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 1800px)
  hub-size = 40*x
  bdw = 0.005 * hub-size
  bkw = 0.025 * hub-size

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size
    border bdw solid b1c

    &:before
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bkw solid b2c
      margin-left -1 * bdw
      margin-top -1 * bdw

    &:after
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bdw solid b3c
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 2400px)
  hub-size = 60*x
  bdw = 0.005 * hub-size
  bkw = 0.025 * hub-size

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size
    border bdw solid b1c

    &:before
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bkw solid b2c
      margin-left -1 * bdw
      margin-top -1 * bdw

    &:after
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bdw solid b3c
      margin-left -1 * bdw
      margin-top -1 * bdw

@media screen and (min-width: 3600px)
  hub-size = 80*x
  bdw = 0.005 * hub-size
  bkw = 0.025 * hub-size

  h1
    font-size 0.1 * hub-size

  h2
    font-size 0.04 * hub-size

  .blockchain
    width hub-size
    height hub-size
    border-radius 0.5*hub-size
    border bdw solid b1c

    &:before
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bkw solid b2c
      margin-left -1 * bdw
      margin-top -1 * bdw

    &:after
      width hub-size
      height hub-size
      border-radius 0.5*hub-size
      border bdw solid b3c
      margin-left -1 * bdw
      margin-top -1 * bdw
</style>
