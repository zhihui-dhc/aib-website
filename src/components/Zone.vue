<template>
<div class="gfx-wrapper">
  <div class="one-hub" template v-if="type === 'one-zone'">
    <cosmos-hub hub-name="Zone"></cosmos-hub>
  </div>
  <div class="two-hubs" v-if="type === 'two-zones'">
    <cosmos-hub id="two-hubs-one" hub-name="Zone 1"></cosmos-hub>
    <data-bundle reversed="true"></data-bundle>
    <cosmos-hub id="two-hubs-two" hub-name="Zone 2"></cosmos-hub>
  </div>
  <div class="three-hubs" template v-if="type === 'three-zones'">
    <cosmos-hub class="three-hubs-one" hub-name="EVM 1.0"></cosmos-hub>
    <arrow></arrow>
    <cosmos-hub class="three-hubs-two" hub-name="EVM 2.0"></cosmos-hub>
    <cosmos-hub class="three-hubs-three" hub-name="EVM 3.0"></cosmos-hub>
  </div>
</div>
</template>

<script>
import CosmosHub from './CosmosHub.vue'
import DataBundle from './DataBundleAlt.vue'
import Arrow from './Arrow.vue'
export default {
  components: {
    CosmosHub,
    DataBundle,
    Arrow
  },
  props: ['type']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

bdw = 0.4*s
bkw = 1.5*s

.two-hubs
  #two-hubs-one .hub
    left 15%

  #two-hubs-two .hub
    left 85%
    border-color lighten(mcolor, 50%)
    color lighten(mcolor, 33%)
    &:before
      border-color lighten(mcolor,33%)

  .data-bundle
    position absolute
    top 50%
    left 30%

.three-hubs
  hub-size = 25*s

  .hub
    width hub-size
    height hub-size
    margin-top -0.5*hub-size
    margin-left -0.5*hub-size
    border-radius 0.5*hub-size
    padding 0 x

    line-height 1.0
    font-weight normal

    border-color eth-color

    &:before
      width hub-size
      height hub-size

      border-radius hub-size
      border-color eth-color

      margin-left -1 * bdw
      margin-top -1 * bdw

  #three-hubs-one
    left 7.5%

  #three-hubs-two
    left 50%

  #three-hubs-three
    left 92.5%

  .data-bundle
    top 50%
    left 10%
</style>
