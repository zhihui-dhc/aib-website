~~~
title: "Cosmos Roadmap"
slug: cosmos-roadmap
date: 2017-02-09
author: The Cosmonauts
~~~

In Cosmos land, we have been hard at work with getting everything ready for the
big fundraiser. The Internet of Blockchain meme has been slowly catching on in
the blockchain community and the vision has solidified in our research and
preparation as well.

We will have a sequence of announcements coming in the next weeks and we would
love your help and feedback to ensure that we make the fundraiser a success and
most importantly realize the ultimate goal of connecting the disparate
blockchains and enabling moving money seamlessly between chains. 

In this post, we want to share some information about the components of the
Cosmos network and in what sequence we want to release and prioritize those
components. 

# Two Funding Milestones

We are dividing the different components of the Cosmos Network into two
different parts. The first part is the Cosmos Essential Software and Services.
It contains the minimum components needed to make sure that Cosmos works and is
functional. 

While basic functionality is great, there is a lot to do that goes beyond that
to realize the full vision of Cosmos. Once the basic components have been
built, we will have another set of projects and components to build to enhance
the usefulness, usability and connectivity of the network.

## Cosmos Essential Software and Services (CESS)

CESS consists of all the software necessary to deploy a minimal network that is
deserving of the phrase “Internet of Blockchains”. At its heart lies the Cosmos
Hub, a complete, multi-asset, proof-of-stake blockchain with built-in
governance and support for the [InterBlockchain Communication (IBC) protocol](https://github.com/tendermint/basecoin/blob/develop/docs/guide/ibc.md).
CESS also includes zones that serve as bridges to the public Bitcoin and
Ethereum networks, as well as a [decentralized exchange (the Cosmos DEX)](https://github.com/cosmos/cosmos/blob/master/DEX.md) and an
[Ethermint](https://github.com/tendermint/ethermint/) zone, which runs the full Ethereum state machine on Tendermint
consensus.   

There will be five blockchains that launch with the Cosmos Network: Hub, DEX,
Bitcoin-Bridge, Ethereum-Bridge, and Ethermint.

The Cosmos Hub itself is built using two key pieces: [Tendermint](https://github.com/tendermint/tendermint) and [Basecoin](https://github.com/tendermint/basecoin).
Tendermint is the general purpose consensus engine that will be used, at least
initially, for all blockchains in Cosmos; it is nearing a production-ready
state, and is [already in use by many different organizations](https://tendermint.com/ecosystem). Basecoin is an
[extendable framework](./cosmos-creating-interoperable-blockchains-part-1) 
for building multi-asset cryptocurrency applications on
Tendermint. It’s under active development and includes many working [example
plugins](https://github.com/tendermint/basecoin-examples). 
To build the Hub, we need Basecoin plugins for IBC that will manage
validators and their stake, manage delegators and their stake, slash validators
that misbehave, and manage governance. These are in various states of
development.  

The Bitcoin and Ethereum bridges will enable Cosmos to interoperate with the
public Bitcoin and Ethereum networks through the mechanism of two-way pegs,
familiar to many as [“sidechains”](https://blockstream.com/technology/). These will be sidechains of Bitcoin and
Ethereum, which will enable users to move BTC and ETH to and from the Cosmos
Network. Once in the Cosmos Network, they can be transferred through the Hub to
other zones, including the decentralized exchange. ETH can also be transferred
to Ethermint zones, where it can be used to power applications written for the
EVM, but running on a faster consensus algorithm such as Tendermint.

Finally, CESS includes wallet software for managing funds, sending transactions
on the Cosmos Network, and participating in governance.

In summary, the foundational components of the project include:

 - [**Tendermint**](https://github.com/tendermint/tendermint)
 - [**Basecoin Framework**](https://github.com/tendermint/basecoin)
 - [**Hub** (IBC, PoS/Delegation, Governance)](https://github.com/tendermint/basecoin)
 - **Bitcoin and Ethereum bridges**
 - [**DEX**](https://github.com/cosmos/cosmos/blob/master/DEX.md)
 - [**Ethermint**](https://github.com/tendermint/ethermint)

## Auxiliary Software and Services

The auxiliary software and services includes tools which contribute greatly to
the usability, functionality, and adoption of the Cosmos Network. In
particular, we have identified the following elements:

 - **Blockchain Explorer**: an advanced UI for navigating the Cosmos Network,
  including analyzing activity within zones, traffic across zones, the
  performance of validators, etc.
 - **Fluidity Smart Contract Framework**: a new programming language
  environment for building deterministic and halting programs that can run on a
  blockchain. The intent is to take lessons learned from the design of
  Ethereum’s Solidity to provide something equally accessible, and with greater
  support for extensibility, testing, and safety.
 - **Community Events and Support**: funding for meetups around the world and
  particular events, such as in (but not excluded to) San Francisco, Toronto,
  New York, Berlin, and Seoul, where many of our developers and community are
  based.
 - **Additional Zones**: examples include ZCash, Monero, Bitcoin, and
  others. Community opinion will inform which zones we build.
 - **Cosmic Grants**: A program, which awards grants for projects and research
  efforts for advancing the internet of blockchain vision.

# Development Timeline

The development timeline for Cosmos is split across five eras: Synthesis,
Atomic Era, Galactic Era, Planetary Era, and Lunar Era.

## Synthesis

Synthesis is the period in which the Hub is built. It began over two years ago
with the birth of the Tendermint project and continues today with the
development of the Basecoin framework and the various plugins necessary to
compose the Cosmos Hub. 

## Atomic Era

The Atomic Era starts roughly 4 months after the completion of the fundraiser.
It is marked by the release of an Alpha version of the Cosmos Hub and a
corresponding testnet. This includes a working form of the governance,
proof-of-stake, delegation, and IBC modules, as well as a working wallet for
making transactions on the Cosmos Hub. The testnet will include a genesis state
derived from the results of the fundraiser, enabling all who participated to
test the network.

## Galactic Era

The Galactic Era starts roughly 8 months after the completion of the fundraiser
and is marked by the release of the first production version of the Cosmos Hub
and the first blockchain to be launched in the Cosmos Network. It also marks
the beginning of work on the Bitcoin and Ethereum bridges, as well as the DEX.
These zones will be iterated on as newer versions are connected to the hub. 

## Planetary Era

The Planetary Era starts roughly 12 months after the completion of the
fundraiser and marks the first period of stability for the Cosmos Network,
including working Bitcoin and Ethereum bridges, and a working decentralized
exchange. At this point, the focus will shift to usability and extensive
documentation to in order to help new users and developers integrating with the
Cosmos Network. Further details will be announced based on changing conditions.

## Lunar Era

It is unclear when the Lunar Era starts, but it is marked by a sublime state of
mind that results from the satisfaction of the Cosmos Network having reached
maturity. Similar to the feeling one would experienced when sipping a cocktail
on a beach and glancing at a coconut tree that has blossomed into its full
beauty after a seed planted years before.

# Conclusion

Development on the Cosmos Essential Software and Services continues at quite a clip,
and the road ahead is well defined and full of exciting technology. 
We're looking forward to building this out with the community and 
making the Internet of Blockchains a reality for everyone!
