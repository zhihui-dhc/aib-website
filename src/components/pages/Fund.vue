<template>
  <div class="header-padding"></div>

  <div class="fund-wrapper">

    <h1>Purchase Atoms</h1>

    <div id="fund-steps-nav">
      <div id="step-indicator-one" class="step-indicator" :class="{'active': stepOneActive }">
        <div class="key">1</div>
      </div>
      <div id="step-indicator-two" class="step-indicator" :class="{'active': stepTwoActive }">
        <div class="key">2</div>
      </div>
      <div id="step-indicator-three" class="step-indicator" :class="{'active': stepThreeActive }">
        <div class="key">3</div>
      </div>
      <div id="step-indicator-four" class="step-indicator" :class="{'active': stepFourActive }">
        <div class="key">4</div>
      </div>
    </div>

    <div id="fund-steps">
      <dev-counter-nav :step.sync="step" min="1" max="4"></dev-counter-nav>

      <div class="fund-step" id="fund-step-one" v-show="step === 1">
        <div class="step-header">
          <h2>Customer Info</h2>
          <div class="subtitle">We need some information from you to generate a personalized bitcoin address.</div>
        </div>
        <form class="form-default" v-on:submit.prevent="goToStep(2)">
          <div class="form-group">
            <label for="cf-name">Your Name</label>
            <div class="input-group">
              <input id="cf-name" type="text" v-model="customer.name" required placeholder="Your Name" pattern=".{1,254}" title="1 to 254 characters">
            </div>
          </div><!--form group-->
          <div class="form-group">
            <label for="cf-email">Your Email</label>
            <div class="input-group">
              <input id="cf-email" type="email" v-model="customer.email" required placeholder="your@email.com" pattern=".{3,254}" title="3 to 254 characters">
            </div>
          </div><!--form group-->
          <div class="form-group">
            <label for="cf-nationality">Your Nationality</label>
            <div class="input-group">
              <custom-select id="cf-nationality" :options="countries" :empty="true" :model.sync="customer.nationality">
            </div>
          </div><!--form group-->
          <div class="form-footer">
            <div class="form-footer-left">
            </div>
            <div class="form-footer-right">
              <input type="submit" class="btn" value="Continue">
            </div>
          </div><!--form footer-->
        </form>
      </div><!--fund step-->

      <div class="fund-step" id="fund-step-two" v-show="step === 2">
        <div class="step-header">
          <h2>Wallet Setup</h2>
          <div class="subtitle">Generate your public key and paste it into the text field below.</div>
        </div>
        <form class="form-default" v-on:submit.prevent="goToStep(3)">
          <div class="form-group">
            <label>Generate Public Key</label>
            <div class="input-group">
              <a class="btn" target="_blank" href="https://google.com">
                <i class="material-icons">vpn_key</i>
                <span class="text">Open Key Generator</span>
              </a>
            </div>
          </div><!--form-group-->
          <div class="form-group">
            <label>Paste Public Key</label>
            <div class="input-group">
              <textarea required></textarea>
            </div>
          </div><!--form-group-->
          <div class="form-footer">
            <div class="form-footer-left">
            </div>
            <div class="form-footer-right">
              <input type="submit" class="btn" value="Continue">
            </div>
          </div><!--form footer-->
        </form>
      </div><!--fund step-->

      <div class="fund-step" id="fund-step-three" v-show="step === 3">
        <div class="step-header">
          <h2>Purchase Quantity</h2>
          <div class="subtitle">How many Atoms do you wish to purchase?</div>
        </div>
        <form class="form-default" v-on:submit.prevent="goToStep(4)">
          <div class="form-group">
            <label>Number of Atoms</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" v-model="customer.atoms" required min="1" max="1000000">
              <div class="input-group-addon">Atoms</div>
            </div>
          </div><!--form-group-->
          <div class="form-group">
            <label>Bitcoin Price</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" disabled :value="bitcoinPrice">
              <div class="input-group-addon">BTC</div>
            </div>
          </div><!--form-group-->
          <div class="form-footer">
            <div class="form-footer-left">
            </div>
            <div class="form-footer-right">
              <input type="submit" class="btn" value="Continue">
            </div>
          </div><!--form footer-->
        </form>
      </div><!--fund step-->

      <div class="fund-step" id="fund-step-four" v-show="step === 4">
        <div class="step-header">
          <h2>Payment</h2>
          <div class="subtitle">Make the payment to the deposit address below. Atoms will arrive in your crowdfund wallet within minutes.</div>
        </div>
        <form class="form-default" v-on:submit.prevent="goHome">
          <div class="form-group">
            <label>Deposit Address</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="text" :value="bitcoinAddress">
            </div>
          </div><!--form-group-->
          <div class="form-group">
            <label>Total Price</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" disabled :value="bitcoinPrice">
              <div class="input-group-addon">BTC</div>
            </div>
          </div><!--form-group-->
          <div class="form-footer">
            <div class="form-footer-left">
            </div>
            <div class="form-footer-right">
              <input type="submit" class="btn" value="Return Home">
            </div>
          </div><!--form footer-->
        </form>
      </div><!--fund step-->

    </div>
  </div>
