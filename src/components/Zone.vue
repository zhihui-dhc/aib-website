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

.wrapper
  width 100*s
  height 40*s
  position relative

.zone
  background #fff
  border 1.2*s solid mcolor
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

.one-zone
  display block

.two-zones
  .zone-one
    left 25%

  .zone-two
    left 75%
    border-color lighten(mcolor, 33%)
    color lighten(mcolor, 33%)

  .data-bundle
    position absolute
    top 50%
    left 50%

    margin-left -10*s

.three-zones
  zone-size = 24*s

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

  .zone-one
    left 10%

  .zone-two
    left 50%

  .zone-three
    left 90%

  .data-bundle
    top 50%
    left 10%
</style>
