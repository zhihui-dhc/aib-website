<template>
<section-cover></section-cover>

<section id="walkthrough-1" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_zone.png"></div>
  <div class="section-content">
    <p>A Cosmos <a href="#">zone</a> is a distributed ledger (blockchain). Each zone can have differing transaction logic and policies.</p>
  </div>
  <walkthrough-nav step="1"></walkthrough-nav>
</div></section>

<section id="walkthrough-2" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_zone_ibc.png"></div>
  <div class="section-content">
    <p>We&rsquo;ve developed a trick that allows zones to communicate with each other directly. It&rsquo;s based on classical BFT algorithms like Tendermint.</p>
  </div>
  <walkthrough-nav step="2"></walkthrough-nav>
</div></section>

<section id="walkthrough-3" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_evm_sharding.png"></div>
  <div class="section-content">
    <p>With this technique, we could make Ethereum scale by constructing a common hub blockchain. All inter-zone token movements go through the hub.</p>
  </div>
  <walkthrough-nav step="3"></walkthrough-nav>
</div></section>

<section id="walkthrough-4" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_evm_upgrading.png"></div>
  <div class="section-content">
    <p>Upgrading the EVM would be seamless, with less risk of contentious hard-forks. Anyone could plug in a better smart contract system.</p>
  </div>
  <walkthrough-nav step="4"></walkthrough-nav>
</div></section>

<section id="walkthrough-5" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_dist_exchange.png"></div>
  <div class="section-content">
    <p>We could import other blockchains and have a distributed exchange on its own zone.</p>
  </div>
  <walkthrough-nav step="5"></walkthrough-nav>
</div></section>

<section id="walkthrough-6" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_network.png"></div>
  <div class="section-content">
    <p>The Cosmos hub isn&rsquo;t the center of the universe. Any zone can be a hub.</p>
  </div>
  <walkthrough-nav step="6"></walkthrough-nav>
</div></section> 
</template>

<script>
import SectionCallToAction from '../sections/CallToAction.vue'
import SectionCover from '../sections/Cover.vue'
import WalkthroughNav from '../partials/WalkthroughNav.vue'

import watchWalkthroughBtns from '../../scripts/watchWalkthroughBtns.js'

export default {
  components: {
    SectionCallToAction,
    SectionCover,
    WalkthroughNav
  },
  ready () {
    watchWalkthroughBtns()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-slide
  .section-container
    display flex
    flex-flow column

    width 100vw
    height 100vh
    border-top 1px solid bc

    .image
      flex 2
      overflow hidden
      padding-top 3*x

      display flex
      justify-content center
      align-items center
      img
        width 90vw
        max-width 50vh
        height auto

    .section-content
      background #fff

      flex 1
      padding 0 0.75*x

      display flex
      align-items center

      p
        max-width 40*x
        margin 0 auto
        text-align center

@media screen and (min-width: 360px)
  .section-slide
    .section-container
      .section-content
        padding 0 x
</style>
