<template>
<div class="data-bundle">
  <div class="datastream">
    <p>&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;&rarr;&nbsp;</p>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

db-width = 80*s
db-height = 6*s

.data-bundle
  position absolute
  transform-origin 0% 50%
  margin-top -0.5*db-height

.datastream
  overflow hidden
  position relative
  color #fff
  height db-height
  width db-width
  background mcolor
  background eth-color

  p
    position absolute
    width 100%
    height 100%

    font-size db-height
    line-height 1

    animation scroll-right 16s linear infinite

@keyframes scroll-right
  0%
    transform translateX(-100%)
  100%
    transform translateX(0%)
</style>
