<template>
  <div class="section-cover-component component">
    <section class="section-cover">
      <div class="section-container" @click="scrollDown">
        <h1><img src="../assets/images/cosmos_logo_m.png" alt="Cosmos"></h1>
        <p>{{ $t('site.internetOfBlockchains') }}</p>
      </div>
    </section>
    <div id="fundraiser-alert">
      <div class="container" @click="gotoCta">
        <span>Fundraiser starting on <strong>March 31st at 6AM PDT</strong></span>
      </div>
    </div>
    <div class="home-text"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollTo from 'scroll-to'
import moment from 'moment'
export default {
  data () {
    return {
      coverImage: require('../assets/images/cover_image.png')
    }
  },
  computed: {
    fundraiseDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let local = moment(utc).local()
      return moment(local).format('LLL')
    },
    ...mapGetters(['config'])
  },
  methods: {
    gotoCta () {
      let y = document.querySelector('#section-first-cta').offsetTop - 48 + 8
      scrollTo(0, y, { duration: 666 })
    },
    scrollDown () {
      let y = document.querySelector('.home-text').offsetTop - 48 + 8
      scrollTo(0, y, { duration: 666 })
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-cover-component
  position relative

#fundraiser-alert
  position absolute
  top 3rem
  left 0
  padding 0.5rem
  display flex
  width 100vw
  justify-content center
  .container
    width 100%
    padding 0.5rem 0.75rem
    border 1px solid bc
    background alpha(c-app-fg,50%)

    display flex
    justify-content center
    align-items center

    font-size 0.75rem
    strong
      color link
      font-weight normal

@media screen and (min-width: 360px)
  #fundraiser-alert .container
    font-size 0.875rem
    padding 0.75rem

@media screen and (min-width: 414px)
  #fundraiser-alert .container
    font-size 1rem
    padding 1rem

.section-cover
  overflow hidden
  display flex
  align-items center
  justify-content center
  background #eaeaea
  margin-top -3rem
  height 85vh

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

@media screen and (min-width: 414px)
  .section-cover
    .section-container
      h1 img
        width 13rem
      p
        font-size 1rem

@media screen and (min-width: 768px)
  .section-cover
    .section-container
      h1 img
        width 16rem
      p
        margin-top 0.75rem
        font-size 1.2rem
        
@media screen and (min-width: 1024px)
  .section-cover
    height 100vh

@media screen and (min-width: 1280px)
  .section-cover
    .section-container
      h1 img
        width 18rem
      p
        font-size 1.4rem
</style>
