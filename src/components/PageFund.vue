<template>
  <div class="page-fund page-default">
  <div class="fund-wrapper">
    <h1>{{ $t('siteFund.title') }}</h1>
    <page-fund-nav :step="step"></page-fund-nav>

    <div class="fund-steps">
      <!--<form-nav-progress :step="step" @update="setFundProgress($event)"></form-nav-progress>-->

      <div class="fund-step" v-show="step === 1">
        <form class="form-default" v-on:submit.prevent="setFundProgress(2)">
          <div class="form-header">
            <div class="title">{{ $t('siteFund.stepOne.title') }}</div>
            <div class="subtitle">{{ $t('siteFund.stepOne.subtitle') }}</div>
          </div>
          <div class="form-group">
            <label for="cf-name">{{ $t('siteFund.stepOne.name') }}</label>
            <div class="input-group">
              <input class="cf-name" type="text" v-model="customer.name" required :placeholder="$t('siteFund.stepOne.name')" pattern=".{1,254}" title="1 to 254 characters">
            </div>
          </div>
          <div class="form-group">
            <label for="cf-email">{{ $t('siteFund.stepOne.email') }}</label>
            <div class="input-group">
              <input class="cf-email" type="email" v-model="customer.email" required :placeholder="$t('siteFund.stepOne.email')" pattern=".{3,254}" title="3 to 254 characters">
            </div>
          </div>
          <div class="form-group">
            <label for="cf-nationality">{{ $t('siteFund.stepOne.nationality') }}</label>
            <div class="input-group">
              <form-select class="cf-nationality" :options="allCountries" :empty="true" :model="customer.nationality">
            </div>
          </div>
          <div class="form-footer">
            <input type="submit" class="btn" :value="$t('siteFund.btnContinue')">
          </div>
        </form>
      </div>

      <div class="fund-step" v-show="step === 2">
        <form class="form-default" v-on:submit.prevent="setFundProgress(3)">
          <div class="form-header">
            <div class="title">{{ $t('siteFund.stepTwo.title') }}</div>
            <div class="subtitle">{{ $t('siteFund.stepTwo.subtitle') }}</div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepTwo.generatePublicKey') }}</label>
            <div class="input-group">
              <a class="btn" target="_blank" href="https://google.com">
                <i class="fa fa-key"></i>
                <span class="text">{{ $t('siteFund.stepTwo.launchKeygen') }}</span>
              </a>
            </div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepTwo.pastePublicKey') }}</label>
            <div class="input-group">
              <textarea required></textarea>
            </div>
          </div>
          <div class="form-footer">
            <input type="submit" class="btn" :value="$t('siteFund.btnContinue')">
          </div>
        </form>
      </div>

      <div class="fund-step" v-show="step === 3">
        <form class="form-default" v-on:submit.prevent="setFundProgress(4)">
          <div class="form-header">
            <div class="title">{{ $t('siteFund.stepThree.title') }}</div>
            <div class="subtitle">{{ $t('siteFund.stepThree.subtitle') }}</div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepThree.atomCount') }}</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" v-model="customer.atoms" required min="1" max="1000000">
              <div class="input-group-addon">Atoms</div>
            </div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepThree.btcPrice') }}</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" disabled :value="bitcoinPrice">
              <div class="input-group-addon">BTC</div>
            </div>
          </div>
          <div class="form-footer">
            <input type="submit" class="btn" :value="$t('siteFund.btnContinue')">
          </div>
        </form>
      </div>

      <div class="fund-step" v-show="step === 4">
        <form class="form-default" v-on:submit.prevent="goHome">
          <div class="form-header">
            <div class="title">{{ $t('siteFund.stepFour.title') }}</div>
            <div class="subtitle">{{ $t('siteFund.stepFour.subtitle') }}</div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepFour.depositAddress') }}</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="text" :value="bitcoinAddress">
            </div>
          </div>
          <div class="form-group">
            <label>{{ $t('siteFund.stepFour.totalPrice') }}</label>
            <div class="input-group">
              <input class="highlight-on-focus" type="number" disabled :value="bitcoinPrice">
              <div class="input-group-addon">BTC</div>
            </div>
          </div>
          <div class="form-footer">
            <input type="submit" class="btn" :value="$t('siteFund.btnFinished')">
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import FormSelect from './FormSelect'
import FormNavProgress from './FormNavProgress'
import PageFundNav from './PageFundNav'
import { mapGetters } from 'vuex'
export default {
  name: 'page-fund',
  components: {
    FormSelect,
    FormNavProgress,
    PageFundNav
  },
  computed: {
    bitcoinPrice () {
      return this.customer.atoms / 27394
    },
    ...mapGetters([
      'allCountries'
    ])
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
    setFundProgress (step) {
      this.step = step
    },
    goHome () {
      this.$router.push('/')
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
