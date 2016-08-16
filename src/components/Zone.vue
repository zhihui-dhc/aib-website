<template>
<div class="wrapper">
  <div class="one-zone" template v-if="type === 'one-zone'">
    <div class="zone zone-one">Zone</div>
  </div>
  <div class="two-zones" v-if="type === 'two-zones'">
    <div class="zone zone-one">Zone 1</div>
    <data-bundle reversed="true"></data-bundle>
    <div class="zone zone-two">Zone 2</div>
  </div>
  <div class="three-zones" template v-if="type === 'three-zones'">
    <div class="zone zone-one">EVM 1.0</div>
    <arrow></arrow>
    <div class="zone zone-two">EVM 2.0</div>
    <div class="zone zone-three">EVM 3.0</div>
  </div>
</div>
</template>

<script>
import DataBundle from './DataBundleAlt.vue'
import Arrow from './Arrow.vue'
export default {
  components: {
    DataBundle,
    Arrow
  },
  props: ['type']
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

s = 5px
bdw = 0.4*s
bkw = 1.5*s

.wrapper
  width 100*s
  height 40*s
  position relative

.zone
  background #fff
  border bdw solid mcolor
  z-index 100

zone-size = 32*s
.zone
  width zone-size
  height zone-size
  margin-top -0.5*zone-size
  margin-left -0.5*zone-size
  border-radius 0.5*zone-size

  font-size 5*s
  line-height 1.25
  padding 0 s
  font-weight bold

  display flex
  justify-content center
  align-items center

  position absolute
  top 50%
  left 50%

  color mcolor

  &:before
    content ''
    box-sizing border-box
    display block
    position absolute
    top 0
    left 0
    width zone-size
    height zone-size

    border-radius zone-size
    border bkw dashed mcolor

    margin-left -1 * bdw
    margin-top -1 * bdw

    transform-origin 50% 50%
    animation rotate-blocks 30s ease infinite

.one-zone
  display block

.two-zones
  .zone-one
    left 15%

  .zone-two
    left 85%
    border-color lighten(mcolor, 50%)
    color lighten(mcolor, 33%)
    &:before
      border-color lighten(mcolor,33%)

  .data-bundle
    position absolute
    top 50%
    left 30%

.three-zones
  zone-size = 25*s

  .zone
    width zone-size
    height zone-size
    margin-top -0.5*zone-size
    margin-left -0.5*zone-size
    border-radius 0.5*zone-size
    padding 0 x

    line-height 1.0
    font-weight normal

    border-color eth-color

    &:before
      width zone-size
      height zone-size

      border-radius zone-size
      border-color eth-color

      margin-left -1 * bdw
      margin-top -1 * bdw

  .zone-one
    left 7.5%

  .zone-two
    left 50%

  .zone-three
    left 92.5%

  .data-bundle
    top 50%
    left 10%
</style>
