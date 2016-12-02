<template>
  <div class="fund-step">
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
</template>
<script>
export default {
  data () {
    return {
      bitcoinAddress: '1NAfx5GEZHR8t69LjxTeShPP4XXaxeUqQw'
    }
  },
  methods: {
    setFundProgress (step) { this.step = step },
    goHome () {
      this.$router.push('/')
    }
  },
  props: ['step', 'user', 'bitcoinPrice']
}
</script>
