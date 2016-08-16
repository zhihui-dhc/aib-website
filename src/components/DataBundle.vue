<template>
<div class="data-bundle" v-bind:style="bundleStyle">
  <div class="datastream datastream-top" v-bind:style="streamStyle">
    <p v-bind:style="pStyle">{{ hexString }}</p>
  </div>
  <div class="datastream datastream-bottom" v-bind:style="streamStyle">
    <p v-bind:style="pStyle">{{ hexString }}</p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    bundleStyle () {
      let mult = this.smallMult
      if (this.streamwidth === 'thin') {
        return { marginTop: -1 * mult * 8 * 5 + 'px' }
      }
    },
    streamStyle () {
      let mult = this.smallMult
      if (this.streamwidth === 'thin') {
        return { height: mult * 8 * 5 + 'px' }
      }
    },
    pStyle () {
      let mult = this.smallMult
      if (this.streamwidth === 'thin') {
        return { fontSize: mult * 0.666 * 8 * 5 + 'px' }
      }
    }
  },
  data () {
    return {
      smallMult: 0.3,
      hexString: '2b12fcf1b09288fcaff797d71e950e71ae42b91e8bdb2304758dfcffc2b620e3'
    }
  },
  props: ['streamwidth', 'light-color']
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
    line-height 1.5
    font-weight bold

  &.datastream-top
    background lighten(mcolor, 33%)
    p
      animation scroll-right 4000ms linear infinite
  &.datastream-bottom
    background mcolor
    p
      animation scroll-left 4000ms linear infinite
  &.light-color
    background lighten(mcolor, 33%)

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
</style>
