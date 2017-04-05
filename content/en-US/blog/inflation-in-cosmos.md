~~~
title: "Understanding Inflation in Cosmos"
slug: inflation-cosmos
date: 2017-04-04
author: The Cosmonauts
excerpt: An examination of the inflation dynamics in Cosmos.
~~~

Many people have asked us how the Cosmos inflation rate works. Inflation is a
loaded term. It evokes a process outside our control. Something that devalues
what we own. That threatens us. Fortunately, inflation in Cosmos is a much more
friendly force.

Let's look at a comparison to Bitcoin first. Bitcoin has often been promoted
as a hedge against inflation. The monetary supply of fiat currencies is
exploding. For one measure, M3, the USD monetary supply grew by [55% since
2010](https://data.oecd.org/money/broad-money-m3.htm). Bitcoin still has
inflation, currently at almost 4%, but that is going to zero and is
predictable.

Like in Bitcoin, in Cosmos the inflation rate plays an important role in
securing the network. In Bitcoin, the block reward compensates miners for their
service. In Cosmos also, inflation goes to the validators for their service in
securing the network.

But, there is a fundamental difference. As a Bitcoin holder, inflation is bad
for the holder. The miners are a separate group and every block reduces the
holder's relative ownership of the Bitcoin supply. In Cosmos, atom holders
themselves provide the security services, and it is they who receive the newly
issued atoms. The atoms I own may get diluted, but I get a portion of what
dilutes them.

You might be asking yourself, 'is inflation good or bad for the atom holder'?

#### An Example Scenario

Let's run through an example to see the effects of the inflation rate. We'll
assume that 60% of the atoms are bonded. That means the owner is either
validating herself or delegating them to another validator. If the inflation
rate is 10% per year, the total amount of atoms is increasing by 10% annually
(regardless of the amount bonded).

So if Alice had 1% of all the atoms in the beginning and stayed unbonded for a
full year, after a year she will have 1% / (1 + 0.1) = 0.91% of the atom
supply.  Cosmonaut Bob on the other hand started with 0.5% and validated the
whole year.  His share will increase to 0.5% x (1 + 0.1/0.6) = 0.58%. In a
steady state equilibrium, that extra 0.08% needs to be enough to pay for the
cost of running a validator, assuming Bob runs his own validator node. If Bob
is delegating, the inflationary atoms and transaction fees earned would have to
cover the validator's fees. The rewards also need to compensate for the added
risk that Bob is taking, since those atoms could get slashed.

#### Staking Token vs Currency Token

While the bitcoin token is a currency token intended to be used as a means of
payment and medium of exchange, the atom is a staking token that is intended to
be used as a means of consensus.  They're more like virtual Bitcoin miners,
than the virtual Bitcoin coins themselves.

In a staking token, we want a significant portion of the staking token holder
to be "at stake".  This has security benefits.  If instead, the staking token
were also being used as a medium of exchange, then it would be easier to
acquire a significant share of these tokens relative to the total amount of
bonded staking tokens.  If on the other hand, the staking token were not as
liquid as a medium of exchange, an attacker has to incur much steeper costs in
order to acquire these tokens for an attack.  It may not even be possible.

#### Dynamically Adjustable Inflation Rate

In order to keep the atom a secure staking token, the Cosmos Hub will automatically
adjust the inflation rate to incentivize a proper amount of staking.

We don't know what the optimal formula is for dynamically adjusting parameters like
inflation, so we will need to figure it out over time.

For now, we propose a simple formula for dynamically adjusting the inflation rate.

  * The minimum inflation rate is 7%.
  * The maximum inflation rate is 21%.
  * In the beginning, the inflation rate will be 7%.
  * If in the past 4 months more than 2/3 of atoms were bonded more than 1/2 of the time, then decrease the inflation rate.
  * Otherwise, increase the inflation rate.

#### Governance and the Community

Finding the right solution will take the whole community to be actively engaged
in dialog. If you have thoughts on how to design this crypto-economic system,
reach out to us.  Once the Cosmos Network launches, atom holders can make
proposals to change how inflation works. On-chain governance means that changes
are always possible, and that Cosmonauts decide for themselves where to go.
