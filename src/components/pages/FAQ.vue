<template>
  <div class="header-padding"></div>
  <div class="article-wrapper">
    <h1 id="faq-top">FAQ</h1>

    <faq-contents></faq-contents>

    <h4 id="whats-sharding">What is sharding?</h4>
    <p>
      Sharding is way to scale horizontally by dividing up the workload into
      pieces. You’ve probably heard of sharding for SQL databases. Blockchain
      sharding is much, much trickier because you have to spread the data across
      a decentralized environment. The closest thing we have to sharding right
      now is the altcoins ecosystem, but it doesn’t work well. That’s because
      most altcoins exist in their own silos and the only way for them to
      interoperate is through centralized exchanges, or tricks like hashed time
      locked transactions (such as the <a href="http://lightning.network/lightning-network-paper-DRAFT-0.5.pdf">Bitcoin Lightning Network</a>), which have
      their own drawbacks.
    </p>

    <h4 id="how-is-sharding-done">How does Cosmos do sharding?</h4>
    <p>
      Cosmos implements sharding through zones, which are separate blockchains
      that plug into the Cosmos hub. Zones preserve the sovereignty of the
      shard as a self-governing and self-validating system. The hub doesn't
      care about the internal state of a zone. Instead, all that matters to the
      hub is what the zone explicitly communicates via IBC packets.
    </p>

    <h4 id="whats-an-ibc-packet">What&#39;s an IBC packet?</h4>
    <p>
      An IBC (inter-blockchain communication) is a packet of data that one zone
      passes to another. Instead of sending a packet of bytes via the TCP/IP or
      UDP/IP protocol, which is designed for singular, physical machines,
      Cosmos uses IBC packets. 
    </p>
    <p>
      IBC packets require cryptographic proof, which is necessary, because no
      single node, or validator, has the authority to speak on behalf of the
      entire blockchain. Additionally, the IP internet is not secure enough. So
      instead, we rely on a cryptographic proof of a blockchain hash commit
      (more than 2/3 of signatures for that blockchain hash) along with a
      Merkle-proof from the blockhash stored to a packet in the blockchain's
      "application state." This proves the blockchain validators agreed to
      publish this packet of information. Now, any node that sees an IBC packet
      (regardless of the source of this data) can verify its integrity.
    </p>

    <h4 id="isnt-this-sidechains">Isn&#39;t this just sidechains, like what <a href="https://www.blockstream.com/sidechains.pdf">Blockstream proposed</a>?</h4>
    <p>
      Yes. Exactly. Except in Cosmos, the hubs and zones are all powered by
      Tendermint, a Byzantine fault tolerant (BFT) consensus algorithm, already
      in use by companies like <a href="https://erisindustries.com/components/erisdb/">Eris</a>. 
    </p>
    <p>
      IBC (interblockchain communication) on Tendermint offers the same
      advantages that light-client payment verification does over
      proof-of-work. Those include: superior speed, no need to download all the
      block headers, 1-block finality, and security via collateral. 
    </p>
    <p>
      So we do offer a solution similar to Blockstream’s sidechains proposal,
      but with the Cosmos hub at the center, instead of Bitcoin. This makes
      everything faster and simpler, and arguably more secure. Also the fact
      that the Cosmos hub is a multi-asset blockchain is a big advantage.
    </p>

    <h4 id="compared-to-ethereum">How does Cosmos compare to Ethereum sharding?</h4>
    <p>
      Vitalik is working on sharding solutions for Ethereum, but so far the
      solutions we’ve seen assume all the shards are running on the same
      virtual machine (VM). Whereas, you can plug any zone (blockchain) into
      the Cosmos hub even if it exists on an entirely separate VM, or else like
      Bitcoin, doesn’t have a VM at all. 
    </p>
    <p>
      Vitalik is working on sharding solutions for Ethereum, but so far the
      solutions we’ve seen assume all the shards are running on the same
      virtual machine (VM). Whereas, you can plug any zone (blockchain) into
      the Cosmos hub even if it exists on an entirely separate VM, or else like
      Bitcoin, doesn’t have a VM at all. 
    </p>

    <h4 id="why-shards-are-zones">Why do you refer to shards in Cosmos as zones?</h4>
    <p>
      Shards are called zones in Cosmos because they really are like sovereign
      economic zones. We've seen a taste of blockchain governance with the
      Ethereum hard-fork following the DAO hack. In Cosmos, all zones are
      sovereign and can construct their own governance policies, and yet they
      can all interoperate via the Cosmos hub. That's the benefit of the IBC
      abstraction — it's all about accountable and cryptographically verifiable
      communication.
    </p>

    <h4 id="btc-to-eth-possible">Can I trade bitcoins for ether using Cosmos?</h4>
    <p>
      You can, if you trust the respective Ethereum and Bitcoin peg zones. If
      Ethereum and Bitcoin launch alternatives on Cosmos — for example, they
      launch a different network but use the same coinbase — then you will be
      able to trade those currencies directly. 
    </p>

    <h4 id="is-escrow-involved">Does Cosmos involve escrow?</h4>
    <p>
      Not really. You can think of the Cosmos hub as an escrow agent mediating
      between two zones, but that is the point. However, the pegs in peg-zones
      may well use escrow to allow, for instance, BTC to move into a zone.
    </p>

    <h4 id="is-consensus-configurable">Is consensus configurable?  When I am switching between blockchains won&#39;t my
      consensus be different in different scenarios?</h4>
    <p>
      We can accommodate other proof-of-state consensus mechanisms as long as
      they have a very clean and concise light-client verification protocol.
      Or, we may even at some point upgrade Tendermint so that it supports
      additional consensus features. But any changes will be up to the Cosmos
      Foundation and the Cosmos governance. But adapter zones will make that
      unnecessary. That's what a Bitcoin peg zone is  — an adapter zone to sit
      between PoW and Tendermint.
    </p>

    <h4 id="zone-own-validators">Do chosen validators validate transactions for every zone and hub?</h4>
    <p>
      No. Validators only validate transactions for their zone.
    </p>

    <h4 id="asymmetric-transfer">What is asymmetric transfer</h4>
    <p>
      It's maybe not the best term, but we coined it to refer to the kind of
      inter-zone token transfer that happens in the Cosmos hub. Cosmos
      transfers tokens not via any bidirectional or bilateral exchange
      mechanism, or even through a peg. It's as if the token moved from one
      zone to another. The trick is that there is a common crypto "depository"
      -- the Cosmos Hub.
    </p>

    <h4 id="abandoning-validators">What will be the process for abandoning validators that misbehave?</h4>
    <p>
      If a validator misbehaves by double-signing in the same height and round,
      then the evidence is short and simple — two conflicting votes. This
      evidence can be included in the the Cosmos hub as a slash transaction,
      and the validator will immediately become inactive and slashed after the
      slash transaction gets committed.
    </p>
    <p>
      If there is a zone fork, either of the Cosmos hub or any of the zones, the
      two conflicting commits also constitute evidence. This is a much more
      complicated data structure. It is guaranteed to slash at least 1/3 of the
      validators' atoms for that zone.
    </p>

    <h4 id="delegators-and-validators">Can delegators also be validators?  Or are delegators never validators?</h4>
    <p>
      Delegators are never validators. If someone who operates validator nodes
      wishes to delegate, they need to do so with their free and unbonded
      atoms.
    </p>

    <h4 id="cosmos-governance">Why is Cosmos&#39;s governance better than any other options out there?</h4>
    <p>
      Cosmos governance is better because its stakeholders and social contract
      are well defined. Due to poorly defined governance, Ethereum had a hard
      time with its fork. Ether holders as well as miners had to make a
      decision about whether to fork or not to fork. But because ether holders
      had no obligation to partake in governance, they could not reach a quorum
      in time. Asking the miners or validators is necessary to ensure a
      hard-fork will have support, but after a while Ethereum minors simply
      followed the money and incentives.
    </p>
    <p>
      Cosmos is different because instead of anonymous miners we have social
      contract bound validators and delegators who have stake and obligation to
      partake in governance.
    </p>

    <h4 id="use-cases">What Cosmos use cases do you think are most compelling in the future?</h4>
    <p>
      One of the great tragedies of cryptocurrencies today is their failure to
      interoperate with existing systems. Cosmos allows everyone to benefit
      from the network effect of various interoperable tokens and zones. For
      example, if anyone creates a peg zone or a new token type, all the other
      zones can use them if they support the new token type.
    </p>
    <p>
      So, the Cosmos hub has a particular use-case that isn't filled by
      anything today. The best use-case for Cosmos zones is to upgrade to an
      existing cryptocurrency to benefit, to make it more interoperable,
      faster, and scalable. Cosmos may be a kind of distributed exchange.
    </p>

    <h4 id="cosmos-interledger">Does Ripple’s Interledger complement Cosmos or do the two compete with one another?</h4>
    <p>
      <a href="https://interledger.org/">Interledger</a> is a protocol for interoperability between ledgers. Cosmos
      and Interledger are more complementary than competing. For instance, you
      might use Interledger to create a Cosmos zone that interfaces with a
      traditional financial system or to enable communication between two
      zones.
    </p>

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
