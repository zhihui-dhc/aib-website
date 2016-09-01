<template>
<section-cover></section-cover>
<section-home-text></section-home-text>

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
    <a href="http://qz.com/730004/everything-you-need-to-know-about-the-ethereum-hard-fork/">Ethereum hard-forked</a>
    into ETH and ETC due to political/governance issues surrounding the DAO
    hack. With Cosmos, upgrading is not an issue. You simply plug a new zone
    into the Cosmos hub, and invite users to move their funds over to it at
    their leisure.  
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
    Cosmos is built on principles of cryptography, sound economics, consensus
    theory, transparency, and accountability to serve as a new foundation for
    our future financial systems.
    </p>
    <p>
    You can use Cosmos as a testing ground for a new cryptocurrency design, an
    upgrade to an existing cryptocurrency, as a means for decentralized
    exchange, or as a platform for scalable smart contracts.
    </p>
    <p>
    Cosmos is not just a single distributed ledger, and the Cosmos hub isn't a
    walled garden or the center of its universe — anyone can use this protocol
    to create their own hub to compete with Cosmos in a free market of
    blockchains
    </p>
    <p>
    The only question is, what will you build on Cosmos?
    </p>
  </div>
</div></section>
</template>

<script>
import SectionCover from '../sections/Cover.vue'
import SectionHomeText from '../sections/HomeText.vue'
import SectionCallToAction from '../sections/CallToAction.vue'
import WalkthroughNav from '../partials/WalkthroughNav.vue'

import watchWalkthroughBtns from '../../scripts/watchWalkthroughBtns.js'
import stabilizeVH from '../../scripts/stabilizeVH.js'

export default {
  components: {
    SectionCover,
    SectionHomeText,
    SectionCallToAction,
    WalkthroughNav
  },
  ready () {
    stabilizeVH()
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
    border-top 1px solid bc

    .image
      flex 2
      overflow hidden

      display flex
      justify-content center
      align-items center

      height 51vh
      img
        width auto
        max-width 80%
        max-height 80%

      &.image-shorter
        height 32vh
        img
          max-height 60%
      &.image-taller
        height 55vh

    .section-content
      background #fff
      padding 0 0.75*x

      h2
        font-size 1.5em
        color txt
        margin 1.5*x 0

      p
        margin 1.5*x auto
        max-width 40em

@media screen and (max-height: 480px)
  .section-slide
    .section-container
      height auto

@media screen and (min-width: 360px) and (min-height: 481px)
  .section-slide
    .section-container
      .section-content
        h2
          margin-top 0.5*x
        padding-bottom 1.5*x

@media screen and (min-width: 414px)
  .section-slide
    .section-container
      .section-content
        h2
          margin-top x
        padding-bottom 2*x

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
</style>
