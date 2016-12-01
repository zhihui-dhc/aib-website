~~~
title: "BFT：最安全的证明"
slug: bft-the-most-secure-proof-of-stake
date: 2016-11-15
author: Jae Kwon
excerpt: 许多人反对使用PoS，声称这是不可能的。 但这根本不是真的。 使用BFT，您绝对可以保护PoS。 这只是我们还没有看到任何BFT-PoS公共区块链。
~~~

比特币将世界的注意力带到区块链。但唉，比特币
版本的blockchain不足以满足世界的区块链需求。那
是因为比特币的工作证明（PoW)的共识[需要大量的
能源](http://motherboard.vice.com/read/bitcoin-could-consume-as-much-electricity-as-denmark-by-2020)。此外，交易非常缓慢，需要一个小时或
更长的提交。而且因为PoW矿工没有激励去忠诚
一个链或其他，升级难以协调。
 
我们需要一种安全地管理blockchains的方法，而不是强加一个巨大的
我们星球上的能源成本。这种方法是拜占庭容错
（BFT)为基础的[proof-of-stake](https://bitcointalk.org/index.php?topic=27787.0)（PoS)。我们称之为BFT-PoS。
 
在我深入探讨BFT-PoS的优点之前，让我先谈一下这个概念
拜占庭的错误，没有进入混乱的细节[Lamport的将军
和他的军队](http://pages.cs.wisc.edu/~sschang/OS-Qual/reliability/byzantine.htm)。

在分布式系统中，数据被复å¶到数百或数千
的节点，需要某种类型的容错或共识
算法，对于计算机崩溃或离线的简单事实
时间。因此，如果这些节点的一部分失败，系统作为一个整体静止
需要达成共识。
 
标准容错共识算法如
[Raft](https://raft.github.io/raft.pdf)和
[Paxos](https://en.wikipedia.org/wiki/Paxos_（computer_science))假设
当节点故障时，它只是停止工作，不发送回复。
Google，Facebook和一些现有的数据库产品已经使用这个系列
的协议算法在其防火墙内，以确保服务保持
可用，尽管计算机有故障。

但是这些算法不适合公共区块链，因为有
没有防火墙在公共区块链。任何有采矿权力（在PoW)或
放置令牌（在PoS中)可以参与，或甚至试图破坏网络。
为了在公共区块链上达成共识，我们需要拜占庭容错。
在拜占庭故障中，故障节点可以完全任意行为
方式。节点甚至可以合谋尝试和最大化他们造æ的损害。
 
因此，本质上，BFT一致性算法的目的是建立信任
在不可信网络之间的其他不相关方
互联网。
 
BFT不是什么新鲜事。这个概念首先在一篇学术论文中被引入
[Lamport，Shostak和Pease
1982](http://research.microsoft.com/en-us/um/people/lamport/pubs/byz.pdf)。但
Lamport等人仅仅证明了算法的理论可行性
一个同步环境，其中所有的消息总是准时到达。
 
但在现实世界中，你不能真正相信互联网提供任何东西
准时。因此，在1988年，[Dwork，Lynch和Stockmeyer](http://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf)（DLS)提出了一种算法
在大多数异步环境中工作。 1999年后期，[Miguel Castro
和Barbara Liskov](http://pmg.csail.mit.edu/papers/osdi99.pdf)提出了一个连续的BFT共识的实用解决方案
这就是，现在仍然是BFT算法的最先进的。
 
但长期以来，主流媒体忽视了这些创新的作品。没有人
了解BFT在学术界和ä¸»要机构之外的重要性
IBM和DARPA，直到2009年比特币出现。比特币是第一次打开
分散应用，为全球货币分类帐提供BFT共识，
但使用一个完全新颖的解决方案拜占庭将军的问题：PoW。
 
在PoW中，矿工根据具有最大处理能力的人进行竞争，以进行验证
交易。为了他们的努力，他们得到交易费和
新铸造的比特币。这就是比特币如何创造新货币。比特币
全球矿工在这些新发行的彩票式系统中竞争
比特币，有效的市场使得使用的能源的成本
由全球矿业网络对块的奖励（加上
交易费)。今天，事实证明是价值约100万美元的电力
每天。此外，比特币挖掘正在被大数据商品化
在世界上电力更多的地方的中心
价格](https://bitcointalk.org/index.php?topic=1072474.0)，使它
困难的外行人参加。
 
另一方面，PoS完全消除了PoW的能量依赖性。
在PoS中，矿工被与系统有利害关系的“验证者”取代。
验证者不必投资昂贵的处理系统，但他们做
必须购买“赌注令牌”。任何普通的笔记本电脑都足以解决
算法。
 
Peercoin，[BitShares](https://bitshares.org/)，
[Nxt](https://en.wikipedia.org/wiki/Nxt)，而其他人已经使用某种形式
PoS和Ethereum正在计划在不久的将来迁移到PoS。然而，虽然PoS
有实际意义，很多人都反对使用
PoS](https://download.wpsoftware.net/bitcoin/pos.pdf)，声称是
不可能安全。但这根本不是真的。使用BFT，你绝对
可以保护PoS。这只是我们没有看到任何BFT-PoS公共区块链
然而。

虽然理论可能难以解释或理解，但最终的
由适当的BFT算法提供的结果易于掌握。不像PoW
区块链，BFT-PoS区块链不叉（即获得双重花费攻击)
除非1/3或更多的验证器协调这种攻击。而且，当1/3或
更多的验证器确实导致双花费攻击，我们可以计算
确定哪些验证者负责攻击，销毁它们
放置令牌并将其从网络中弹出。它就像放置令牌
是虚拟化的PoW矿工，当用来攻击系统时爆炸。没有
其他区块链共识算法，包括PoW，都可以提供水平
可能与BFT-PoS的抵押。

BFT-PoS性能非常好。今天，在全球公共区块链中有几个
一百个验证器，你可以得到事务的定单3
秒，容易 - 无需等待额外的块确认！的
理论已经证明我们这些是最佳的容错阈值
“即时决定”区块链。虽然更多的验证器会减慢
共识，如果[尼尔森的
法律](https://www.nngroup.com/articles/law-of-bandwidth/)继续持有，
我们甚至能够支持指数增长的验证器数量
每年都有同样的表现。

此外，BFT-PoS还将提高移动钱包的安全性。少数
移动钱包在今天存在的充分利用了安全性
由Bitcoin提供，因为一个简单的事实，没有人愿意等待一个小时
以便交易清除。相反，大多数钱包只是假设[人发送钱是不是试图双支出it](https://www.coingecko.com/buzz/peter-todd-explains-the-problems-with-unconfirmed-bitcoin-transactions)。
而且，虽然我们没有时间在这里潜水，高效的移动钱包
协议或“轻客户端SPV”协议是未来区块链的关键
互操作性。

虽然PoW在比特币方面表现良好，但成本高，运行缓慢，而且环境友好
不友好。现在最好的替代品是BFT-PoS。这是一个
持久，节能的解决方案，在异步工作良好
环境。最好的，因为BFT是由最好的和
最聪明的计算机科学工业，它证明是安全的。你不能做
任何比那更好。
