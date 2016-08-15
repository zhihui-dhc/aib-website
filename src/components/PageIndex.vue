<template>
<section class="section-cover">
  <h1>Cosmos</h1>
  <nav>
    <a href="#">Whitepaper</a>
    <a href="#">Plan</a>
    <a href="#">FAQ</a>
  </nav>
  <p id="crowdscale-countdown">58 days til October 8th</p>
</section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-zone">Zone</div>
  </div>
  <div class="section-content">
    <p>A Cosmos <a href="#">zone</a> is a distributed ledger (blockchain). Each zone can have differing transaction logic and policies.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-zone">Zone</div>
    <div class="viz-edge-ibc">IBC</div>
    <div class="viz-vert-zone">Zone</div>
  </div>
  <div class="section-content">
    <p>We&rsquo;ve developed a trick that allows zones to communicate with each other directly. It&rsquo;s based on classical BFT algorithms like Tendermint.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-hub">Cosmos Hub</div>
    <div class="viz-vert-evm">EVM</div>
    <div class="viz-vert-evm">EVM</div>
    <div class="viz-vert-evm">EVM</div>
    <div class="viz-vert-evm">EVM</div>
    <div class="viz-vert-evm">EVM</div>
  </div>
  <div class="section-content">
    <p>With this technique, we could make Ethereum scale by constructing a common hub blockchain. All inter-zone token movements go through the hub.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-evm">EVM 1.0</div>
    <div class="viz-vert-evm">EVM 2.0</div>
    <div class="viz-vert-evm">EVM 3.0</div>
  </div>
  <div class="section-content">
    <p>Upgrading the EVM would be seamless, with less risk of contentious hard-forks. Anyone could plug in a better smart contract system.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-hub">Cosmos Hub</div>
    <div class="viz-vert-evm">BTC</div>
    <div class="viz-vert-evm">ETH</div>
    <div class="viz-vert-evm">XMR</div>
    <div class="viz-vert-evm">DOGE</div>
  </div>
  <div class="section-content">
    <p>We could immport other blockchains and have a distributed exchange on its own zone.</p>
  </div>
</div></section>

<section class="section-default"><div class="section-container">
  <div class="section-visualization">
    <div class="viz-vert-hub">Cosmos Hub</div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>

    <div class="viz-vert-hub">Peer Hub</div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>
    <div class="viz-vert"></div>
  </div>
  <div class="section-content">
    <p>The Cosmos hub isn&rsquo;t the center of the universe. Any zone can be a hub.</p>
  </div>
</div></section>


</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.section-cover
  background bc

.section-default
  border-top 1px solid bc

  .section-container
    width 480px
    margin 0 auto
    text-align center
    padding 3*x 0
    

.viz-vert-zone
.viz-vert-hub
  display inline-block
  border 2px solid bc
  font-size 2*x
  padding x

.viz-vert-evm
  display inline-block
  border 1px solid bc
  padding 0.5*x
</style>
