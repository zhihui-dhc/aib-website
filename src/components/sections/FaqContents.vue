<template>
  <div class="toc-wrapper">
    <h2><a href="#page-top">FAQ</a></h2>
    <ul>
      <li><a href="##whats-sharding">What is sharding?</a></li>
      <li><a href="#how-is-sharding-done">How does Cosmos do sharding?</a></li>
      <li><a href="#whats-an-ibc-packet">What&#39;s an IBC packet?</a></li>
      <li><a href="#isnt-this-sidechains">Isn&#39;t this just sidechains, like what Blockstream proposed?</a></li>
      <li><a href="#compared-to-ethereum">How does Cosmos compare to Ethereum sharding?</a></li>
      <li><a href="#why-shards-are-zones">Why are shards called zones?</a></li>
      <li><a href="#how-does-curreny-exchange-work">How does one exchange currencies in this system?</a></li>
      <li><a href="#btc-to-eth-possible">So can I trade BTC for ETH using Cosmos?</a></li>
      <li><a href="#is-escrow-involved">Does Cosmos involve escrow?</a></li>
      <li><a href="#blockchains-to-cosmos">How does one switch blockchains in this system?</a></li>
      <li><a href="#is-consensus-configurable">Is consensus configurable?  When I am switching between blockchains won&#39;t my
          consensus be different in different scenarios?</a></li>
      <li><a href="#max-nodes-in-cosmos">What is the maximum number of nodes in Cosmos?  Does each zone or hub have
          their own nodes?</a></li>
      <li><a href="#validator-powers">Do the validatiors that are chosen, validate transactions for every zone and
          Hub?</a></li>
      <li><a href="#asymmetric-transfer">The whitepaper states &quot;Zones communicate with one another through a hub,
          primarily in the form of assymetric transfer of some set of tokens from one
          zone to another.&quot; Can you talk about what exactly the asymmetric transfer is?</a></li>
      <li><a href="#successful-hubs">According to the whitepaper: &quot;Cosmos reflects this position in that it makes
          no distinction between hubs - there is no &quot;top&quot; hub, and the most popular or
          successful hub is a matter of adoption by zones. &quot;  In your view what will make
          hubs more successful and what will make them unsuccessful?</a></li>
      <li><a href="#abandoning-validators">What will be the process for abandoning validators that misbehave?</a></li>
      <li><a href="#delegators-and-validators">Can delegators also be validators?  Or are delegators never validators?</a></li>
      <li><a href="#validator-voting-powers">&quot;Validators&#39; voting powers are determined at genesis, or is changed
          deterministically by the blockchain, depending on the application.&quot;  Any idea
          what shape this will take initially what are you thinking for voting powers?</a></li>
      <li><a href="#dls-consensus">Can you give some details about what you took(derived) from the DLS
          consensus algorithm?</a></li>
      <li><a href="#cosmos-governance">Why is Cosmos&#39;s governance better than any other options out there?</a></li>
      <li><a href="#use-cases">What use cases do you think are most compelling in the future?</a></li>
      <li><a href="#cosmos-interledger">Do you feel Cosmos and Interledger are complimentary or are you directly
          competing with it?</a></li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

@media screen and (min-width: 1280px)
  .toc-wrapper
    > ul
      > li
        border-bottom 1px solid bc
        > a
          display block
          font-weight normal
          padding 0.5*x x
</style>
