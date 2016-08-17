<template>
<section-cover></section-cover>

<section class="section-default"><div class="section-container">
  <countdown class="countdown-top"></countdown>
</div></section>

<section class="section-default"><div class="section-container">
  <zone type="one-zone"></zone>
  <div class="section-content">
    <p>A Cosmos <a href="#">zone</a> is a distributed ledger (blockchain). Each zone can have differing transaction logic and policies.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <zone type="two-zones"></zone>
  <div class="section-content">
    <p>We&rsquo;ve developed a trick that allows zones to communicate with each other directly. It&rsquo;s based on classical BFT algorithms like Tendermint.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="gfx-wrapper square">
    <cosmos-hub hub-name="Cosmos Hub" :spokes="evmSpokes"></cosmos-hub>
  </div>
  <div class="section-content">
    <p>With this technique, we could make Ethereum scale by constructing a common hub blockchain. All inter-zone token movements go through the hub.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <zone type="three-zones"></zone>
  <div class="section-content">
    <p>Upgrading the EVM would be seamless, with less risk of contentious hard-forks. Anyone could plug in a better smart contract system.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="gfx-wrapper square">
    <cosmos-hub hub-name="Cosmos Hub" :spokes="distSpokes"></cosmos-hub>
  </div>
  <div class="section-content">
    <p>We could import other blockchains and have a distributed exchange on its own zone.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="gfx-wrapper height-seventy">
    <multiple-hubs></multiple-hubs>
  </div>
  <div class="section-content">
    <p>The Cosmos hub isn&rsquo;t the center of the universe. Any zone can be a hub.</p>
  </div>
</div></section> 

<section class="section-default"><div class="section-container">
  <countdown></countdown>
</div></section> 
</template>

<script>
import Countdown from './Countdown.vue'
import CosmosHub from './CosmosHub.vue'
import MultipleHubs from './MultipleHubs.vue'
import SectionCover from './SectionCover.vue'
import Zone from './Zone.vue'
export default {
  components: {
    CosmosHub,
    Countdown,
    MultipleHubs,
    SectionCover,
    Zone
  },
  data () {
    return {
      evmSpokes: [
        { key: 'spoke-one', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-two', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-three', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-four', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-five', value: 'EVM', color: 'eth-color' },
        { key: 'spoke-six', value: 'EVM', color: 'eth-color' }
      ],
      distSpokes: [
        { key: 'spoke-one', value: 'BTC', color: 'btc-color' },
        { key: 'spoke-two', value: 'ETH', color: 'eth-color' },
        { key: 'spoke-three', value: 'XMR', color: 'xmr-color' },
        { key: 'spoke-four', value: 'MAID', color: 'maid-color' },
        { key: 'spoke-five', value: 'DOGE', color: 'doge-color' },
        { key: 'spoke-six', value: 'DASH', color: 'dash-color' }
      ],
      twoOneSpokes: [
        { key: 'spoke-one', value: 'BTC', color: 'btc-color' },
        { key: 'spoke-two', value: 'ETH', color: 'eth-color' },
        { key: 'spoke-three', value: 'XMR', color: 'xmr-color' },
        { key: 'spoke-four', value: 'MAID', color: 'maid-color' },
        { key: 'spoke-five', value: 'DOGE', color: 'doge-color' },
        { key: 'spoke-six', value: 'DASH', color: 'dash-color' }
      ],
      twoTwoSpokes: [
        { key: 'spoke-one', value: 'BTC', color: 'btc-color' },
        { key: 'spoke-two', value: 'ETH', color: 'eth-color' },
        { key: 'spoke-three', value: 'XMR', color: 'xmr-color' },
        { key: 'spoke-four', value: 'MAID', color: 'maid-color' },
        { key: 'spoke-five', value: 'DOGE', color: 'doge-color' },
        { key: 'spoke-six', value: 'DASH', color: 'dash-color' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.countdown-wrapper
  margin 0 auto
</style>
