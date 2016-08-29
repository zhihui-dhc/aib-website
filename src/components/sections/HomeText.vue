<template>
  <section id="walkthrough-1" class="section-slide-text">
    <div class="section-container">
      <div class="section-content">
        <p>
          Building a blockchain for the future
        </p>
        <p>
          Cosmos is a project with an ambitious mission. We are aiming to create a
          network of distributed ledgers to solve long-standing problems in the
          cryptocurrency and blockchain space.   
        </p>
        <p>
          Put simply, Cosmos is a network of independent parallel blockchains called
          zones. The zones are powered by classical Byzantine fault tolerance (BFT)
          consensus algorithms, like <a href="http://tendermint.com">Tendermint</a>,
          which is already in use by platforms like <a href="https://erisindustries.com/components/erisdb/">Eris</a>.
        </p>
        <p>
          You can read more about the advantages our BFT proof-of-stake model over
          proof-of-work, the approach Bitcoin uses, in our
          <a v-link="{ path: '/whitepaper' }">whitepaper</a>.
        </p>
        <p> 
          The first blockchain in this Cosmos network is the Cosmos hub. The Cosmos
          hub connects to zones via a novel inter-blockchain communication protocol
          called IBC (inter-blockchain communication).
        </p>
        <p>
          The Cosmos hub tracks numerous token types (whether it be Bitcoin,
          Ethereum, ZeroCash, CryptoNote, your local banking institution, etc.), and
          keeps a record of the total number of tokens in each zone. Because all
          inter-zone coin transfers go through the Cosmos hub, you can transfer
          tokens from one zone to another, securely and quickly, without the need for
          a liquid exchange between zones.
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
        &:first-of-type
          font-weight 600
          font-size 1.25*x
          margin-bottom 1em
          border-bottom 1px solid bc

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
        padding-left 2*x
        padding-right 2*x
        padding-top 3*x
        padding-bottom x

        column-count 2
        column-gap 2*x

@media screen and (min-width: 1200px)
  .section-slide-text
    .section-container
      .section-content
        padding 4*x 2.5*x 3*x
        max-width 1280px
        column-count 3
</style>
