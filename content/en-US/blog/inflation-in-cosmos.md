~~~
title: "Understanding Inflation in Cosmos"
slug: inflation-cosmos
date: 2017-04-04
author: Brian Fabian Crain
excerpt: An examination of the inflation dynamics in Cosmos.
~~~

Many people have asked us how the Cosmos inflation rate works. Inflation is a loaded term. It evokes a process outside our control. Something that devalues what we own. That threatens us. Fortunately, inflation in Cosmos is a much more friendly force.

Let's look at the comparison to Bitcoin first. Bitcoin has often been promoted as a hedge against inflation. The monetary supply of fiat currencies is exploding. For one measure, M3, the USD monetary supply grew by [55% since 2010](https://data.oecd.org/money/broad-money-m3.htm). Bitcoin still has inflation, currently at almost 4%, but that is going to zero and is predictable.

Like in Bitcoin, in Cosmos the inflation rate plays an important role in securing the network. In Bitcoin, the block reward compensates miners for their service. In Cosmos, inflation goes to the validators. Again, for their service in securing the network.

But there is a fundamental difference. As a Bitcoin holder, inflation is bad for me. The miners are a separate group and every block reduces my relative ownership of the Bitcoin supply. In Cosmos, atom holders themselves provide the validation and secure the network. And it is them who receive the newly issued atoms. The atoms I own may get diluted, but I get a proportion of what is diluting them. So, in Cosmos, it's not obvious if as an atom holder, I would want a high or low inflation rate.

#### An Example Scenario
Let's run through an example to see the effects of the inflation rate. We'll assume that 60% of the atoms are bonded. That means the owner is either validating herself or delegating them to another validator. If the inflation rate is 10% per year, the total amount of atoms is increasing by 10%*60% = 6% annually.

So if our token holder wasn't bonded for the full year and had 1% of all the atoms before, she now has 1%/1.06 = 0.94% of the supply. Cosmonaut Bob, on the other hand, was validating and had 0.5% of atoms at the start of the year. His share increased to 0.5%*1.06 = 0.53%. That extra 0.03% needs to be enough to pay for the cost of running a validator, if Bob does it on his own. If Bob is delegating, it instead would have to cover the validator's fees. It also needs to compensate for the added risk Bob is taking, since those atoms could get slashed.

#### Finding an Optimal Inflation Rate
From the example above, we can see how the optimal inflation rate is determined. It needs to incentivize a sufficient percentage of atom holders to take part in the validation process. This way the Cosmos Network remains secure.

But atoms have function besides validating transactions. One key function is to pay for transaction fees in the Cosmos Network. For that, we need atoms that are not bonded. And we need a liquid market so people can trade them for bitcoin, ether and other tokens.

If the inflation rate is too high, it will punish those who want to use atoms to pay for fees. It might also mean that liquidity on exchanges is low and spreads are too high.

#### Dynamically Adjustable Inflation Rate
Over time, we will zero in on the right balance. One great option, could be to switch to a dynamically adjustable inflation rate. We could aim to have between 50% and 65% of atoms bonded at any one time. If the number falls below 50%, we could increase the inflation by 1% every day. And if it went above 65%, we could decrease it by 1% every day.

We still need to figure out a lot of details here. Many different factors will have influence. The cost of running a validating node. The fees that validators charge to delegators. How much atom holders get slashed for different infractions. The reputation of some of the companies that offer to validate. And so on.

#### Governance and the Community
Finding the right solution will be a community effort. If you have thoughts on how to design this, reach out to us. Once the Cosmos Network launches, atom holders can make proposals to change how inflation works. On-chain governance means changes are always possible and the Cosmonauts will be able to decide where we end up.
