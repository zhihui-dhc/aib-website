<template>
  <div class="fund-step">
    <form class="form-default"
      v-bind:class="{ 'form-error': $v.user.$error }"
      v-on:submit.prevent="setFundProgress(2)">
      <div class="form-header">
        <div class="title">{{ $t('siteFund.stepOne.title') }}</div>
        <div class="subtitle">{{ $t('siteFund.stepOne.subtitle') }}</div>
      </div>
      <div class="form-group">
        <label for="cf-name">{{ $t('siteFund.stepOne.name') }}</label>
        <div class="input-group">
          <input class="cf-name" type="text" v-model="user.name" :placeholder="$t('siteFund.stepOne.name')">
        </div>
        <div class="form-msg" v-if="!$v.user.name.required">Name is required</div>
      </div>
      <div class="form-group">
        <label for="cf-email">{{ $t('siteFund.stepOne.email') }}</label>
        <div class="input-group">
          <input class="cf-email" type="email" v-model="user.email" required :placeholder="$t('siteFund.stepOne.email')" pattern=".{3,254}" title="3 to 254 characters">
        </div>
        <div class="form-msg" v-if="!$v.user.email.required">Email is required</div>
      </div>
      <div class="form-group">
        <label for="cf-nationality">{{ $t('siteFund.stepOne.nationality') }}</label>
        <div class="input-group">
          <form-select class="cf-nationality" :options="allCountries" :empty="true" :model="user.nationality">
        </div>
        <div class="form-msg" v-if="!$v.user.nationality.required">Nationality is required</div>
      </div>
      <div class="form-footer">
        <input type="submit" class="btn" :value="$t('siteFund.btnContinue')">
      </div>
    </form>
  </div>
</template>
<script>
import FormSelect from './FormSelect'
// import { required, minLength } from 'vuelidate/lib/validators'
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  components: {
    FormSelect
  },
  computed: {
    ...mapGetters([
      'allCountries'
    ])
  },
  methods: {
    setFundProgress (step) { this.step = step }
  },
  props: ['user'],
  validations: {
    user: {
      name: {
        required
      },
      email: {
        required
      },
      nationality: {
        required
      }
    }
  }
}
</script>
