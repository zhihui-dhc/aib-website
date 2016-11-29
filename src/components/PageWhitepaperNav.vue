<template>
  <div>
    <div class="toc-hidden-bar" v-show="!whitepaperTocVisible" @click="showToc(true)">
      <i class="fa fa-bars"></i>
    </div>
    <div class="mobile-only">
      <div class="toc-hidden-bar" v-show="whitepaperTocVisible" @click="showToc(false)">
        <i class="fa fa-times"></i>
      </div>
    </div>

    <div class="toc-wrapper" v-show="whitepaperTocVisible">
      <div class="toc-header">
        <div class="toc-title">Table of Contents</div>
        <i class="fa fa-print" @click="printWhitepaper"></i>
        <i class="toc-toggle fa fa-angle-right desktop-only" @click="showToc(hide)"></i>
        <i class="toc-toggle fa fa-times mobile-only" @click="showToc(hide)"></i>
      </div>
      <ul>
        <li class="mobile-only">
          <a href="#page-top">Cosmos Whitepaper</a>
          <li><a href="#introduction">Introduction</a></li>
          <li>
            <a href="#tendermint">Tendermint</a>
            <ul>
              <li><a href="#validators">Validators</a></li>
              <li><a href="#consensus">Consensus</a></li>
              <li><a href="#light-clients">Light Clients</a></li>
              <li><a href="#preventing-attacks">Preventing Attacks</a></li>
              <li><a href="#tmsp">TMSP</a></li>
            </ul>
          </li>
          <li>
            <a href="#cosmos-overview">Cosmos Overview</a>
            <ul>
              <li><a href="#tendermint-bft">Tendermint-BFT</a></li>
              <li><a href="#governance">Governance</a></li>
            </ul>
          </li>
          <li>
            <a href="#the-hub-and-zones">The Hub and Zones</a>
            <ul>
              <li><a href="#the-hub">The Hub</a></li>
              <li><a href="#the-zones">The Zones</a></li>
            </ul>
          </li>
          <li><a href="#inter-blockchain-communication-ibc">Inter-blockchain Communication (IBC)</a></li>
          <li>
            <a href="#use-cases">Use Cases</a>
            <ul>
              <li><a href="#distributed-exchange">Distributed Exchange</a></li>
              <li><a href="#pegging-to-other-cryptocurrencies">Pegging to Other Cryptocurrencies</a></li>
              <li><a href="#ethereum-scaling">Ethereum Scaling</a></li>
              <li><a href="#multi-application-integration">Multi-Application Integration</a></li>
              <li><a href="#network-partition-mitigation">Network Partition Mitigation</a></li>
              <li><a href="#federated-name-resolution-system">Federated Name Resolution System</a></li>
            </ul>
          </li>
          <li>
            <a href="#issuance-and-incentives">Issuance and Incentives</a>
            <ul>
              <li>
                <a href="#the-atom-token">The Atom Token</a>
                <ul>
                  <li><a href="#fundraiser">Fundraiser</a></li>
                  <li><a href="#vesting">Vesting</a></li>
                </ul>
              </li>
              <li><a href="#limitations-on-the-number-of-validators">Limitations on the Number of Validators</a></li>
              <li><a href="#becoming-a-validator-after-genesis-day">Becoming a Validator After Genesis Day</a></li>
              <li><a href="#penalties-for-validators">Penalties for Validators</a></li>
              <li><a href="#transaction-fees">Transaction Fees</a></li>
              <li><a href="#incentivizing-hackers">Incentivizing Hackers</a></li>
            </ul>
          </li>
          <li>
            <a href="#governance-specification">Governance Specification</a>
            <ul>
              <li><a href="#parameter-change-proposal">Parameter Change Proposal</a></li>
              <li><a href="#text-proposal">Text Proposal</a></li>
            </ul>
          </li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li>
            <a href="#related-work">Related Work</a>
            <ul>
              <li>
                <a href="#consensus-systems">Consensus Systems</a>
                <ul>
                  <li><a href="#classic-byzantine-fault-tolerance">Classic Byzantine Fault Tolerance</a></li>
                  <li><a href="#bitshares-delegated-stake">BitShares delegated stake</a></li>
                  <li><a href="#stellar">Stellar</a></li>
                  <li><a href="#bitcoinng">BitcoinNG</a></li>
                  <li><a href="#casper">Casper</a></li>
                </ul>
              </li>
              <li>
                <a href="#horizontal-scaling">Horizontal Scaling</a>
                <ul>
                  <li><a href="#interledger-protocol">Interledger Protocol</a></li>
                  <li><a href="#sidechains">Sidechains</a></li>
                  <li><a href="#ethereum-scalability-efforts">Ethereum Scalability Efforts</a></li>
                </ul>
              </li>
              <li>
                <a href="#general-scaling">General Scaling</a>
                <ul>
                  <li><a href="#lightning-network">Lightning Network</a></li>
                  <li><a href="#segregated-witness">Segregated Witness</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#appendix">Appendix</a>
            <ul>
              <li><a href="#fork-accountability">Fork Accountability</a></li>
              <li><a href="#tendermint-consensus">Tendermint Consensus</a></li>
              <li><a href="#tendermint-light-clients">Tendermint Light Clients</a></li>
              <li><a href="#preventing-long-range-attacks">Preventing Long Range Attacks</a></li>
              <li><a href="#overcoming-forks-and-censorship-attacks">Overcoming Forks and Censorship Attacks</a></li>
              <li><a href="#tmsp-specification">TMSP Specification</a></li>
              <li><a href="#ibc-packet-delivery-acknowledgement">IBC Packet Delivery Acknowledgement</a></li>
              <li>
                <a href="#merkle-tree-proof-specification">Merkle Tree & Proof Specification</a>
                <ul>
                  <li><a href="#simple-tree">Simple Tree</a></li>
                  <li><a href="#iavl-tree">IAVL+ Tree</a></li>
                </ul>
              </li>
              <li>
                <a href="#transaction-types">Transaction Types</a>
                <ul>
                  <li><a href="#ibcblockcommittx">IBCBlockCommitTx</a></li>
                  <li><a href="#ibcpackettx">IBCPacketTx</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#acknowledgements">Acknowledgements</a></li>
          <li>
            <a href="#citations">Citations</a>
            <ul>
              <li><a href="#unsorted-links">Unsorted links</a></li>
            </ul>
          </li>
        </li>
      </ul>
    </div><!--toc-wrapper-->
  </div>
</template>

<script>
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'
import { mapGetters } from 'vuex'
export default {
  name: 'page-whitepaper-nav',
  computed: {
    ...mapGetters([
      'whitepaperTocVisible',
      'whitepaperElementsVisible'
    ])
  },
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.toc-wrapper'))
        this.$store.commit('setWhitepaperTocVisible', true)
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))
        this.$store.commit('setWhitepaperTocVisible', false)
      }
    },
    printWhitepaper () { window.print() }
  },
  mounted () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    watchTocClicks(this.showToc)
    this.$store.commit('setWhitepaperElementsVisible',
      inViewport(document.querySelectorAll('h2, h3, h4')))
    percentageScrolling()
  },
  props: ['toc-visible'],
  watch: {
    whitepaperElementsVisible () { visibleTocActivate(this.whitepaperElementsVisible) }
  }
}
</script>
