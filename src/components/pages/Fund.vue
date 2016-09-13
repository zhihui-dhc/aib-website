<template>
  <div class="header-padding"></div>
  <div id="fund-steps">
    <div class="fund-step" id="fund-step-one" v-if="step === 1">
      <div class="step-header">
        <h1>Crowdsale Registration</h1>
      </div>
      <form class="form-default" v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="cf-name">Your Name</label>
          <div class="input-group">
            <input id="cf-name" type="text" v-model="crowdfund.name" required placeholder="Your Name" pattern=".{1,254}" title="1 to 254 characters">
          </div>
        </div><!--form group-->
        <div class="form-group">
          <label for="cf-email">Your Email</label>
          <div class="input-group">
            <input id="cf-email" type="email" v-model="crowdfund.email" required placeholder="your@email.com" pattern=".{3,254}" title="3 to 254 characters">
          </div>
        </div><!--form group-->
        <div class="form-group">
          <label for="cf-nationality">Your Nationality</label>
          <div class="input-group">
            <custom-select id="cf-nationality" :options="countryList" empty="true">
          </div>
        </div><!--form group-->
        <div class="form-footer">
          <div class="form-footer-left">
            <input type="button" class="btn" value="WIP ->" @click="step = 2">
          </div>
          <div class="form-footer-right">
            <input type="submit" class="btn" value="Submit">
          </div>
        </div><!--form footer-->
      </form>
    </div>
    <div class="fund-step" id="fund-step-two" v-if="step === 2">
      <div class="step-header">
        <h1>Purchase Atom Tokens</h1>
        <div class="text">Copy the address below into your Bitcoin Wallet and deposit bitcoins into it equal the amount of atoms you wish to buy.</div>
      </div>
      <form class="form-default">
        <div class="form-group">
          <label>Deposit Address</label>
          <div class="input-group">
            <input type="text" :value="bitcoinAddress">
          </div>
        </div><!--form-group-->
        <div class="form-group">
          <label>Current Exchange Rate</label>
          <exchange-rate-calculator></exchange-rate-calculator>
        </div><!--form-group-->
        <div class="form-footer">
          <div class="form-footer-left">
            <input type="button" class="btn" value="<- WIP" @click="step = 1">
          </div>
          <div class="form-footer-right">
            <input type="submit" class="btn" value="Return to home">
          </div>
        </div><!--form footer-->
      </form>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../forms/CustomSelect.vue'
import ExchangeRateCalculator from '../partials/ExchangeRateCalculator.vue'

import { countries } from 'country-data'

export default {
  components: {
    CustomSelect,
    ExchangeRateCalculator
  },
  computed: {
    countryList () {
      let cs = []
      if (countries.all) {
        for (let i = 0; i < countries.all.length; i++) {
          let country = countries.all[i]
          cs[i] = { text: country.name, value: country.alpha2 }
        }
      }
      return cs
    }
  },
  data () {
    return {
      bitcoinAddress: '1NAfx5GEZHR8t69LjxTeShPP4XXaxeUqQw',
      step: 1,
      crowdfund: {
        name: '',
        email: '',
        nationality: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.step = 2
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#fund-steps
  max-width 32rem
  padding 1rem

.step-header
  border-bottom 1px solid bc
  padding 1rem 0
  margin 0 0 1rem

  h1
    font-size 2rem
    line-height 1.25
    margin 0 0 1rem
  .text
    color dim

@media screen and (min-width: 360px)
  #fund-steps
    padding-left 1.25rem
    padding-right 1.25rem

@media screen and (min-width: 414px)
  #fund-steps
    padding-left 1.5rem
    padding-right 1.5rem

@media screen and (min-width: 568px)
  #fund-steps
    padding 1rem 0
    margin 0 auto

@media screen and (min-width: 768px)
  #fund-steps
    border 1px solid bc
    background #fff
    margin 3rem auto
    padding 1rem 2rem
    max-width 36rem
</style>
