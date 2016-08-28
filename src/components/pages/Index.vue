<template>
<section-cover></section-cover>

<section id="walkthrough-1" class="section-slide-text"><div class="section-container">
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
    <a href="https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md">white-paper</a>.
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
</div></section>

<section id="walkthrough-2" class="section-slide"><div class="section-container">
  <div class="image stabilizeVH"><img class="" src="../../assets/images/ex_dist_exchange.png"></div>
  <walkthrough-nav step="2"></walkthrough-nav>
  <div class="section-content">
    <center><h2>Interoperability</h2></center>
    <p>
    Cosmos can interoperate with multiple other applications and
    cryptocurrencies, something other blockchains can’t do well. By creating a
    new zone, you can plug any blockchain system into the Cosmos hub and pass
    tokens back and forth between those zones, without the need for an
    intermediary.
    </p>
    <p>
    For example, if you wanted to trade bitcoins for ether today, you would
    have to sell your bitcoins for a fiat currency on an open exchange and then
    use that fiat currency to buy ether on another exchange. The problem is,
    many of our  exchanges today are plagued by hacks, theft, and cons. Two
    prime examples are what happened at <a href="http://www.thedailybeast.com/articles/2016/05/19/behind-the-biggest-bitcoin-heist-in-history-inside-the-implosion-of-mt-gox.html">Mt. Gox</a> and more recently
    <a href="http://www.reuters.com/article/us-bitfinex-hacked-hongkong-idUSKCN10E0KP">Bitfinex</a>.  
    </p>
  </div>
</div></section>

<section id="walkthrough-3" class="section-slide"><div class="section-container">
  <div class="image stabilizeVH"><img class="" src="../../assets/images/ex_evm_sharding.png"></div>
  <walkthrough-nav step="3"></walkthrough-nav>
  <div class="section-content">
    <center><h2>Scalability</h2></center>
    <p>
    Scaling is another open issue for blockchains. Both Ethereum and Bitcoin
    support only a fraction of the transactions seen daily on payment networks
    like Visa or Mastercard. In contrast, zones allow Cosmos to scale out
    indefinitely. If your transaction speed slows in one zone because too many
    people are using it, you simply add another zone to the hub and direct half
    the users over that zone, thereby doubling your transaction speed.
    Meanwhile, the Cosmos hub ensures that any zones connected to it remain in
    sync. 
    </p>
  </div>
</div></section>

<section id="walkthrough-4" class="section-slide"><div class="section-container">
  <div class="image image-shorter stabilizeVH"><img class="" src="../../assets/images/ex_evm_upgrading.png"></div>
  <walkthrough-nav step="4"></walkthrough-nav>
  <div class="section-content">
    <center><h2>Upgradability</h2></center>
    <p>
    Another problem blockchains run into is how to handle upgrades when new
    versions come out. Getting all of the validators (“miners” in the case of
    Bitcoin) to upgrade to a new version of a blockchain simultaneously is
    tricky, and could lead to hard forks. This is exactly what happened when
    Ethereum hard-forked into ETH and ETC due to political/governance issues
    surrounding the DAO hack. With Cosmos, upgrading is not an issue. You
    simply plug a new zone into the Cosmos hub, and invite users to move their
    funds over to it at their leisure.  
    </p>
  </div>
</div></section>

<section id="walkthrough-5" class="section-slide"><div class="section-container">
  <div class="image image-taller stabilizeVH"><img class="" src="../../assets/images/ex_network.png"></div>
  <walkthrough-nav step="5"></walkthrough-nav>
  <div class="section-content">
    <center><h2>Decentralization</h2></center>
    <p>
    One of the great tragedies of cryptocurrencies today has been their failure
    to interoperate with existing systems — and each other. Cosmos offers a way
    to link them together, but without creating a new centralized clearinghouse
    or exchange. 
    </p>
    <p>
    Cosmos is not just a single distributed ledger, and the Cosmos hub isn't a
    walled garden or the center of its universe. We are designing a protocol
    for an open network of distributed ledgers that can serve as a new
    foundation for our future financial systems, based on principles of
    cryptography, sound economics, consensus theory, transparency, and
    accountability.
    </p>
    <p>
    You can use Cosmos as a testing ground for a new cryptocurrency design, an
    upgrade to an existing cryptocurrency, as a means for decentralized
    exchange, or as a platform for scalable smart contracts. 
    </p>
    <p>
    The only question is, what will you build on Cosmos?
    </p>
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
      padding-top 1.8*x
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
    // height 100vh
    border-top 1px solid bc

    .image
      flex 2
      overflow hidden
      padding-top 2*x
      padding-bottom 2*x

      display flex
      justify-content center
      align-items center
      img
        width auto
        max-width 80vw
        max-height 40vh

      &.image-shorter img
        max-height 20vh
      &.image-taller img
        max-height 50vh

    .section-content
      background #fff
      padding 0 0.75*x
      //flex 1
      //display flex

      h2
        font-size: 1.5em
        color: #555
        margin: 1.5*x 0

      p
        margin 1.5*x auto
        max-width 40em
        // text-align center

@media screen and (max-height: 480px)
  .section-slide
    .section-container
      height auto
      // min-height 100vh
      .image
        padding 1.5*x 0
      .section-content
        p
          // padding 0.5*x 0 1.5*x

  .section-slide-text
    .section-container
      .section-content
        // padding-top 0
  
@media screen and (min-width: 360px) and (min-height: 481px)
  .section-slide
    .section-container
      .section-content
        h2
          margin-top 0.5*x
        padding-bottom 1.5*x

  .section-slide-text
    .section-container
      .section-content
        // padding x

@media screen and (min-width: 414px)
  .section-slide
    .section-container
      .section-content
        h2
          margin-top x
        padding-bottom 2*x

  .section-slide-text
    .section-container
      .section-content
        // padding 1.5*x

@media screen and (min-width: 768px)
  .section-slide
    .section-container
      .section-content
        //

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
        padding-bottom 0
        h2
          margin-top 1.5*x

  .section-slide-text
    .section-container
      .section-content
        max-width 1200px
        column-count 3
</style>
