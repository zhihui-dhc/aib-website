<template>
  <div class="toc-hidden-bar" v-show="!tocVisible" @click="showToc(true)">
    <i class="material-icons">menu</i>
  </div>
  <div class="toc-wrapper" v-show="tocVisible">
    <div class="toc-header">
      <a class="toc-title" href="#page-top">Table of Contents</a>
      <i class="toc-toggle material-icons" @click="showToc(false)">chevron_left</i>
    </div>
    <ul>
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
</template>

<script>
import $ from 'jquery'
import Ps from 'perfect-scrollbar'

export default {
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.toc-wrapper'))
        this.tocVisible = value
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))
        this.tocVisible = false
      }
    },
    watchClicks () {
      let self = this
      $('.toc-wrapper a').click(function (e) {
        e.preventDefault()
        let scrollSpeed = 666
        let targetElement = $(e.target).attr('href')
        let height

        if (targetElement === '#page-top') {
          height = 0
        } else {
          height = $(targetElement).offset().top - 48 - 16
        }

        // if it's a small screen, hide the toc on click
        let vw = $(window).width()
        if (vw < 960) {
          self.showToc(false)
        }

        // scroll to the element
        $('html, body').animate({ scrollTop: height }, scrollSpeed)
      })
    }
  },
  ready () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    this.watchClicks()
  },
  props: ['toc-visible']
}

</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.toc-wrapper
  ul > li > a
    font-weight normal
</style>
