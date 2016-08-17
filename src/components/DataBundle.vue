<template>
<div class="data-bundle" v-bind:style="bundleStyle">
  <div class="datastream datastream-top" v-bind:style="streamStyle">
    <p v-bind:style="pStyle">&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;</p>
  </div>
  <div class="datastream datastream-bottom" v-bind:style="streamStyle">
    <p v-bind:style="pStyle">&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;&larr;&nbsp;</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      smallMult: 0.3,
      hexString: '2b12fcf1b09288fcaff797d71e950e71ae42b91e8bdb2304758dfcffc2b620e3'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

db-width = 30*s
db-height = 6*s

.data-bundle
  position absolute
  transform-origin 0% 50%
  margin-top -0.5*db-height

.datastream
  overflow hidden
  position relative
  color #fff
  height 0.5*db-height
  width db-width
  p
    position absolute
    width 100%
    height 100%

    font-size 3*s
    line-height 1

  &.datastream-top
    background lighten(mcolor, 5%)
    p
      animation scroll-right 8s linear infinite, glow 2.5s infinite
      color lighten(mcolor, 40%)
  &.datastream-bottom
    background mcolor
    p
      animation scroll-left 8s linear infinite, glow-alternate 2.5s infinite
      color lighten(mcolor, 90%)

.data-bundle.light-color
  .datastream.datastream-bottom
    background lighten(mcolor, 33%)

@keyframes scroll-left
  0%
    transform translateX(0%)
  100%
    transform translateX(-100%)

@keyframes scroll-right
  0%
    transform translateX(-100%)
  100%
    transform translateX(0%)
@keyframes glow
  0%
    color lighten(mcolor, 40%)
  45%
    color lighten(mcolor, 90%)
  55%
    color lighten(mcolor, 90%)
  100%
    color lighten(mcolor, 40%)
@keyframes glow-alternate
  0%
    color lighten(mcolor, 90%)
  45%
    color lighten(mcolor, 40%)
  55%
    color lighten(mcolor, 40%)
  100k
    color lighten(mcolor, 90%)
</style>
