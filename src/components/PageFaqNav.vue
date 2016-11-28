<template>
  <div class="page-faq-nav">
    <div class="toc-hidden-bar" v-show="!faqTocVisible" @click="showToc(true)">
      <i class="fa fa-bars"></i>
    </div>
    <div class="mobile-only">
      <div class="toc-hidden-bar" v-show="faqTocVisible" @click="showToc(false)">
        <i class="fa fa-times"></i>
      </div>
    </div>
    <div class="toc-wrapper" v-show="faqTocVisible">
      <div class="toc-header">
        <div class="toc-title">Table of Contents</div>
        <i class="toc-toggle fa fa-angle-right desktop-only" @click="showToc(hide)"></i>
        <i class="toc-toggle fa fa-times mobile-only" @click="showToc(hide)"></i>
      </div>
      <ul>
        <li class="mobile-only"><a href="#page-top">FAQ</a>
          <li><a href="#whats-sharding">What is sharding?</a></li>
          <li><a href="#how-is-sharding-done">How does Cosmos do sharding?</a></li>
          <li><a href="#whats-an-ibc-packet">What&#39;s an IBC packet?</a></li>
          <li><a href="#isnt-this-sidechains">Isn&#39;t this just sidechains, like what Blockstream proposed?</a></li>
          <li><a href="#compared-to-ethereum">How does Cosmos compare to Ethereum sharding?</a></li>
          <li><a href="#why-shards-are-zones">Why do you refer to shards in Cosmos as zones?</a></li>
          <li><a href="#btc-to-eth-possible">Can I trade bitcoins for ether using Cosmos?</a></li>
          <li><a href="#is-escrow-involved">Does Cosmos involve escrow?</a></li>
          <li><a href="#is-consensus-configurable">Is consensus configurable?  When I am switching between blockchains won&#39;t my consensus be different in different scenarios?</a></li>
          <li><a href="#zone-own-validators">Do chosen validators validate transactions for every zone and hub?</a></li>
          <li><a href="#asymmetric-transfer">What is asymmetric transfer</a></li>
          <li><a href="#abandoning-validators">What will be the process for abandoning validators that misbehave?</a></li>
          <li><a href="#delegators-and-validators">Can delegators also be validators?  Or are delegators never validators?</a></li>
          <li><a href="#cosmos-governance">Why is Cosmos&#39;s governance better than any other options out there?</a></li>
          <li><a href="#use-cases">What Cosmos use cases do you think are most compelling in the future?</a></li>
          <li><a href="#cosmos-interledger">Does Ripple’s Interledger complement Cosmos or do the two compete with one another?</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'

export default {
  name: 'page-faq-nav',
  computed: {
    ...mapGetters([
      'faqTocVisible',
      'faqElementsVisible'
    ])
  },
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.toc-wrapper'))
        this.$store.commit('setFaqTocVisible', true)
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))

        this.$store.commit('setFaqTocVisible', false)
      }
    }
  },
  mounted () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    watchTocClicks(this.showToc)
    this.$store.commit('setFaqElementsVisible',
      inViewport(document.querySelectorAll('h2, h3, h4')))
    percentageScrolling()
  },
  props: ['toc-visible'],
  watch: {
    faqElementsVisible () { visibleTocActivate(this.faqElementsVisible) }
  }
}
</script>

<style lang="stylus">
.page-faq-nav .toc-wrapper ul > li > a
  font-weight 300
</style>
