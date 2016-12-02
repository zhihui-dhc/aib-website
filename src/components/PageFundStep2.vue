<template>
  <div class="fund-step">
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
        <div class="form-msg" v-if="!$v.user.publicKey.required">Nationality is required</div>
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
  data () {
    return {
      user: {
      }
    }
  },
  methods: {
    setFundProgress (step) { this.step = step }
  },
  props: ['user'],
  validations: {
    user: {
      publicKey: {
        required
      }
    }
  }
}
</script>