</template>

<script>
import CustomSelect from '../forms/CustomSelect.vue'
import ExchangeRateCalculator from '../partials/ExchangeRateCalculator.vue'
import DevCounterNav from '../forms/DevCounterNav.vue'

import $ from 'jquery'

export default {
  components: {
    CustomSelect,
    DevCounterNav,
    ExchangeRateCalculator
  },
  computed: {
    bitcoinPrice () {
      return this.customer.atoms / 27394
    },
    stepOneActive () { if (this.step === 1) { return true } },
    stepTwoActive () { if (this.step === 2) { return true } },
    stepThreeActive () { if (this.step === 3) { return true } },
    stepFourActive () { if (this.step === 4) { return true } }
  },
  data () {
    return {
      bitcoinAddress: '1NAfx5GEZHR8t69LjxTeShPP4XXaxeUqQw',
      step: 1,
      customer: {
        name: '',
        email: '',
        nationality: '',
        publicKey: '',
        atoms: 1000
      }
    }
  },
  methods: {
    goToStep (step) {
      this.step = step
      console.log(JSON.stringify(this.customer))
    },
    goHome () {
      this.$route.router.go('/')
    }
  },
  ready () {
    $('.highlight-on-focus').click(function () {
      $(this).select()
    })
  },
  vuex: {
    getters: {
      countries: state => state.countries.countries
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.fund-wrapper
  max-width 32rem
  margin 0 auto

h1
  font-size 2rem
  line-height 1.25
  margin-bottom 2rem
  margin-top 2rem
  text-align center

#fund-steps-nav
  margin 0 0 1.5rem

  display flex
  justify-content space-around

  position relative

  &:after
    content ''
    width 100%
    height 0
    border-top 2px solid bc
    position absolute
    top 50%
    left 0
    margin-top -1px
    z-index -1

  .step-indicator
    color light
    border 1px solid bc
    background mbg

    text-align center
    line-height 2*x - 2px
    width 2rem
    border-radius 2rem

    position relative

    transition 300ms ease all

    user select none

    &.active
      color txt
      background #fff
      font-weight bold
      border-color ibc

#fund-steps
  background #fff
  padding 1rem
  position relative
  margin 0 auto

  .dev-counter-nav
    position absolute
    top -1px
    right -1px

  .step-header
    border-bottom 1px solid bc
    padding 1rem 0
    margin 0 0 1rem

    h2
      font-size 1.5rem
      line-height 1.25
      margin 0 0 0.75rem

    .subtitle
      color dim
      margin 0 0 0.5rem

@media screen and (min-width: 360px)
  #fund-steps
    padding-left 1.25rem
    padding-right 1.25rem

@media screen and (min-width: 414px)
  #fund-steps
    padding-left 1.5rem
    padding-right 1.5rem

@media screen and (min-width: 720px)
  h1
    margin 3rem 0

  #fund-steps
    border 1px solid bc
    padding 1rem 2rem
    max-width 36rem
    margin-bottom 3rem

@media screen and (min-width: 1200px)
  h1
    font-size 2.5rem
</style>
