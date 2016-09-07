<template>
  <section id="walkthrough-1" class="section-slide-text">
    <div class="section-container">
      <div class="section-content">
        <h2>Cosmos Overview</h2>
        <h3>Architecture</h3>
        <p>
        The Cosmos network consists of many independent, parallel blockchains,
        called zones, each powered by classical Byzantine fault-tolerant (BFT)
        consensus protocols like
        <a href="http://tendermint.com">Tendermint</a> (already used by platforms
        like <a href="https://erisindustries.com/components/erisdb/">ErisDB</a>).
        Some zones act as hubs with respect to other zones, allowing many zones
        to interoperate through a shared hub. The architecture is a more general
        application of the Bitcoin sidechains concept, using classic BFT and
        Proof-of-Stake algorithms, instead of Proof-of-Work (see our whitepaper for
        more details).
        <h3>Cosmos Hub</h3>
        <p>
        The first blockchain in the Cosmos network is the Cosmos hub. The Cosmos
        hub connects to zones via the novel IBC (inter-blockchain communication)
        protocol and keeps a record of the total number of tokens in each zone.
        Because all inter-zone token transfers go through the Cosmos hub, you can
        transfer tokens from one zone to another, quickly and securely, without the
        need for a liquid exchange or a trusted third party between zones. 
        </p>
        <p>
        The Cosmos hub can connect to many different kinds of zones, as long as
        each zone speaks IBC. As a result, Cosmos can support a variety of
        currencies and scripting languages like those found in Bitcoin, Ethereum,
        ZeroCash, CryptoNote, and more.
        </p>
      </div>
      <walkthrough-nav step="1"></walkthrough-nav>
    </div>
  </section>
</template>

<script>
import WalkthroughNav from '../partials/WalkthroughNav.vue'

export default {
  components: {
    WalkthroughNav
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
      padding 2*x 0.75*x 0
      margin 0 auto
      p
        padding 0 0 1em

      h2
        border-bottom 1px solid bc
        font-size 1.5*x
        padding-bottom 0.5*x
        margin-bottom 1.5*x

      h3
        font-size 1.25*x
        color dim
        margin: 0.5*x 0

@media screen and (min-width: 360px)
  .section-slide-text
    .section-container
      .section-content
        padding-left x
        padding-right x

@media screen and (min-width: 768px)
  .section-slide-text
    .section-container
      .section-content
        padding-left 1.5*x
        padding-right 1.5*x
        padding-top 3*x
        padding-bottom x

        column-count 2
        column-gap 2*x

        max-width 1200px
</style>
