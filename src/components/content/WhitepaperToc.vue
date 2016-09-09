<template>
  <div class="toc-hidden-bar" v-show="!tocVisible" @click="showToc(true)">
    <i class="material-icons">menu</i>
  </div>
  <div class="mobile-only">
    <div class="toc-hidden-bar" v-show="tocVisible" @click="showToc(false)">
      <i class="material-icons">close</i>
    </div>
  </div>

<div class="toc-wrapper" v-show="tocVisible">
<div class="toc-header">
  <div class="toc-title">Table of Contents</div>
  <i class="toc-toggle material-icons desktop-only" @click="showToc(hide)">chevron_right</i>
  <i class="toc-toggle material-icons mobile-only" @click="showToc(hide)">close</i>
</div>
<ul>
<li class="mobile-only"><a href="#page-top">Whitepaper</a>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#tendermint">Tendermint</a><ul>
<li><a href="#validators">Validators</a></li>
<li><a href="#consensus">Consensus</a></li>
<li><a href="#light-clients">Light Clients</a></li>
<li><a href="#preventing-attacks">Preventing Attacks</a></li>
<li><a href="#tmsp">TMSP</a></li>
</ul>
</li>
<li><a href="#cosmos-overview">Cosmos Overview</a>
  <ul>
  <li><a href="#tendermint-bft-dpos">Tendermint-BFT DPoS</a></li>
  <li><a href="#cosmos-governance">Governance</a></li>
  </ul>
</li>
<li><a href="#the-hub-and-zones">The Hub and Zones</a><ul>
<li><a href="#the-hub">The Hub</a></li>
<li><a href="#the-zones">The Zones</a></li>
</ul>
</li>
<li><a href="#inter-blockchain-communication-ibc">Inter-blockchain Communication (IBC)</a></li>
<li><a href="#use-cases">Use Cases</a><ul>
<li><a href="#pegging-to-other-cryptocurrencies">Pegging to Other Cryptocurrencies</a></li>
<li><a href="#ethereum-scaling">Ethereum Scaling</a></li>
<li><a href="#multi-application-integration">Multi-Application Integration</a></li>
<li><a href="#network-partition-mitigation">Network Partition Mitigation</a></li>
<li><a href="#federated-name-resolution-system">Federated Name Resolution System</a></li>
</ul>
</li>
<li><a href="#issuance-and-incentives">Issuance and Incentives</a><ul>
<li><a href="#the-atom-token">The Atom Token</a><ul>
<li><a href="#crowdfund">Crowdfund</a></li>
<li><a href="#vesting">Vesting</a></li>
</ul>
</li>
<li><a href="#limitations-on-the-number-of-validators">Limitations on the Number of
Validators</a></li>
<li><a href="#becoming-a-validator-after-genesis-day">Becoming a Validator After Genesis
Day</a></li>
<li><a href="#penalties-for-validators">Penalties for Validators</a></li>
<li><a href="#transaction-fees">Transaction Fees</a></li>
<li><a href="#incentivizing-hackers">Incentivizing Hackers</a></li>
</ul>
</li>
<li><a href="#governance">Governance</a><ul>
<li><a href="#parameter-change-proposal">Parameter Change Proposal</a></li>
<li><a href="#text-proposal">Text Proposal</a></li>
</ul>
</li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#related-work">Related Work</a><ul>
<li><a href="#consensus-systems">Consensus Systems</a><ul>
<li><a href="#classic-byzantine-fault-tolerance">Classic Byzantine Fault Tolerance</a></li>
<li><a href="#bitshares-delegated-stake">BitShares delegated stake</a></li>
<li><a href="#stellar">Stellar</a></li>
<li><a href="#bitcoinng">BitcoinNG</a></li>
<li><a href="#casper">Casper</a></li>
</ul>
</li>
<li><a href="#horizontal-scaling">Horizontal Scaling</a><ul>
<li><a href="#interledger-protocol">Interledger Protocol</a></li>
<li><a href="#sidechains">Sidechains</a></li>
<li><a href="#ethereum-scalability-efforts">Ethereum Scalability Efforts</a></li>
</ul>
</li>
<li><a href="#general-scaling">General Scaling</a><ul>
<li><a href="#lightning-network">Lightning Network</a></li>
<li><a href="#segregated-witness">Segregated Witness</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#appendix">Appendix</a><ul>
<li><a href="#fork-accountability">Fork Accountability</a></li>
<li><a href="#tendermint-consensus">Tendermint Consensus</a></li>
<li><a href="#tendermint-light-clients">Tendermint Light Clients</a></li>
<li><a href="#preventing-long-range-attacks">Preventing Long Range Attacks</a></li>
<li><a href="#overcoming-forks-and-censorship-attacks">Overcoming Forks and Censorship
Attacks</a></li>
<li><a href="#tmsp-specification">TMSP Specification</a></li>
<li><a href="#ibc-packet-delivery-acknowledgement">IBC Packet Delivery
Acknowledgement</a></li>
<li><a href="#merkle-tree-proof-specification">Merkle tree &amp; proof
specification</a></li>
<li><a href="#transaction-types">Transaction Types</a><ul>
<li><a href="#ibcblockcommittx">IBCBlockCommitTx</a></li>
<li><a href="#ibcpackettx">IBCPacketTx</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#acknowledgements">Acknowledgements</a></li>
<li><a href="#citations">Citations</a></li>
</ul>
</div><!--toc-wrapper-->
</template>

<script>
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../../scripts/watchTocClicks.js'
import elementsVisibleTrack from '../../scripts/elementsVisibleTrack.js'
import visibleTocActivate from '../../scripts/visibleTocActivate.js'
import percentageScrolling from '../../scripts/percentageScrolling.js'

export default {
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.toc-wrapper'))
        this.$store.dispatch('SET_WHITEPAPER_TOC_VISIBLE', true)
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))
        this.$store.dispatch('SET_WHITEPAPER_TOC_VISIBLE', false)
      }
    }
  },
  ready () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    watchTocClicks(this.showToc)
    this.$store.dispatch('SET_WHITEPAPER_ELEMENTS_VISIBLE', elementsVisibleTrack())
    percentageScrolling()
  },
  props: ['toc-visible'],
  vuex: {
    getters: {
      elementsVisible: state => state.toc.whitepaper.elementsVisible,
      tocVisible: state => state.toc.whitepaper.tocVisible
    }
  },
  watch: {
    elementsVisible () { visibleTocActivate(this.elementsVisible) }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
