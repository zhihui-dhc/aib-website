<template>
  <div class="fund-step">
    <form class="form-default" v-on:submit.prevent="setFundProgress(4)">
      <div class="form-header">
        <div class="title">{{ $t('siteFund.stepThree.title') }}</div>
        <div class="subtitle">{{ $t('siteFund.stepThree.subtitle') }}</div>
      </div>
      <div class="form-group">
        <label>{{ $t('siteFund.stepThree.atomCount') }}</label>
        <div class="input-group">
          <input class="highlight-on-focus" type="number" v-model="user.atoms" required min="1" max="1000000">
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
</template>
<script>
// import { required, minLength } from 'vuelidate/lib/validators'
import { required } from 'vuelidate/lib/validators'
export default {
  methods: {
    setFundProgress (step) { this.step = step }
  },
  props: ['user', 'bitcoinPrice'],
  validations: {
    user: {
      atoms: {
        required
      }
    }
  }
}
</script>
