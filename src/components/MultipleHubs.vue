<template>
  <div class="hubs-wrapper">
  <cosmos-hub id="hub-one" hub-name="Cosmos Hub" :spokes="spokesOne"></cosmos-hub>
  <cosmos-hub id="hub-two" hub-name="Peer Hub" :spokes="spokesTwo" light-color="true"></cosmos-hub>
  <data-bundle></data-bundle>
  </div>
</template>

<script>
import CosmosHub from './CosmosHubSmall.vue'
import DataBundle from './DataBundleAlt.vue'
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

hub-height = 360px
spacing = -3 * x

.hubs-wrapper
  width 480px
  height hub-height
  position relative

#hub-one
#hub-two
  position absolute
  top 50%
  margin-top -150px

#hub-one
  left spacing

#hub-two
  right spacing

.data-bundle
  top 50%
  left 150px
</style>
