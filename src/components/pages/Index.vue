<template>
<section-cover></section-cover>

<section id="walkthrough-1" class="section-slide-text"><div class="section-container">
  <div class="section-content">

<p>Cosmos is a project with an ambitious mission – to create a network of
distributed ledgers that solve long-standing problems in the cryptocurrency and
blockchain space.</p>
<p>Cosmos is a network of independent parallel blockchains that are each powered by
classical BFT consensus algorithms like Tendermint
<a href="http://github.com/tendermint/tendermint">1</a>.  The first blockchain in this
network will be the Cosmos Hub.  The Cosomos Hub connects to many other
blockchains (or <em>zones</em>) via a novel inter-blockchain communication protocol.
The Cosmos Hub tracks numerous token types, and keeps record of the total
number of tokens in each connected zone.  Tokens can be transferred from one
zone to another, securely and quickly, without the need for a liquid exchange
between zones, because all inter-zone coin transfers go through the Cosmos Hub.</p>
<p>This architecture solves so many problems that the blockchain space faces today,
including application interoperability, scalability, and seamless upgradability.
For example, zones derived from Bitcoind, Go-Ethereum, CryptoNote, ZCash, or any
blockchain system can be plugged into the Cosmos Hub.  These zones allow Cosmos
to scale infinitely to meet global transaction demand.  And, zones are a great
fit for a distributed exchange, which will be supported as well.</p>
<p>Cosmos is not just a single distributed ledger, and the Cosmos Hub isn’t a
walled garden or the center of its universe.  We are designing a protocol for an
open network of distributed legers that can serve as a new foundation for our
future financial systems, based on principles of cryptography, sound economics,
consensus theory, transparency, and accountability.</p>
  </div>
  <walkthrough-nav step="1"></walkthrough-nav>
</div></section>

<section id="walkthrough-2" class="section-slide"><div class="section-container">
  <div class="image image-thinner"><img src="../../assets/images/ex_zone.png"></div>
  <walkthrough-nav step="2"></walkthrough-nav>
  <div class="section-content">
    <p>A Cosmos <a href="#">zone</a> is a distributed ledger (blockchain). Each zone can have differing transaction logic and policies.</p>
  </div>
</div></section>

<section id="walkthrough-3" class="section-slide"><div class="section-container">
  <div class="image image-wider"><img src="../../assets/images/ex_zone_ibc.png"></div>
  <walkthrough-nav step="3"></walkthrough-nav>
  <div class="section-content">
    <p>We&rsquo;ve developed a trick that allows zones to communicate with each other directly. It&rsquo;s based on classical BFT algorithms like Tendermint.</p>
  </div>
</div></section>

<section id="walkthrough-4" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_evm_sharding.png"></div>
  <walkthrough-nav step="4"></walkthrough-nav>
  <div class="section-content">
    <p>With this technique, we could make Ethereum scale by constructing a common hub blockchain. All inter-zone token movements go through the hub.</p>
  </div>
</div></section>

<section id="walkthrough-5" class="section-slide"><div class="section-container">
  <div class="image image-wider"><img src="../../assets/images/ex_evm_upgrading.png"></div>
  <walkthrough-nav step="5"></walkthrough-nav>
  <div class="section-content">
    <p>Upgrading the EVM would be seamless, with less risk of contentious hard-forks. Anyone could plug in a better smart contract system.</p>
  </div>
</div></section>

<section id="walkthrough-6" class="section-slide"><div class="section-container">
  <div class="image"><img src="../../assets/images/ex_dist_exchange.png"></div>
  <walkthrough-nav step="6"></walkthrough-nav>
  <div class="section-content">
    <p>We could import other blockchains and have a distributed exchange on its own zone.</p>
  </div>
</div></section>

<section id="walkthrough-7" class="section-slide"><div class="section-container">
  <div class="image image-wider"><img src="../../assets/images/ex_network.png"></div>
  <walkthrough-nav step="7"></walkthrough-nav>
  <div class="section-content">
    <p>The Cosmos hub isn&rsquo;t the center of the universe. Any zone can be a hub.</p>
  </div>
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

.section-slide-text
  background #fff
  position relative
  z-index 1
  .section-container
    .section-content
      padding x 0.75*x
      p
        padding 0 0 1em
        &:first-of-type
          font-weight 600
          font-size 1.25*x
          margin-bottom 1em
          border-bottom 1px solid bc

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

      &.image-thinner img
        max-width 40vh
      &.image-wider img
        max-width 75vh

    .section-content
      background #fff
      padding 0 0.75*x
      flex 1
      display flex

      p
        padding-top x
        max-width 40em
        margin 0 auto
        text-align center

@media screen and (max-height: 480px)
  .section-slide
    .section-container
      height auto
      min-height 100vh
      .image
        padding 1.5*x 0
      .section-content
        p
          padding 0.5*x 0 1.5*x

  .section-slide-text
    .section-container
      .section-content
        padding-top 0
        margin-top -3*x
  
@media screen and (min-width: 360px) and (min-height: 481px)
  .section-slide
    .section-container
      .section-content
        padding 0 x

  .section-slide-text
    .section-container
      .section-content
        padding x

@media screen and (min-width: 414px)
  .section-slide
    .section-container
      .section-content
        padding 0 1.5*x

  .section-slide-text
    .section-container
      .section-content
        padding 1.5*x

@media screen and (min-width: 768px)
  .section-slide
    .section-container
      .section-content
        padding 0 4*x
        p
          padding-top 2.5*x

  .section-slide-text
    .section-container
      .section-content
        column-count 2
        column-gap 2*x

@media screen and (min-width: 1200px)
  .section-slide
    .section-container
      nav.walkthrough
        order 1
      .section-content
        order 0
        align-items center
        p
          padding-top 0

  .section-slide-text
    .section-container
      .section-content
        max-width 1200px
        margin 0 auto
        padding-left 4*x
        padding-right 4*x
        padding-bottom 3*x
        column-count 3
</style>
