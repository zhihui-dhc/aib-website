<template>
<div class="hub-wrapper">
  <div class="hub" :class="{ 'light-color': lightColor}">{{ hubName }}</div>
  <template v-for="spoke in spokes">
    <div class="spoke {{ spoke.key }} {{ spoke.color }}">
      {{ spoke.value }}
    </div>
    <data-bundle streamwidth="thin" :class="{ 'light-color': lightColor}"></data-bundle>
  </template>
</div>
</template>

<script>
import DataBundle from './DataBundle.vue'
export default {
  components: {
    DataBundle
  },
  props: ['spokes', 'hub-name', 'light-color']
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

bdw = 0.4*sm
bkw = 1.5*sm

.hub-wrapper
  width 100*sm
  height 100*sm

.hub, .spoke
  border-width bdw

hub-size = 40*sm
.hub
  width hub-size
  height hub-size
  margin-top -0.5*hub-size
  margin-left -0.5*hub-size
  border-radius 0.5*hub-size

  font-size 7*sm
  line-height 1.25
  padding 0 5*sm

  &:before
    width hub-size
    height hub-size

    border-radius hub-size
    border-width bkw

    margin-left -1 * bdw
    margin-top -1 * bdw


.hub.light-color
  color lighten(mcolor, 33%)
  border-color lighten(mcolor, 33%)

spoke-size = 22*sm
.spoke
  width spoke-size
  height spoke-size
  margin-top -0.5*spoke-size
  margin-left -0.5*spoke-size
  border-radius 0.5*spoke-size

  font-size 5*sm
  &:before
    width spoke-size
    height spoke-size

    border-radius spoke-size
    border-width bkw

    margin-left -1 * bdw
    margin-top -1 * bdw

.spoke-one, .spoke-one + .data-bundle
  left 70*sm
  top 15.4*sm
.spoke-two, .spoke-two + .data-bundle
  left 30*sm
  top 15.4*sm
.spoke-three, .spoke-three + .data-bundle
  left 10*sm
  top 50*sm
.spoke-four, .spoke-four + .data-bundle
  left 30*sm
  top 84.6*sm
.spoke-five, .spoke-five + .data-bundle
  left 70*sm
  top 84.6*sm
.spoke-six, .spoke-six + .data-bundle
  left 90*sm
  top 50*sm
</style>
