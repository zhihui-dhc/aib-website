<template>
<div class="wrapper">
  <div class="hub">{{ hubName }}</div>

  <template v-for="spoke in spokes">
    <div class="spoke {{ spoke.key }} {{ spoke.color }}">{{ spoke.value }}</div>
    <data-bundle></data-bundle>
  </template>
</div>
</template>

<script>
import DataBundle from './DataBundle.vue'
export default {
  components: {
    DataBundle
  },
  props: ['spokes', 'hubName']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

s = 5px

.wrapper
  width 100*s
  height 100*s
  position relative

.hub, .spoke
  background #fff
  border 1.2*s solid mcolor
  z-index 100

hub-size = 32*s
.hub
  width hub-size
  height hub-size
  margin-top -0.5*hub-size
  margin-left -0.5*hub-size
  border-radius 0.5*hub-size

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

spoke-size = 20*s
.spoke
  width spoke-size
  height spoke-size
  margin-top -0.5*spoke-size
  margin-left -0.5*spoke-size
  border-radius 0.5*spoke-size

  font-size 4*s
  line-height 1

  display flex
  justify-content center
  align-items center

  position absolute

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

.spoke-one + .data-bundle
  transform rotate(120deg)
.spoke-two + .data-bundle
  transform rotate(60deg)
.spoke-three + .data-bundle
  transform rotate(0deg)
.spoke-four + .data-bundle
  transform rotate(-60deg)
.spoke-five + .data-bundle
  transform rotate(-120deg)
.spoke-six + .data-bundle
  transform rotate(-180deg)

.eth-color
  border-color eth-color
.eth-color + .data-bundle .datastream.datastream-top
  background eth-color

.btc-color
  border-color btc-color
.btc-color + .data-bundle .datastream.datastream-top
  background btc-color

.dash-color
  border-color dash-color
.dash-color + .data-bundle .datastream.datastream-top
  background dash-color

.xmr-color
  border-color xmr-color
.xmr-color + .data-bundle .datastream.datastream-top
  background xmr-color

.maid-color
  border-color maid-color
.maid-color + .data-bundle .datastream.datastream-top
  background maid-color

.doge-color
  border-color doge-color
.doge-color + .data-bundle .datastream.datastream-top
  background doge-color
</style>
