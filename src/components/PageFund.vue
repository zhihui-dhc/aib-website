<template>
  <div class="page-fund page-default">
  <div class="fund-wrapper">
    <h1>{{ $t('siteFund.title') }}</h1>
    <page-fund-nav :step="step"></page-fund-nav>
    <div class="fund-steps">
      <page-fund-step1 v-show="step === 1" :user="user"></page-fund-step1>
      <page-fund-step2 v-show="step === 2" :user="user"></page-fund-step2>
      <page-fund-step3 v-show="step === 3" :user="user" :bitcoin-price="bitcoinPrice"></page-fund-step3>
      <page-fund-step4 v-show="step === 4" :user="user" :bitcoin-price="bitcoinPrice"></page-fund-step4>
    </div>
  </div>
  </div>
</template>

<script>
import PageFundNav from './PageFundNav'
import PageFundStep1 from './PageFundStep1'
import PageFundStep2 from './PageFundStep2'
import PageFundStep3 from './PageFundStep3'
import PageFundStep4 from './PageFundStep4'
export default {
  name: 'page-fund',
  components: {
    PageFundNav,
    PageFundStep1,
    PageFundStep2,
    PageFundStep3,
    PageFundStep4
  },
  computed: {
    bitcoinPrice () {
      return this.user.atoms / 27394
    }
  },
  data () {
    return {
      step: 1,
      user: {
        name: '',
        email: '',
        nationality: '',
        publicKey: '',
        atoms: 1000
      }
    }
  },
  mounted () {
    document.title = 'Purchase Atoms - Cosmos'
    let highlights = document.querySelectorAll('.highlight-on-focus')
    Array.from(highlights).map(function (el) {
      el.addEventListener('click', function () { this.select() })
    })
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.page-fund
  .fund-wrapper
    max-width 32rem
    margin 0 auto

  h1
    font-size 1.25rem
    font-weight 500
    padding 1rem 0
    text-align center

.fund-steps
  position relative

  .form-nav-progress
    position absolute
    top -1px
    right -1px

@media screen and (min-width: 360px)
  .page-fund
    h1
      font-size 1.375rem
      padding 1.25rem 0

@media screen and (min-width: 400px)
  .page-fund
    h1
      font-size 1.5rem
      padding 1.5rem 0

@media screen and (min-width: 720px)
  .page-fund
    h1
      font-size 1.75rem
      margin-bottom 1rem
</style>
