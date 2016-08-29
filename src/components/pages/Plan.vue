<template>
  <div class="header-padding"></div>
  <div class="article-wrapper">

    <h1>Crowdfund Plan</h1>

    <div class="toc-wrapper">
      <h2><a href="#page-top">Crowdfund Plan</a></h2>
      <ul>
        <li><a href="#definitions">Definitions</a>
          <ul>
            <li><a href="#essential-cosmos-software-and-services">Essential Cosmos Software and Services</a></li>
          </ul>
        </li>
        <li><a href="#funding">Funding</a>
          <ul>
            <li><a href="#phase-0-the-prefund">Phase 0: the Prefund</a></li>
            <li><a href="#phase-1-the-crowdfund">Phase 1: the Crowdfund</a></li>
            <li><a href="#funding-milestones">Funding Milestones</a></li>
          </ul>
        </li>
        <li><a href="#timeline">Timeline</a></li>
      <ul>
    </div>

    <p>DATE: July 22nd, 2016<br/>
      LAST UPDATED: Aug 12th, 2016<br/>
      NOTE: The details in this plan override what is currently in the whitepaper.</p>
    <ul>
      <li><p>Cosmos Inc will be a for-profit Canadian entity.  Its mission is to
          create, maintain, and further develop, the Cosmos Ecosystem.</p>
      </li>
      <li><p>There will be a Crowdfunding campaign to sell tokens, called &quot;atoms&quot;, that
          give the holder limited license to use the Cosmos Hub.  The proceeds of the
          Crowdfunding campaign will go to Cosmos Inc to develop the Essential Cosmos
          Software and Services.</p>
      </li>
      <li>There will be 20,000,000 atoms on Genesis day. On Genesis day, the
        distribution of atoms will be split between:
        <ul>
          <li>Pre-funders (5%)</li>
          <li>Cosmos Inc (20%)</li>
          <li>Crowdfund Funders (75%)</li>
        </ul>
      </li>
      <li><p>Upon completion of the Crowdfund, all the atom holders, including Cosmos Inc,
          play the Delegation Game in a special purpose Ethereum smart contract (which
          holds no Ether).  The top 100 validators after delegation will be chosen as
          validators on Genesis.</p>
      </li>
      <li><p>Everyone&#39;s atoms will vest over a period of two years after Genesis.  Unvested
          atoms cannot be transferred until vested.  Unvested atoms will vest over time,
          at a rate of 1/(24x365x2) of the account&#39;s atoms, every hour.</p>
      </li>
      <li><p>Every validator must participate in governance, or else become inactivated and
          eventually unbonded.  Delegators who delegate atoms to such validators will
          also likewise get their delegated atoms inactivated and eventually unbonded.</p>
      </li>
      <li><p>Anyone may receive more atoms by passing a proposal with an attached award.
          Such reward atoms will be purely inflationary.</p>
      </li>
      <li><p>1/3 of the total number of atoms will be distributed back to the bonded atom
          holders for having a stake in consensus.  This a tax (disincentive) for not
          putting atoms at stake, and not participating in governance during the first two
          years after Genesis.</p>
      </li>
    </ul>

    <h2 id="definitions">Definitions</h2>
    <p><strong>Cosmos Inc</strong>: Cosmos Inc is a for-profit legal entity that manages the
      Crowdfund and Genesis of the Cosmos Hub.  Besides the initial development of the
      Essential Cosmos Software and Services, Cosmos Inc has no further obligations
      with regards to the Cosmos Ecosystem, Cosmos Hub, or derivatives
      (forks) of the Cosmos Hub, but instead is a general participant in the network.</p>
    <p><strong>Cosmos Ecosystem</strong>: Includes the Cosmos Network and other software and
      services, including validator and client software.</p>
    <p><strong>Cosmos Hub</strong>: An Cosmos hub is itself a blockchain, or zone, that connects to
      many other zones.  The hub facilitates token movement between zones.  The Cosmos
      Hub will be the first hub, and the first zone.</p>
    <p><strong>Cosmos Hub Block Reward</strong>: The blockchain will reward the Validators and
      Delegators in proportion to their bonded atoms, and afterwards account for any
      commissions that delegators pay to delegate validators.  The reward will consist
      of two categories -- transaction fees, and inflationary atoms.  The transction
      fees will be any fee collected by a validator.  In addition, there will be
      inflationary atoms at a rate of 1/3 of the total number of atoms per year.
      Cosmos holders who do not put their atoms at stake by being a validator or
      delegating to a validator will not receive any of the Cosmos Hub Block Rewards.</p>
    <p><strong>Cosmos Network</strong>: Includes the Cosmos Hub and all connected zones.</p>
    <p><strong>Crowdfund</strong>: An atom token crowdfund event that happens during a period of 42
      days.  There will be a website where those who wish to purchase atoms can sign
      up The crowdfund proceeds will be used to complete the Essential Cosmos Software
      and Services, starting with the release of TendermintCore. </p>
    <p><strong>Delegator</strong>: An atom holder who puts their atoms at stake by delegating its
      validating power and voting power to a validator.  They are still responsible
      for voting on proposals during the vesting period.  If they don&#39;t vote they
      will be penalized, but they will inherit the vote of the delegated validator.</p>
    <p><strong>Early Funders</strong>: The Early Funders are qualified investors who purchase 5% of
      the Genesis atoms prior to the crowdfund.  The majority of the proceeds from the
      early funding will go toward legal and PR fees, and also help pay salary for
      Cosmos Inc until the crowdfunding is complete.</p>
    <p><strong>Validator</strong>: Validators are full nodes of a Cosmos zone that have the
      responsibility of committing blocks in that zone.  The Cosmos Hub will start
      with 100 validator spots.  Due to the limited number of validator spots, not
      everyone who has atoms can be a validator.  Instead, everyone else can bond
      atoms and delegate their consensus voting power to any of the 100 validators.
      Before Genesis, the Cosmos Crowdfund funders will play the Delegation Game to
      determine the top 100 bonded delegates who will become the genesis validators.</p>
    <h3 id="essential-cosmos-software-and-services">Essential Cosmos Software and Services</h3>
    <p><strong>TendermintCore</strong></p>
    <ul>
      <li><em>Alpha</em><ul>
          <li>fix existing issues</li>
          <li>mempool optimization</li>
          <li>peer exchange handler</li>
          <li>validator set changes</li>
          <li>fork detection and handling</li>
        </ul>
      </li>
      <li><em>Beta</em><ul>
          <li>tendermint consensus v2</li>
        </ul>
      </li>
    </ul>
    <p><strong>Cosmos Hub</strong></p>
    <ul>
      <li><em>Alpha</em><ul>
          <li>multiasset accounts</li>
          <li>atom staking with delegation</li>
          <li>governance</li>
          <li>basic wallet client</li>
        </ul>
      </li>
      <li><em>Beta</em><ul>
          <li>zone support<ul>
              <li>exchange zone</li>
              <li>ethereum zone</li>
              <li>import crypto distributions</li>
            </ul>
          </li>
          <li>Cosmos network explorer client</li>
        </ul>
      </li>
    </ul>
    <p><strong>Other</strong></p>
    <ul>
      <li>hardware wallet integration <em>with sufficient funding</em></li>
      <li>Ethereum peg <em>with sufficient funding</em></li>
      <li>Bitcoin peg <em>with partner, if possible</em></li>
    </ul>

    <h2 id="funding">Funding</h2>

    <p>Funds will be raised by Cosmos Inc in 2 phases.</p>

    <h3 id="phase-0-the-prefund">Phase 0: the Prefund</h3>
    <p>During the Prefund, 5% of future Genesis atoms will be sold to qualified
      investors with a cap and/or discount.  The proceeds from the Early Investors
      will be used to prepare for and execute the crowdfund, as well as to pay for
      legal expenses.</p>

    <h3 id="phase-1-the-crowdfund">Phase 1: the Crowdfund</h3>
    <p>During the Crowdfund, 75% of future Genesis atoms will be sold to sophisticated
      members of the public who wish to support or participate in this project.
      The crowdfund will happen over a period of 42 days as the Ethereum crowdfund.</p>
    <p>The crowdfund will be capped at $9M equivalent of bitcoins after the first 24
      hours of the crowfund.  After 24 hours since the beginning of the crowdfund,
      when the total amount raised exceeds $9M given the price of bitcoin at 9am PDT
      the morning of, the crowdfund will immediately stop.</p>
    <h3 id="funding-milestones">Funding Milestones</h3>
    <ul>
      <li>If the crowdfund does not meet the minimum $3M -- 95+% of funds returned</li>
      <li>If the crowdfund exceeds $3M -- Essential Cosmos Software</li>
      <li>If the crowdfund exceeds $5M -- Ethereum peg</li>
      <li>If the crowdfund exceeds $7M -- Open-source hardware wallet (sold separately)</li>
    </ul>

    <h2 id="timeline">Timeline</h2>
    <ol>
      <li>Prefund for 5% of Genesis atoms</li>
      <li>Canadian non-profit is created</li>
      <li>Begin Crowdfund</li>
      <li>End of Crowdfund after 42 days or cap reache (EoCF)</li>
      <li>EoCF + 2 months: alpha release candidate of TendermintCore for security audit</li>
      <li>EoCF + 4 months: alpha release of TendermintCore</li>
      <li>EoCF + 7 months: alpha release candidate of Cosmos Hub for security audit</li>
      <li>EoCF + 9 months: alpha release of Cosmos Hub</li>
      <li>EoCF + 10 months: launch Cosmos Hub alpha</li>
      <li>EoCF + 12 months: begin sale of open-source hardware wallet (if funding
        milestone reached)</li>
      <li>EoCF + 13 months: beta release candidate of Alpha Hub for security audit</li>
      <li>EoCF + 15 months: launch Cosmos Hub beta</li>
      <li>EoCF + 15 months+: Continuous development, timeline set by Cosmos Inc</li>
      <li>Timeline for Bitcoin peg support depends on partnership</li>
      <li>Timeline for Ethereum peg support set after alpha release of Cosmos Hub</li>
    </ol>

  </div>
</template>

<script>
import tocScroll from '../../scripts/tocScroll.js'

export default {
  ready () {
    tocScroll()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

@media screen and (min-width: 1280px)
  .toc-wrapper
    border-right 1px solid bc
</style>
