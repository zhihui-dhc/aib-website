~~~
title: "Fundraiser Results"
slug: fundraiser-results
date: 2017-04-06
author: The Cosmonauts
excerpt: What a fantasitc fundraiser! Thanks to everyone!
~~~

### Fundraiser was a resounding success

Wow. That was remarkable. Within seconds of opening [the fundraiser](https://fundraiser.cosmos.network) at 6am PDT this morning, 
well over a million dollars worth of BTC and ETH poured in. Obviously, many of you were very 
well prepared. Over the following roughly 30 minutes, we raised over 16M USD worth of BTC and ETH,
smashing through our hidden cap of 17M.

Thank you everyone for your amazing support!

[The fundraiser is now closed.](https://fundraiser.cosmos.network) It's time for us to get back to work on building out the Internet of Blockchains!

### Proof of the Hidden Cap

Our goal for this fundraiser was to raise 10M USD. However, seeing as how quickly
certain other fundraisers have hit their cap, we decided to allow more than 10M to be 
raised within the first 6 hours. That said, we did not want to be in a position where we 
raised too much money, so we set an additional hard-cap, such that if we hit that, we would halt
the fundraiser.

We decided to keep this hard cap hidden, because we felt doing so would discourage whales 
from buying too much. Indeed, we got a lot of feed back on slack that many people were discouraged
from donating too much because of this hidden cap - exactly the effect we hoped for!

On March 26, 2017, Jae published a commit to the hidden cap on twitter: https://twitter.com/jaekwon/status/846055257675218944.
The commitment is `5faa9a8d3faa019b836f63779c454aa2cefa310ba1e04b251dcbfcd3db5471ec`.
The pre-image for this is the following text:

```
SALT: 26ed7ab241901f7e0a7d
MSG: The cap for the first 6 hours is $17M USD
```

If you save that text in a file, say `cap.txt`, and run `shasum -a 256 cap.txt`, you can confirm the commitment.

### Suggested Atom Allocations

For each donation, the Interchain Foundation suggests a certain number of Atoms be allocated 
to the relevant Cosmos address in the genesis block of the Cosmos Network.
The Cosmos Network is expected to launch in Q4 2017, and Atoms will not be accessible until then.
That said, the suggested Atom allocations for a given donation can be easily computed.

First, you need your Cosmos address. If you did not write it down during the fundraiser, no worries.
You can use the `cosmos-fundraiser` tool to figure it out, so long as you wrote down your 12-words.
If you lost the 12-words, your Atoms are gone forever.

To install the tool, you must have `node.js` installed. Then simply run:

```
npm install -g cosmos-fundraiser-cli@2.11.0
```

Now you can check your Cosmos address by running:

```
cosmos-fundraiser cosmosaddress
```

It will prompt you for your twelve words, and will spit out your address.
Please make sure you enter the words correctly.


If you donated in ETH, your suggested Atom balance is stored directly in the smart contract.
To query it, enter your Cosmos address in the `record` field here: https://etherscan.io/address/0xcf965cfe7c30323e9c9e41d4e398e2167506f764#readContract

If you donated in BTC, your Cosmos address was recorded in an OP_RETURN output.
There is no easy way to query for your suggested Atom balance yet, but if you lookup
your transaction on blockchain.info, you should see your Cosmos address recorded in the second output, 
next to OP_RETURN. Note that blockchain.info doesn't handle OP_RETURN, so it will say "Unable to decode output address" -
that is fine and totally expected. To get your suggested Atom balance, just multiply the amount of BTC in the first output
by 11635. Also note, your transaction MUST be included between block 460654 and 460661, inclusive.
If your transaction is included in a block outside this range, your suggested Atom balance is 0.

We will put up a service in the next couple days to make it super easy to query for your suggested Atom balance directly,
whether you donated in BTC or ETH.


### Issues

If you had any issues with the fundraiser, please contact us at fundraiser@cosmos.network.

### Conclusion

Thanks again for making [this fundraiser](https://fundraiser.cosmos.network) an epic success! We look forward to building the Internet of Blockchains with you.


