~~~
title: Cosmos的目的
slug: purpose-of-cosmos
date: 2016-08-31
author: Jae Kwon
excerpt: Cosmos是以前的加密货币的经验教训的顶点。 它旨在扩展到包含未来的创新。 它是一个分布式分类帐平台，适合未来。
~~~

我们相信公共区块链的力量提供公共利益，
动力由一个自我激励的演员的集合由a的规则控制
共享共识分类帐，在竞争和选择自由的环境中。
我们从先前的成功和失败中学到了重要的教训
加密货币，并已经创造了我们自己的创新
释放速度，安全性，可扩展性和可用性的新时代。

Cosmos是这些教训和创新的高潮，旨在
扩展到纳入未来的创新，创建分布式分类帐
平台适合世代来。

加密货币的一个巨大悲剧是他们的失败
与现有系统互操作，甚至与彼此互操作。它就好像每个
虚拟货币，在自己的区块链上和与自己的社区，太
主权为自己的好。这是最明显的，当你试图买
你的第一个比特币：你发现，这是非常困难的买新的
互联网上的钱，至少没有泄露相当多
数量的个人信息，并允许它的验证周数
第三方（交易所)你几乎不知道，并已被警告不信任
太多的钱。

虽然机制像[原子swaps](https://en.bitcoin.it/wiki/Atomic_cross-chain_trading)
帮助链接社区，他们需要成熟的流动性市场
每个活动参与者（或遭受长时间超时)。 [alt-coin生态系统](https://coinmarketcap.com/)是爱好者的炼金汤
在新的加密货币设计中以各种方式进行尝试，但是每个alt-coin
孤独，由于缺乏一般的区块间链通信而沉默
系统，许多不必要的浪费电气通过复杂的工作证明
（PoW)设计。

[Ethereum](https://ethereum.org/)试图解决这个问题
间接地，通过发明一个新的计算平台，允许任意
金融系统要使用公共的虚拟机来编写
开发环境。假设所有新的加密货币在以太坊上市，
他们将具有一定的互操作能力。以太坊是一个美好的
想法，但设计决定，同时受到重要考虑的驱动
（如需要一个简单的规范和保证的确定论)，忽略a
更多（比如设计一个安全的通用目的的困难
编程环境)，并借给以太坊它自己的主权问题，这
是，它排除了想要访问平台但想要替代品的用户
到当前状态转换机。

当然，以太坊并没有解决将法定货币转换成的问题
乙醚，没有银行和主要政府机构发行
以色列的货币。而且
[many](http://www.coindesk.com/south-africa-diy-ethereum-blockchain-tests/)
[such](http://www.coindesk.com/south-africa-diy-ethereum-blockchain-tests/)
[机构](http://www.coindesk.com/fidor-ethereum-core-banking/)
调查以太坊blockchain，有可扩展性和治理
这将限制其全面采用，从而阻碍
与现有系统和货币的集成。

每个现有的cryptocurrency支持一些文化理想。比特币是明智的
自由主义者，有一个轻微的无政府主义倾斜，最终被背叛
经济学的工作证明。以太坊不是一个政治声明，而是一个
分布式系统，计算机科学中的先锋派学术演习
合同理论。 Dogecoin是人类结合的能力的证明
超越荒谬的，一种更常被称为“社会”的现象。 Steem
提供一个更加结构化的社会性版本，内容基础
生产和管理。等等。但有更多的理想
货币创造，更多的虚拟机设计尝试，每一个提供一个
独特的实验，在治理，文化和
经济学。不是所有这些实验都是如此僵硬的悲剧
彼此之间由不相容的伟大的chasms相互孤立？

显然，我们需要的是比以太坊更一般的东西 - 一种元以太网;
可以集成现有的代码库和现有区块链的状态;
可以与民族国家发行的货币以相同的方式接口的东西;
使加密货币之间的关系形式化并连接它们而不损害它们的独立性;
具有极高的灵活性，不会危及安全性的东西。

输入Cosmos。 Cosmos是一个网络和框架之间的互操作性
区块链。它由一个“集线器”和“区域”的网络组成，每个“区域”是
实际上是具有任意加密货币设计的独立区块链
（就像Bitcoin，Ethereum，ZeroCash，CryptoNote，你的本地银行
机构等)，并且每个“集线器”是多资产加密货币
促进一些区域集之间的互操作性。

集线器和区域由[Tendermint](http://tendermint.com/)
[Proof-of-Stake（PoS) consensus 算法](https://github.com/tendermint/tendermint/wiki/Byzantine-Consensus-Algorithm)
使用[TMSP接口](http://tendermint.com/blog/tendermint-socket-protocol/)主机
应用程序以任何编程语言编写。 TMSP允许巨大
灵活性的应用程序设计，并使应用程序能够继承
Tendermint供电的区块链的安全特性。

区域通过集线器彼此通信，主要以形式
一些令牌从一个区域到另一个区域的非对称传输。
有效地，一个枢纽是一个区块链有很多
[sidechains](https://blockstream.com/sidechains.pdf)，但使用PoS而不是
PoW导致大量降低开销而不牺牲安全性。的
诀窍是每个区域作为中枢的轻客户端，中枢充当
所有区域的轻客户端。 [Tendermint做到这一点
高效](https://github.com/tendermint/tendermint/wiki/Light-Client-Protocol)
只要验证器集合是紧凑的轻客户端证明是安全的
已知的，这可以通过确保光客户端[同步来实现验证器集合的更改频率至少与允许的相同发生](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/)。

很多人都反对使用
[Proof-of-Stake](https://download.wpsoftware.net/bitcoin/pos.pdf)，声称它是
不可能安全。同时，他们承认它几乎
使用单个，安全的PoW链安全许多PoS链。这是[我的
自己的位置](https://twitter.com/buchmanster/status/738550345597648896)
PoW链的正确数量为一，并且PoS链的正确数量为
在数千或数百万，与货币数量相等，奖励
系统和各种其他基于令牌的系统。

Cosmos反映了这一立场，因为它不区分中心 - 那里
是没有“顶”中心，最流行或成功的中心是采用的问题
按区域。此外，区域和之间没有根本区别
集线器，使得具有足够功能的任何区域可以变为集线器。而
我们将发布一个特定的中心，以便开始（适当地
名为亚当中心)，没有什么能阻止这个中心变得过时
其他中心，甚至比特币或以太坊自己，喜欢比赛
与它，并可能取代它。

Cosmos因此引入了一种新的形式化权力的市场动态
在各种cryptocurrency产品之间的斗争，拆除障碍
以实现互操作性并实现集线器之间的竞争
经济安全的每个中心本身 - 验证者谁行为不端
抛弃为更好的行为。结果是异构网络，
根据其需要适应每个社区和每个地区，然而
保持互操作性的骨干，同时保持进入低门槛
控股系统负责人和服务质量高。

是否作为新的cryptocurrency设计的测试依据，或升级到
现有的，作为分散交换的手段，或可扩展的平台
智能合同，Cosmos的潜力是每一个现有的加密货币和
更多的协同。唯一的问题是，你将在Cosmos上建立什么？