<template>
  <section id="section-cover">
    <div class="section-container">
      <h1>The Internet of Blockchains</h1>
      <div class="description">
        <p><span class="fl">C</span>osmos is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities.</p>
        <h2>Architecture</h2>
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
        <h2>Cosmos Hub</h2>
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
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    scrollDown () {
      let height = $('#walkthrough-1').offset().top - 48
      $('html, body').animate({ scrollTop: height }, 666)
    },
    viewStep (id) {
      let scrollSpeed = 666
      let height = $(id).offset().top
      if (id !== '#walkthrough') { height -= 48 }
      $('html, body').animate({ scrollTop: height }, scrollSpeed)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#section-cover
  margin-top 3rem
  padding 3rem 1.5rem 1.5rem

.section-container
  max-width 40rem
  margin 0 auto

h1
  font-size 2rem
  letter-spacing 0.01em
  line-height 1.25

  margin 0 0 2rem
  text-align center

h2
  font-size 1.5rem
  margin 0 0 1rem
  letter-spacing 0.01em
  text-align center

p
  margin 0 0 1.5*x

.fl
  float left
  background txt
  padding 0 0.5rem
  margin-top 0.25rem
  margin-right 0.5rem

  font-size 2.72rem
  line-height 1.25
  color #fff

  vertical-align bottom

@media screen and (min-width: 414px)
  .fl
    font-size 3.2rem
  h1
    font-size 2.5rem
    margin 0 0 3rem
  
@media screen and (min-width: 720px)
  .section-container
    padding-top 1.5rem
    padding-bottom 3rem

  .description
    column-count 2
    column-gap 2rem
    column-break-inside avoid

  
@media screen and (min-width: 960px)
  .section-container
    max-width 50rem

@media screen and (min-width: 1200px)
  .section-container
    max-width 64rem

  .description
    column-count 3
</style>
