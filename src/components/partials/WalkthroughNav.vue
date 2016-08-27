<template>
  <nav class="walkthrough">
    <a class="btn-walkthrough" @click="viewTop" id="walkthrough-top" >Top</a>
    <a class="btn-walkthrough"  @click="viewStep('#walkthrough-1')"
      v-bind:class="{ 'btn-walkthrough-key': activeOne }">I</a>
    <a class="btn-walkthrough"  @click="viewStep('#walkthrough-2')"
      v-bind:class="{ 'btn-walkthrough-key': activeTwo }">II</a>
    <a class="btn-walkthrough"  @click="viewStep('#walkthrough-3')"
      v-bind:class="{ 'btn-walkthrough-key': activeThree }">III</a>
    <a class="btn-walkthrough"  @click="viewStep('#walkthrough-4')"
      v-bind:class="{ 'btn-walkthrough-key': activeFour }">IV</a>
    <a class="btn-walkthrough"  @click="viewStep('#walkthrough-5')"
      v-bind:class="{ 'btn-walkthrough-key': activeFive }">V</a>
  </nav>
</template>

<script>
import $ from 'jquery'
const scrollSpeed = 666

export default {
  computed: {
    activeOne () { if (this.step === '1') { return true } },
    activeTwo () { if (this.step === '2') { return true } },
    activeThree () { if (this.step === '3') { return true } },
    activeFour () { if (this.step === '4') { return true } },
    activeFive () { if (this.step === '5') { return true } },
    activeSix () { if (this.step === '6') { return true } }
  },
  methods: {
    viewTop () {
      let height = $('body').offset().top
      $('html, body').animate({ scrollTop: height }, scrollSpeed)
    },
    viewStep (id) {
      let height = $(id).offset().top
      if (id !== '#walkthrough') { height -= 48 }
      $('html, body').animate({ scrollTop: height }, scrollSpeed)
    }
  },
  props: ['step']
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
.walkthrough
  display flex
  position relative
  z-index 100
  background #fff

  a.btn-walkthrough
    flex 1
    line-height 3*x

    text-align center
    color lighten(light, 50%)

    cursor pointer

    &#walkthrough-top
      width auto
      padding 0 0.25*x

    &:hover
      color link

    &.active
      background #fff
      color txt
      font-weight bold

@media screen and (min-width: 360px)
  .walkthrough
    a.btn-walkthrough
      line-height 3*x
</style>
