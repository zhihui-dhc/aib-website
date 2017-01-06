<template>
  <div>
    <section class="section-cover">
      <div class="section-container" @click="scrollDown">
        <h1><img src="../assets/images/cosmos_logo_m.png" alt="Cosmos"></h1>
        <p>{{ $t('site.internetOfBlockchains') }}</p>
      </div>
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

    display flex
    flex-flow column nowrap
    align-content center
    justify-content center
    align-items center

    h1
      margin-top 1.5rem
      img
        width 10rem
        vertical-align top

    p
      margin-top 0.5rem
      color dim
      font-size 0.75rem
      line-height 1
      text-transform uppercase
    
@media screen and (min-width: 360px)
  .section-cover
    .section-container
      h1 img
        width 12rem
      p
        font-size 0.875rem

@media screen and (min-width: 400px)
  .section-cover
    .section-container
      h1 img
        width 13rem
      p
        font-size 1rem

@media screen and (min-width: 720px)
  .section-cover
    .section-container
      h1 img
        width 16rem
      p
        margin-top 0.75rem
        font-size 1.2rem

@media screen and (min-width: 1200px)
  .section-cover
    .section-container
      h1 img
        width 18rem
      p
        font-size 1.4rem


@media screen and (min-width: 960px)
  .section-cover
    height 100vh
</style>
