<template>
<div class="data-bundle">
  <div class="datastream datastream-top">
    <p>0101010101010101010101010101010101010101010101010</p>
  </div>
  <div class="datastream datastream-bottom">
    <p>0101010101010101010101010101010101010101010101010</p>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

s = 5px

db-width = 28*s
db-height = 8*s

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

    font-size 0.5*0.666*db-height
    line-height 0.5*db-height
    font-weight bold

  &.datastream-top
    background lighten(mcolor, 33%)
    p
      animation scroll-right 4000ms linear infinite
  &.datastream-bottom
    background mcolor
    p
      animation scroll-left 4000ms linear infinite

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
</style>
