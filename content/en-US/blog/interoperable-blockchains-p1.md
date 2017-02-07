~~~
title: "Cosmos: Creating Interoperable Blockchains — Part 1"
slug: cosmos-creating-interoperable-blockchains-part-1
date: 2017-01-17
author: Jae Kwon
excerpt: Part 1 of a series on Cosmos, the internet of blockchains powered by the Tendermint consensus engine.
~~~

> A series on [Cosmos](http://cosmos.network/), the internet of blockchains powered by the [Tendermint](http://tendermint.com/) consensus engine. *View blog post on [Medium](https://medium.com/@jaekwon/cosmos-creating-interoperable-blockchains-part-1-2929435ba1fa#.kmwc5d4px).*

There are several ways to create public blockchain applications today. The
primary ones are:

1.  **Create your own blockchain from scratch, as Satoshi Nakamoto did.** This
requires one to two years of full-time dedicated programming to get a completed
system, and should not be attempted without a very good reason.
2.  **Fork an existing blockchain stack like Bitcoin, as various altcoins such as
**[Namecoin](https://github.com/namecoin/namecoin-core)** have done.** This
works well if the base codebase is well designed to be modular, but that’s
rarely the case.
3.  **Write a “smart contract” in an on-chain interpreted language such as
[Solidity](https://solidity.readthedocs.io/en/develop/)**. This is currently the
best option for creating simple public blockchain applications, but it requires
learning and debugging two levels of complexity — the virtual-machine bytecode
interpreter, and the smart contract language.

With [Tendermint](http://tendermint.com/) we introduced a fourth way of creating
new public blockchain applications (and by extension, private/consortium apps as
well):

**4. Write a state-machine in any language (e.g. Golang, Python, etc), and plug
it into Tendermint’s consensus engine.** Tendermint is responsible for p2p
networking, consensus, and transaction broadcasting. After nodes come to
consensus on a block, they push it to the state-machine via a unix-socket
protocol called [ABCI](https://github.com/tendermint/abci) (formerly known as
TMSP).

Tendermint solves a lot of problems for blockchains, but when it comes to
*public* blockchains, there are additional common concerns that must be
addressed to provide availability. We must balance the desire to provide
permissionless and censorship-resistant access with the need to prevent spam and
denial-of-service (DoS) attacks. While there are many solutions to this problem,
the most common one is to charge a market-rate fee for each transaction. When
there is a surge in demand for a blockchain’s resources, the classical
supply-vs-demand market mechanism can ensure that your transaction will go
through in a timely manner if you pay a sufficiently high fee, and also that
sustained DoS attacks will incur significant costs to the attacker.

Ethereum evolved this concept of transaction fees even further by introducing
the transaction *gas*, which priced each CPU operation and prevented infinite
for-loops and CPU-heavy smart contracts from hogging the blockchain’s resources.
The user can choose to pay however much they want in *fees*, and can also set
the *gas_limit* (i.e. CPU-operations limit) of the transaction. The value of
*fees/gas_limit* or *gas_price* is a bid on each CPU-operation. It is the job of
the miner to to pack as many transactions into a block as possible such that
*sum(gas_limit) ≤ block_gas_limit*, to maximize fee revenue.

Interestingly, Ethereum chooses to refund a proportion of fees when the
transaction does not use all of the gas specified in the *gas_limit*. This puts
the burden of gas-usage prediction on the miner, which may be suboptimal
compared to taking all of the fees, and letting the user calculate the expected
*gas_limit* themselves.

Transaction *gas* is a powerful concept, and can be applied more generally to
blockchain applications that don’t support an interpreted virtual-machine. For
example, the [Cosmos Hub](https://cosmos.network/whitepaper#the-hub) can support
inter-blockchain (IBC) token-transfer transactions from any Tendermint-powered
sidechain (aka zone), regardless of the number of validators. (Validators are
nodes that participate in consensus to commit blocks). And yet, the more
validators there are in the zone, the more signatures there will be in the
block-hash commit of an IBC transaction. We can solve this with gas such that
interoperating with blockchains with larger validator-sets costs more. (Of
course we could also solve this with [cryptographic threshold multi-signature
algorithms](https://pdfs.semanticscholar.org/be29/fa28770bdbbe3d6962d82ab8744658fbfd39.pdf),
but the same concept applies for IBC transactions that require a long
Merkle-proof).

Taking the lessons on transaction gas that we’ve learned in implementing the
Ethereum virtual-machine (which got integrated into ErisDB), we’ve implemented a
toy cryptocurrency project called
[Basecoin](https://github.com/tendermint/basecoin) that will become the basis
for the Cosmos Hub. Basecoin (not to be confused with the excellent service
[Coinbase](http://coinbase.com/)) is so named because its goal is to become a
basis layer for Tendermint-based cryptocurrency applications. It is a
multi-asset system at its core, and is intended to accommodate a wide variety of
applications from simple cryptocurrencies to complex systems like Ethereum.

    // A Basecoin user account
    type Account struct {
      PubKey   crypto.PubKey
      Sequence int
      Balance  Coins
    }

    type Coin struct {
      Denom  string // e.g. "BTC", "ATOM"
      Amount int64
    }

    type Coins []Coin
<figcaption>Basecoin accounts are natively multi-asset</figcaption>

Basecoin by default provides the ability to send coins from multiple inputs to
multiple outputs with the *SendTx* transaction. Inputs and outputs are
Ethereum-style accounts (rather than UTXOs), so it’s quite a flexible system.

But what’s more interesting is the secondary kind of transaction, the *AppTx* transaction. *AppTx* transactions are processed by a programmer-provided plugin
module. The interface of a Basecoin plugin can be seen below.

    type Plugin interface {
        // Name of this plugin, should be short.
        Name() string
      
        // Run a transaction from ABCI DeliverTx
        RunTx(store KVStore, ctx CallContext, txBytes []byte) (res abci.Result)
      
        // Other ABCI message handlers
        SetOption(store KVStore, key string, value string) (log string)
        InitChain(store KVStore, vals []*abci.Validator)
        BeginBlock(store KVStore, height uint64)
        EndBlock(store KVStore, height uint64) []*abci.Validator
    }

    type CallContext struct {
        CallerAddress []byte   // Caller's Address (hash of PubKey)
        CallerAccount *Account // Caller's Account, w/ fee & TxInputs deducted
        TxInput       Coins    // The coins that the caller wishes to spend, excluding fees
    }
<figcaption>The Basecoin Plugin interface</figcaption>

The important function is the *RunTx* interface method, which is what you need
to implement in order to extend Basecoin with any functionality you want,
whether it be IBC coin-transfer, or an EVM smart-contract call. Perhaps you’d
like to program an entirely new smart-contract system based on a novel
virtual-machine design. The simplicity of the *RunTx* interface makes it easy to
get started. Behind the scenes, updates to the *KVStore* get Merkle-ized and
persisted to disk automatically. And of course you don’t need to worry about
complicated networking and consensus logic because Tendermint takes care of that
for you.

Basecoin is still a work-in-progress, and it’s (back) in active development. If
you feel like hacking Basecoin, check out our [Slack #basecoin
channel](http://forum.tendermint.com:3000/) and give us a holler!
