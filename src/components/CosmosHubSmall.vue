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

s = 3px
bdw = 0.4*s
bkw = 1.5*s

.hub-wrapper
  width 100*s
  height 100*s
  position relative

.hub, .spoke
  background #fff
  border-width bdw
  z-index 100

hub-size = 40*s
.hub
  width hub-size
  height hub-size
  margin-top -0.5*hub-size
  margin-left -0.5*hub-size
  border-radius 0.5*hub-size

  font-size 7*s
  line-height 1.25
  font-weight bold
  padding 0 4*s

  display flex
  justify-content center
  align-items center

  position absolute
  top 50%
  left 50%

  color mcolor
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

spoke-size = 22*s
.spoke
  width spoke-size
  height spoke-size
  margin-top -0.5*spoke-size
  margin-left -0.5*spoke-size
  border-radius 0.5*spoke-size

  font-size 5*s
  line-height 1

  display flex
  justify-content center
  align-items center

  position absolute
  &:before
    width spoke-size
    height spoke-size

    border-radius spoke-size
    border-width bkw

    margin-left -1 * bdw
    margin-top -1 * bdw

.spoke-one, .spoke-one + .data-bundle
  left 70*s
  top 15.4*s
.spoke-two, .spoke-two + .data-bundle
  left 30*s
  top 15.4*s
.spoke-three, .spoke-three + .data-bundle
  left 10*s
  top 50*s
.spoke-four, .spoke-four + .data-bundle
  left 30*s
  top 84.6*s
.spoke-five, .spoke-five + .data-bundle
  left 70*s
  top 84.6*s
.spoke-six, .spoke-six + .data-bundle
  left 90*s
  top 50*s
</style>
