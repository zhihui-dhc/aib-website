<template>
  <div>
    <section class="section-cover">
      <div class="section-container" @click="scrollDown"></div>
    </section>
    <div class="home-text"></div>
  </div>
</template>

<script>
import scrollTo from 'scroll-to'

export default {
  data () {
    return {
      coverImage: require('../assets/images/cover_image.png')
    }
  },
  methods: {
    scrollDown () {
      let y = document.querySelector('.home-text').offsetTop - 48 + 8
      scrollTo(0, y, { duration: 666 })
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-cover
  overflow hidden
  height 85vh
  padding-top 4.5rem

  display flex
  align-items center
  justify-content center

  .section-container
    background url('../assets/images/cover_image.png') center center
    width 100vw
    height 100vh
    background-size cover
    cursor pointer
    
@media screen and (min-width: 960px)
  .section-cover
    height 100vh
</style>
