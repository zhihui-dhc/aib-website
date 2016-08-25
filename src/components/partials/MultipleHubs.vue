<template>
<div class="hubs-wrapper">
  <cosmos-hub id="hub-one" hub-name="Cosmos Hub" :spokes="spokesOne"></cosmos-hub>
  <cosmos-hub id="hub-two" hub-name="Peer Hub" :spokes="spokesTwo"></cosmos-hub>
  <data-bundle id="multiple-hubs-connector"></data-bundle>
</div>
</template>

<script>
import CosmosHub from './CosmosHubSmall.vue'
import DataBundle from './DataBundle.vue'

export default {
  components: {
    CosmosHub,
    DataBundle
  },
  data () {
    return {
      spokesOne: [
        { key: 'spoke-one', value: 'BTC', color: 'btc-color' },
        { key: 'spoke-two', value: 'ETH', color: 'eth-color' },
        { key: 'spoke-three', value: 'XMR', color: 'xmr-color' },
        { key: 'spoke-four', value: 'MAID', color: 'maid-color' },
        { key: 'spoke-five', value: 'DOGE', color: 'doge-color' }
        // { key: 'spoke-six', value: 'DASH', color: 'dash-color' }
      ],
      spokesTwo: [
        { key: 'spoke-one', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-two', value: 'EVM', color: 'eth-color' },
        // { key: 'spoke-three', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-four', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-five', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-six', value: 'EVM', color: 'eth-color' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

spacing = -16*sm

#hub-one
#hub-two
  position absolute
  top 50%
  margin-top -50*sm

#hub-one
  left spacing

#hub-two
  right spacing

#multiple-hubs-connector
  top 50%
  left 50%

  margin-left -15*s
</style>
