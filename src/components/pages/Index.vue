<template>
  <section-cover></section-cover>

  <section class="section-slide ss-text" id="home-text">
    <div class="section-container">
      <h2>Building a Network of Blockchains</h2>
      <div class="section-content">
        <h3>Purpose</h3>
        <p><strong>Cosmos</strong> is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities.</p>
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
        Proof-of-Stake algorithms, instead of Proof-of-Work (see <a v-link="{ path: '/whitepaper' }">our whitepaper</a> for more details).
        </p>
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
    </div>
  </section>

  <section-call-to-action></section-call-to-action>

  <section class="section-slide">
    <div class="section-container">
      <div class="image"><img class="" src="../../assets/images/ex_dist_exchange.png"></div>
      <div class="section-content">
        <h2>Interoperability</h2>
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
    </div>
  </section>

  <section class="section-slide ss-alt">
    <div class="section-container">
      <div class="image"><img class="" src="../../assets/images/ex_evm_sharding.png"></div>
      <div class="section-content">
        <h2>Scalability</h2>
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
    </div>
  </section>

  <section class="section-slide">
    <div class="section-container">
      <div class="image"><img class="" src="../../assets/images/ex_evm_upgrading.png"></div>
      <div class="section-content">
        <h2>Upgradability</h2>
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
    </div>
  </section>

  <section class="section-slide ss-alt">
    <div class="section-container">
      <div class="image image-taller"><img class="" src="../../assets/images/ex_network.png"></div>
      <div class="section-content">
        <h2>Decentralization</h2>
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
      </div>
      <div class="section-content section-content-extended">
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
    </div>
  </section>
</template>

<script>
import SectionCover from '../sections/Cover.vue'
import SectionCallToAction from '../sections/CallToAction.vue'

export default {
  components: {
    SectionCover,
    SectionCallToAction
  },
  created () {
    document.title = 'Network of Blockchains - Cosmos'
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-slide
  border-top dbd

  .section-container
    padding 3rem 1.5rem 1.5rem
    max-width 32rem
    margin 0 auto

    .image
      margin 0 0 2rem
      img
        display block
        margin 0 auto
        width 75%
        max-width 26rem

    h2
      font-size 1.5rem
      margin 0 0 1rem
      text-align center
      letter-spacing 0.01em

    h3
      font-size 1.25rem
      font-weight 400
      margin 0 0 0.5rem

    p
      margin 0 0 1.5rem

@media screen and (min-width:720px)
  .section-slide
    .section-container
      h2
        font-size 2em

@media screen and (min-width: 960px)
  .section-slide
    .section-container
      max-width 56rem
      display flex
      align-items center
      flex-flow row wrap
      padding 4.5rem 0

      .image, .section-content
        flex 1 0 50%

      .image
        padding-right 2rem
        margin 0

      .section-content
        padding-left 2rem

        h2
          text-align left

    &.ss-text
      .section-container
        display block

        .section-content
          column-count 2
          column-gap 3rem
        h2
          margin-bottom 3rem

    &.ss-alt
      .section-container
        flex-direction row-reverse
        .image
          padding-right 0
          padding-left 2rem
        .section-content
          padding-left 0
          padding-right 2rem
          &.section-content-extended
            padding 0
            padding-right 2rem
            margin-right 50%

@media screen and (min-width: 1200px)
  .section-slide
    .section-container
      max-width 64rem

      .image
        padding-right 3rem

      .section-content
        padding-left 3rem

    &.ss-text
      .section-container
        max-width 72rem
        .section-content
          column-gap 4rem
</style>
