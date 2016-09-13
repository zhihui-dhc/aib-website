<template>
  <div id="exchange-rate-calculator">
    <div class="input-group">
      <input type="text" v-model="bitcoinAmount">
      <div class="input-group-addon">BTC</div>
    </div>
    <div id="exchange-rate-calculator-symbol">
      <i class="material-icons">swap_horiz</i>
    </div>
    <div class="input-group">
      <input type="text" :value="atomAmount" disabled>
      <div class="input-group-addon">CAT</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    atomAmount () {
      return this.bitcoinAmount * 27394
    }
  },
  data () {
    return {
      bitcoinAmount: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#exchange-rate-calculator
  display flex

#exchange-rate-calculator-symbol
  width 3rem
  text-align center
  i
    line-height 2rem
    font-size 1rem
</style>
