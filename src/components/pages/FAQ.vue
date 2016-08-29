<template>
  <div class="header-padding"></div>
  <div class="article-wrapper">
    <h1 id="faq-top">FAQ</h1>

    <faq-contents></faq-contents>

    <h4 id="whats-sharding">What is sharding?</h4>
    <p>Sharding is about dividing the workload up into pieces for the purpose of
      horizontal scaling.  There are many ways to handle sharding in SQL databases,
      but sharding for blockchains is an emerging field.  The closest thing we have
      are the altcoins ecosystem, but this isn&#39;t very good because all the altcoins
      are their own silos with no good way to interoperate except via centralized
      exchanges, or tricks like hashlocked transactions (like the Lightning Network),
      which have their own benefits and drawbacks.</p>

    <h4 id="how-is-sharding-done">How does Cosmos do sharding?</h4>
    <p>Cosmos implements sharding using zones. It&#39;s a sharding solution that preserves
      the sovereignty of the shard as a self-governing and self-validating system.
      The Cosmos Hub doesn&#39;t care about the internal state of an Cosmos zone --
      rather, all that matters to the Cosmos Hub is what the zone explicitly
      communicates to the Cosmos Hub via IBC packets.</p>
    <h4 id="whats-an-ibc-packet">What&#39;s an IBC packet?</h4>
    <p>IBC packets are packets of data that one blockchain wishes to send to another
      blockchain.  But instead of literally sending a packet of bytes via the TCP/IP
      or UDP/IP protocol (which is designed for singular, physical, machines), IBC
      packets require cryptographic proof-of-existence.  Since no single node or
      validator has the authority to speak on behalf of the entire blockchain, and,
      since we don&#39;t want to rely on the integrity of the IP internet infrastructure,
      instead we rely on a cryptographic proof of a blockchain hash commit (+2/3 of
      signatures for that blockchain hash) along with a Merkle-proof from the
      aforementioned blockhash to a packet in the blockchain&#39;s &quot;application state&quot;,
      which proves that the blockchain validators agreed to publish this packet of
      information.  So, anyone who sees an IBC packet (regardless of the source of
      this data) can verify its integrity.</p>
    <h4 id="isnt-this-sidechains">Isn&#39;t this just sidechains, like what Blockstream proposed?</h4>
    <p>Yes. Exactly. Except in Cosmos, the hubs and zones are all powered by Tendermint
      consensus.  IBC on Tendermint is great because of all the reasons why
      light-client payment verification is great as compared to proof-of-work --
      superior speed, no need to download all the block headers, 1-block finality, and
      security via collateral.  So Cosmos is a bit like Blockstream&#39;s sidechains
      proposal, except with the Cosmos Hub at the center instead of Bitcoin, which
      makes everything faster and simpler, and arguably more secure.  Also the fact
      that the Cosmos Hub is a multiasset blockchain is a big advantage.</p>
    <h4 id="compared-to-ethereum">How does Cosmos compare to Ethereum sharding?</h4>
    <p>Vitalik is working on sharding solutions for Ethereum, but the solutions I&#39;ve
      seen assume that all the shards are running the same VM.  The biggest difference
      between what Vitalik&#39;s latest sharding design and Cosmos is that the Cosmos Hub
      lets you plug in any zone, even for entirely different VMs or zones with no VMs
      at all (like Bitcoind).  This works because the Cosmos Hub is about preserving
      the total number of tokens across zones/shards, whereas Vitalik&#39;s scaling
      solution is about sharding the general Ethereum state machine state.  The zones
      of the Cosmos Hub don&#39;t care that other zones fail or crash, as long as the
      Cosmos Hub continues to function and preserves the total number of tokens across
      all the zones.  Vitalik is trying to create a sharding solution where none of
      the shards may fail, because the internal state of those shards can mean
      anything at all.  Vitalik is trying to solve a much more difficult problem. If
      we do our job right, we will be able to implement whatever he comes up within
      Cosmos.</p>
    <h4 id="why-shards-are-zones">Why are shards called zones?</h4>
    <p>Shards are called zones in Cosmos because they really are like sovereign
      economic zones.  We&#39;ve seen a taste of blockchain governance with the Ethereum
      hard-fork following TheDAO hack.  In Cosmos, all zones are sovereign and can
      construct their own governance policies, and yet they can all interoperate on
      the Cosmos Hub.  That&#39;s the benefit of the IBC abstraction, that it&#39;s about
      accountable and cryptographicaly verifiable communication.</p>
    <h4 id="how-does-curreny-exchange-work">How does one exchange currencies in this system?</h4>
    <p>For tokens outside the Cosmos system, they can only be introduced via pegged
      derivatives (akin to what Blockstream&#39;s sidechains paper was suggesting).  I
      suppose you could also use other means to track the value of some token inside
      the Cosmos network by involving prediction markets or betting, but I&#39;m not an
      expert on those.  They can be supported too by other zones, but I won&#39;t go into
      them here.</p>
    <p>In the Cosmos Hub, pegs will be tied to a specific zone; that is, a zone and its
      validator sets are expected to also be involved in a m-of-n contract on the
      target chain, like Bitcoin or Ethereum.</p>
<pre><code>           _ peg smart contract
/
[  Ethereum  ] &lt;--&gt; [ EtherCosmos Peg Zone ] &lt;-IBC-&gt; [  Cosmos Hub  ] &lt;-IBC-&gt; (Bitcoin) [ PoW/Casper ]
[      Tendermint      ]         [  Tendermint  ] &lt;-IBC-&gt; (exchange)
</code></pre><p>Once the tokens are in the hub, its must easier to exchange currencies.  Either
      trade with another account directly in the Cosmos Hub (a Send transaction with
      two inputs and two outputs, with 2 different assets, swapped).  But this
      requires both parties to the trade to be online.  Instead, you can send your
      tokens to an exchange zone, to take advantage of an order-book.</p>
    <h4 id="btc-to-eth-possible">So can I trade BTC for ETH using Cosmos?</h4>
    <p>You can, if you trust the respective Ethereum and Bitcoin peg zones.  If
      alternatives of Ethereum and Bitcoin (ie. same codebase, different network)
      launch on Cosmos, you can trade those directly.</p>
    <h4 id="is-escrow-involved">Does Cosmos involve escrow?</h4>
    <p>Not really, though the hub may be thought of as an escrow agent mediating
      between two zones, but that&#39;s of course the point.  However, the pegs in
      peg-zones may well utilize escrow to allow, for instance, BTC to move into a
      zone.</p>
    <h4 id="blockchains-to-cosmos">How does one switch blockchains in this system?</h4>
    <p>The zone is responsible for committing an IBC packet with outbound coins for
      another zone.  Zones can do whatever they want, so it&#39;s really up to the logic
      of the zone, as well as the client.  Ideally there will be a standard
      specification for constructing a transaction to move funds from one zone to
      another.  So an EVM zone should be implemented such that it can process this
      universal transaction format that lets any simple user account send funds to
      another zone via the Cosmos Hub (or any other hub).  This may be something to be
      defined as an IETF or W3C specification, but it&#39;s a bit too early for that, so
      we should forge ahead and document the spec for everyone to see.</p>
    <p>There should be some specification for defining:</p>
    <ul>
      <li>the destination zone</li>
      <li>the intermediary zones (typically the Cosmos Hub)</li>
      <li>the assets and quantity</li>
      <li>the destination account or smart contract</li>
      <li>any other information</li>
    </ul>
    <p>These are specified <a href="https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md#ibcpackettx">here</a>.</p>
    <p>There will also be way to navigate these zones, whereby nodes or validators of a
      zone can publish their IP endpoints or whatnot, voluntarily.  So zone discovery
      is a thing, but mostly it&#39;s up to the end-client software to understand this
      plumbing.  End-users shouldn&#39;t know all of the details except a few rules for
      safety, like &quot;don&#39;t send money to zones you don&#39;t know&quot;.</p>
    <h4 id="is-consensus-configurable">Is consensus configurable?  When I am switching between blockchains won&#39;t my
      consensus be different in different scenarios?</h4>
    <p>We can accomodate other PoS consensus mechanisms as long as they have a very
      clean and consise light-client verification protocol.  Or, even Tendermint might
      upgrade to support additional features.  It will be up to the Cosmos Foundation
      and the Cosmos governance to decide whether to support them.  It isn&#39;t necessary
      if there can be adapter zones.  That&#39;s what a Bitcoin peg zone is -- an adapter
      zone to sit between PoW and Tendermint.</p>
    <h4 id="max-nodes-in-cosmos">What is the maximum number of nodes in Cosmos?  Does each zone or hub have
      their own nodes?</h4>
    <p>Yes.  Each zone has its own nodes, we don&#39;t re-use public keys (yet, though we
      could in the future).  Different atoms bonded in each zone, but all the same
      atom token.</p>
    <h4 id="validator-powers">Do the validatiors that are chosen, validate transactions for every zone and
      Hub?</h4>
    <p>No.  Validators for a zone only validate transactions for their zone.</p>
    <h4 id="asymmetric-transfer">The whitepaper states &quot;Zones communicate with one another through a hub,
      primarily in the form of assymetric transfer of some set of tokens from one
      zone to another.&quot; Can you talk about what exactly the asymmetric transfer is?</h4>
    <p>It&#39;s maybe not the best term, but we coined it to refer to the kind of
      inter-zone token transfer that happens in the Cosmos Hub.  The transfer of
      tokens was not via any bidirectional or bilateral exchange mechanism, or even
      through a peg.  It&#39;s as if the token moved from one zone to another.  The trick
      is that there is a common crypto &quot;depository&quot; -- the Cosmos Hub.</p>
    <h4 id="successful-hubs">According to the whitepaper: &quot;Cosmos reflects this position in that it makes
      no distinction between hubs - there is no &quot;top&quot; hub, and the most popular or
      successful hub is a matter of adoption by zones. &quot;  In your view what will make
      hubs more successful and what will make them unsuccessful?</h4>
    <p>There will be different features... speed (limiting to 100 validators),
      flexibility (e.g. if implemented on the EVM), or perhaps nation-state
      sponsorship or better integration with the legal system (via traditional banking
      partners), etc.  One could also imagine a much slower, but more distributed
      &quot;slow hub&quot;, or much faster but less decentralized &quot;high-frequency hubs&quot;.</p>
    <h4 id="abandoning-validators">What will be the process for abandoning validators that misbehave?</h4>
    <p>If a validator misbehaves on its own by double-signing at the same height &amp;
      round, then the evidence is very short and simple -- it&#39;s just the two
      conflicting votes.  This evidence can be included in the the CosmosHub as a
      Slash transaction, and the validator will immediately become inactive and
      slashed after the Slash transaction gets committed.</p>
    <p>If there is a zone fork, either of the Cosmos Hub or any of the zones, the two
      conflicting commits also constitute evidence.  This is a much more complicated
      data structure.  It is guaranteed to slash at least 1/3 of the validators&#39; atoms
      for that zone.</p>
    <h4 id="delegators-and-validators">Can delegators also be validators?  Or are delegators never validators?</h4>
    <p>Delegators are never validators.  If someone who operates validator nodes wishes
      to delegate, they need to do so with their free and unbonded atoms.</p>
    <h4 id="validator-voting-powers">&quot;Validators&#39; voting powers are determined at genesis, or is changed
      deterministically by the blockchain, depending on the application.&quot;  Any idea
      what shape this will take initially what are you thinking for voting powers?</h4>
    <p>(Are these two separate questions?  What do you mean &quot;what are you thinking for
      voting powers?&quot;)</p>
    <p>I have no idea what shape this will take.  We need to reach out to a wide
      audience for the crowdfund, and that will help us get a better distribution,
      even if we don&#39;t know exactly who owns these tokens.</p>
    <p>In some way it doesn&#39;t matter, because even if there are attacks and mishaps
      along the way, eventually through hard-forks the blockchain can purge the bad
      actors.  It&#39;s antifragile.</p>
    <h4 id="dls-consensus">Can you give some details about what you took(derived) from the DLS
      consensus algorithm?</h4>
    <p>The locking mechanism was something that I hadn&#39;t seen in other papers, like
      PBFT.  There&#39;s an equivalence to PBFT&#39;s system, but the locking and unlocking
      mechanics in PBFT happen implicitly.</p>
    <p>Increasing the length of time of a round to circumvent partial-synchrony is
      something that the early versions of Tendermint Consensus used.  In the current
      version of Tendermint Consensus, which is more asynchronous, this &quot;time delay&quot;
      is limited to the timeout period after a 2/3 quorum of any votes for the same
      height &amp; round.</p>
    <p>The 2/3 quorum of any votes to synchronize validators, a kind of virtual clock
      cycle, was also inspired by DLS&#39;s paper in the later sections (after section 5).</p>
    <h4 id="cosmos-governance">Why is Cosmos&#39;s governance better than any other options out there?</h4>
    <p>One is, the stakeholders are well defined, as is the prior social contract.  ETH
      had a hard time with the fork because they had to ask the ether holders as well
      as the miners, but the ether holders had no prior social contract or obligation
      to partake in governance, so no quorum could be reached in time.  Asking the
      miners is necessary to ensure that the hard-fork will have support, but after a
      while they tend to simply follow the money and incentives.</p>
    <p>Cosmos is different because instead of anonymous miners we have social contract
      bound validators and delegators who have stake, and, they have the obligation to
      partake in governance.</p>
    <h4 id="use-cases">What use cases do you think are most compelling in the future?</h4>
    <p>Cosmos allows everyone to benefit from the network effect of various
      interoperable tokens and zones.  For example, if anyone creates a peg zone or a
      new token type, all the other zones can use them if they support the new token
      type.</p>
    <p>So, the Cosmos Hub has a particular use-case that isn&#39;t filled by anything
      today.  The best use-case for Cosmos Zones are for any token-based blockchain
      that benefit from the new interoperability, speed, and scalability properties.
      It may be a kind of distributed exchange.</p>
    <h4 id="cosmos-interledger">Do you feel Cosmos and Interledger are complimentary or are you directly
      competing with it?</h4>
    <p>They&#39;re more complementary than competing.  For one, Interledger will be very
      useful for creating Cosmos zones that interface with the traditional financial
      system.</p>
    <p>Interledger can also be used directly between blockchain zones.  For this
      use-case, the Cosmos Hub may be a competitive option, as compared to other
      options for Interledger notary sets.  The Cosmos Hub validators could also offer
      their services as an Interledger notary set.</p>
  </div>
</template>

<script>
import FaqContents from '../sections/FaqContents.vue'
import tocScroll from '../../scripts/tocScroll.js'
export default {
  components: {
    FaqContents
  },
  ready () {
    tocScroll()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
