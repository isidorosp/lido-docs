"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[868],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=h(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var h=2;h<r;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4555:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={},l="stETH/wstETH integration guide",h={unversionedId:"guides/steth-integration-guide",id:"guides/steth-integration-guide",title:"stETH/wstETH integration guide",description:"This document is intended for developers looking to integrate Lido's stETH or wstETH as an asset into their dApp, with a focus on money markets, DEXes and blockchain bridges.",source:"@site/docs/guides/steth-integration-guide.md",sourceDirName:"guides",slug:"/guides/steth-integration-guide",permalink:"/guides/steth-integration-guide",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/steth-integration-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lido DAO",permalink:"/lido-dao"},next:{title:"Node Operator Manual",permalink:"/guides/node-operator-manual"}},d=[{value:"Lido",id:"lido",children:[{value:"Integration utilities: ChainLink price feeds",id:"integration-utilities-chainlink-price-feeds",children:[],level:4}],level:2},{value:"stETH vs. wstETH",id:"steth-vs-wsteth",children:[],level:2},{value:"stETH",id:"steth",children:[{value:"What is stETH",id:"what-is-steth",children:[],level:3},{value:"The Beacon chain oracle",id:"the-beacon-chain-oracle",children:[{value:"Oracle corner cases",id:"oracle-corner-cases",children:[],level:4}],level:3},{value:"stETH internals: share mechanics",id:"steth-internals-share-mechanics",children:[],level:3},{value:"1 wei corner case",id:"1-wei-corner-case",children:[],level:3},{value:"Bookkeeping shares",id:"bookkeeping-shares",children:[],level:3},{value:"Fees",id:"fees",children:[],level:3},{value:"Do stETH rewards compound?",id:"do-steth-rewards-compound",children:[],level:3}],level:2},{value:"wstETH",id:"wsteth",children:[{value:"What is wstETH",id:"what-is-wsteth",children:[{value:"wstETH shortcut",id:"wsteth-shortcut",children:[],level:4}],level:3},{value:"Rewards accounting",id:"rewards-accounting",children:[],level:3},{value:"Wrap &amp; Unwrap",id:"wrap--unwrap",children:[],level:3}],level:2},{value:"ERC20Permit",id:"erc20permit",children:[],level:2},{value:"Staking rate limits",id:"staking-rate-limits",children:[{value:"Alternative routes:",id:"alternative-routes",children:[],level:4}],level:2},{value:"Transfer shares function for stETH",id:"transfer-shares-function-for-steth",children:[],level:2},{value:"General integration examples",id:"general-integration-examples",children:[{value:"stETH/wstETH as collateral",id:"stethwsteth-as-collateral",children:[],level:3},{value:"Wallet integrations",id:"wallet-integrations",children:[],level:3},{value:"Liquidity mining",id:"liquidity-mining",children:[],level:3},{value:"Cross chain bridging",id:"cross-chain-bridging",children:[],level:3}],level:2},{value:"Risks",id:"risks",children:[],level:2}],c={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stethwsteth-integration-guide"},"stETH/wstETH integration guide"),(0,r.kt)("p",null,"This document is intended for developers looking to integrate Lido's stETH or wstETH as an asset into their dApp, with a focus on money markets, DEXes and blockchain bridges.  "),(0,r.kt)("h2",{id:"lido"},"Lido"),(0,r.kt)("p",null,"Lido is a family of liquid staking protocols across multiple blockchains, with headquarters on Ethereum.",(0,r.kt)("br",{parentName:"p"}),"\n","Liquid refers to the ability for a user\u2019s stake to become liquid. Upon user's deposit Lido issues the derivative, which represents the deposited assets along with all the rewards & penalties accrued through deposit's staking. Unlike the staked funds, this derivative is liquid \u2014 it can be freely transferred between parties, making it usable across different DeFi applications while still accruing staking yield passively. It is paramount to preserve this property when integrating staking derivatives into any DeFi protocol."),(0,r.kt)("p",null,"This guide refers to Lido on Ethereum (hereinafter referred to as Lido).",(0,r.kt)("br",{parentName:"p"}),"\n","For ether staked in Lido, it gives users stETH that is equal to the amount staked."),(0,r.kt)("p",null,"Lido's staking derivatives are widely adopted across Ethereum ecosystem: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The most important liquidity venues include ",(0,r.kt)("a",{parentName:"li",href:"https://curve.fi/steth"},"stETH/ETH liquidity pool on Curve")," and ",(0,r.kt)("a",{parentName:"li",href:"https://app.balancer.fi/#/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080"},"wstETH/ETH MetaStable pool on Balancer v2"),"."),(0,r.kt)("li",{parentName:"ul"},"stETH is ",(0,r.kt)("a",{parentName:"li",href:"https://app.aave.com/reserve-overview/?underlyingAsset=0xae7ab96520de3a18e5e111b5eaab095312d7fe84&marketName=proto_mainnet"},"listed as collateral asset on AAVE v2 market")," on Ethereum mainnet."),(0,r.kt)("li",{parentName:"ul"},"wstETH is ",(0,r.kt)("a",{parentName:"li",href:"https://daistats.com/#/collateral"},"listed as collateral asset on Maker"),"."),(0,r.kt)("li",{parentName:"ul"},"steCRV (the Curve stETH/ETH LP token) is ",(0,r.kt)("a",{parentName:"li",href:"https://daistats.com/#/collateral"},"listed as collateral asset on Maker"),"."),(0,r.kt)("li",{parentName:"ul"},"ether stakers can collateralise their stETH (in the form of bETH) on the Terra blockchain using ",(0,r.kt)("a",{parentName:"li",href:"https://app.anchorprotocol.com/"},"Anchor protocol"),"."),(0,r.kt)("li",{parentName:"ul"},"there are multiple liquidity strategies built on top of Lido's staking derivatives, including ",(0,r.kt)("a",{parentName:"li",href:"https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325"},"yearn"),", ",(0,r.kt)("a",{parentName:"li",href:"https://harvest.finance/"},"Harvest Finance"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://www.babylon.finance/garden/0xB5bD20248cfe9480487CC0de0d72D0e19eE0AcB6"},"Babylon Finance"),".")),(0,r.kt)("h4",{id:"integration-utilities-chainlink-price-feeds"},"Integration utilities: ChainLink price feeds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are live ChainLink ",(0,r.kt)("a",{parentName:"li",href:"https://app.ens.domains/name/steth-usd.data.eth"},"stETH/USD")," and ",(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x86392dC19c0b719886221c78AB11eb8Cf5c52812"},"stETH/ETH")," price feeds on Ethereum."),(0,r.kt)("li",{parentName:"ul"},"There are live ChainLink stETH/USD price feeds on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.chain.link/docs/arbitrum-price-feeds/"},"Arbitrum")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.chain.link/docs/optimism-price-feeds/"},"Optimism"),". These also have ChainLink wstETH-stETH exchange rate data feeds.")),(0,r.kt)("h2",{id:"steth-vs-wsteth"},"stETH vs. wstETH"),(0,r.kt)("p",null,"There are two versions of Lido's staking derivative, namely stETH and wstETH.\nBoth tokens are ERC-20 tokens, but they reflect the accrued staking rewards in different ways. stETH implements rebasing mechanics which means the stETH balance increases periodically. In contrary, wstETH balance is constant, while the token increases in value eventually (denominated in stETH). At any moment, any amount of stETH can be converted to wstETH via trustless wrapper and vice versa, thus tokens effectively share liquidity.",(0,r.kt)("br",{parentName:"p"}),"\n","For instance, undercollateralized wstETH positions on Maker can be liquidated by unwrapping wstETH and swapping it for ether on Curve."),(0,r.kt)("h2",{id:"steth"},"stETH"),(0,r.kt)("h3",{id:"what-is-steth"},"What is stETH"),(0,r.kt)("p",null,"stETH is a ERC20 token that represents ether staked with Lido. Unlike staked ether, it is liquid and can be transferred, traded, or used in DeFi applications. Total supply of stETH reflects amount of ether deposited into protocol combined with staking rewards, minus potential validator penalties. stETH tokens are minted upon ether deposit at 1:1 ratio. When withdrawals from the Beacon chain will be introduced, it will also be possible to redeem ether by burning stETH at the same 1:1 ratio. "),(0,r.kt)("p",null,"Please note, Lido has implemented staking rate limits aimed at reducing the post-Merge staking surge's impact on the staking queue & Lido\u2019s socialized rewards distribution model. Read more about it ",(0,r.kt)("a",{parentName:"p",href:"#staking-rate-limits"},"here"),". "),(0,r.kt)("p",null,"stETH is a rebasable ERC-20 token. Normally, the stETH token balances get recalculated daily when the Lido oracle reports Beacon chain ether balance update. The stETH balance update happens automatically on all the addresses holding stETH at the moment of rebase. The rebase mechanics have been implemented via shares (see ",(0,r.kt)("a",{parentName:"p",href:"#steth-internals-share-mechanics"},"shares"),")."),(0,r.kt)("h3",{id:"the-beacon-chain-oracle"},"The Beacon chain oracle"),(0,r.kt)("p",null,"Normally, stETH rebases happen daily when the Lido oracle reports the Beacon chain ether balance update. The rebase can be positive or negative, depending on the validators' performance. In case Lido's validators get slashed, the stETH balances can decrease according to penalty sizes. However, daily rebases have never been negative by the time of writing.",(0,r.kt)("br",{parentName:"p"}),"\n","The Beacon chain oracle has sanity checks on both max APR reported (the APR cannot exceed 10%, which means a daily rebase is limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"10/365%"),") and total staked amount drop (staked ether decrease reported cannot exceed 5%). Currently, the Beacon chain oracle report is based on five oracle daemons hosted by established node operators selected by the DAO. As soon as three out of five oracle daemons report matching Beacon chain data, the oracle reports it to the Lido smart contract, and the rebase occurs. There is a ",(0,r.kt)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/0x442af784a788a5bd6f42a01ebe9f287a871243fb/"},"dedicated oracle dashboard")," to monitor current Beacon chain reports."),(0,r.kt)("h4",{id:"oracle-corner-cases"},"Oracle corner cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In case oracle daemons do not report Beacon chain balance update or do not reach quorum, the oracle does not submit the daily report, and the daily rebase doesn't occur until the quorum is reached. "),(0,r.kt)("li",{parentName:"ul"},"In case the quorum hasn't been reached, the oracle can skip the daily report. The report will happen as soon as the quorum for one of the next periods will be reached, and it will include the balance update for all the period since last oracle report. "),(0,r.kt)("li",{parentName:"ul"},"Oracle daemons only report the finalized epochs. In case of no finality on the Beacon chain, the daemons won't submit their reports, and the daily rebase won't occur. "),(0,r.kt)("li",{parentName:"ul"},"In case sanity checks on max APR or total staked amount drop fail, the oracle report cannot be finalized, and the rebase cannot happen. "),(0,r.kt)("li",{parentName:"ul"},"StETH smart contract includes ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/816bf1d0995ba5cfdfc264de4acda34a7fe93eba/contracts/0.4.24/StETH.sol#L391"},"a method that allows burning stETH shares"),". The method is meant for ",(0,r.kt)("a",{parentName:"li",href:"https://research.lido.fi/t/lip-6-in-protocol-coverage-proposal/1468"},"in-protocol cover"),". When sETH shares get burnt, it triggers an immediate rebase, while the underlying ether adds up to the daily rewards for all stETH holders. This extra rebase doesn't interfere with normal rebase schedule in any way.")),(0,r.kt)("h3",{id:"steth-internals-share-mechanics"},"stETH internals: share mechanics"),(0,r.kt)("p",null,"Daily rebases result in stETH token balances changing. This mechanism is implemented via shares.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"share")," is a basic unit representing the stETH holder's share in the total amount of ether controlled by the protocol. When a new deposit happens, the new shares get minted to reflect what share of the protocol controlled ether has been added to the pool. When the Beacon chain oracle report comes in, the price of 1 share in stETH is being recalculated. Shares aren't normalized, so the contract also stores the sum of all shares to calculate each account's token balance.",(0,r.kt)("br",{parentName:"p"}),"\n","Shares balance by stETH balance can be calculated by this formula:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shares[account] = balanceOf(account) * totalShares / totalPooledEther\n")),(0,r.kt)("h3",{id:"1-wei-corner-case"},"1 wei corner case"),(0,r.kt)("p",null,"stETH balance calculation includes integer division, and there is a common case when the whole stETH balance can't be transferred from the account, while leaving the last 1 wei on the sender's account. Same thing can actually happen at any transfer or deposit transaction.  "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User A transfers 1 stETH to User B."),(0,r.kt)("li",{parentName:"ol"},"Under the hood, stETH balance gets converted to shares, integer division happens and rounding down applies."),(0,r.kt)("li",{parentName:"ol"},"Corresponding amount of shares gets transferred from User A to User B."),(0,r.kt)("li",{parentName:"ol"},"Shares balance gets converted to stETH balance for User B."),(0,r.kt)("li",{parentName:"ol"},"In many cases the actually transferred amount is 1 wei less than expected.")),(0,r.kt)("h3",{id:"bookkeeping-shares"},"Bookkeeping shares"),(0,r.kt)("p",null,"Although user friendly, stETH rebases add a whole level of complexity to integrating stETH into other dApps and protocols. When integrating stETH as an assets into any dApp, it's highly recommended to store and operate shares rather than stETH public balances directly, because stETH balances change both upon transfers, mints/burns, and rebases, while shares balances can only change upon transfers and mints/burns."),(0,r.kt)("p",null,"To figure out the shares balance, ",(0,r.kt)("inlineCode",{parentName:"p"},"getSharesByPooledEth(uint256)")," function can be used. It returns the value not affected by future rebases and it can be converted back into stETH by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getPooledEthByShares")," function."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See all available stETH methods ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/docs/blob/main/docs/contracts/lido.md#view-methods"},"here"),". ")),(0,r.kt)("p",null,"Any operation on stETH can be performed on shares directly, with no difference between share and stETH."),(0,r.kt)("p",null,"The preferred way of operating stETH should be:\n1) get stETH token balance;\n2) convert stETH balance into shares balance and use it as primary balance unit in your dapp;\n3) when any operation on the balance should be done, do it on shares balance;\n4) when users interact with stETH, convert shares balance back to stETH token balance."),(0,r.kt)("p",null,"Please note that 10% APR on shares balance and 10% APR on stETH token balance will ultimately result in different output values over time, because shares balance is stable, while stETH token balance changes eventually."),(0,r.kt)("p",null,"If using the rebasable stETH token is not an option for your integration, it is recommended to use wstETH instead of stETH. See how it works ",(0,r.kt)("a",{parentName:"p",href:"#wsteth"},"here"),"."),(0,r.kt)("h3",{id:"fees"},"Fees"),(0,r.kt)("p",null,"Lido collects a percentage of the staking rewards as a protocol fee. The exact fee size is defined by the DAO and can be changed in the future via DAO voting. To collect the fee, the protocol mints new stETH token shares and assigns them to the fee recipients. Currenty, the fee collected by Lido protocol is 10% of staking rewards with half of it going to the node operators and the other half going to the protocol treasury."),(0,r.kt)("p",null,"Since total amount of Lido pooled ether tends to increase, the combined value of all holders' shares denominated in stETH increases respectively. Thus, the rewards effectively spread between each token holder proportionally to their share in the protocol TVL. So Lido mints new shares to the fee recipient, so that the total cost of the newly-minted shares exactly corresponds to the fee taken (calculated in basis points):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shares2mint * newShareCost = (_totalRewards * feeBasis) / 10000\nnewShareCost = newTotalPooledEther / (prevTotalShares + shares2mint)\n")),(0,r.kt)("p",null,"which follows to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                        _totalRewards * feeBasis * prevTotalShares\nshares2mint = --------------------------------------------------------------\n                (newTotalPooledEther * 10000) - (feeBasis * _totalRewards)\n")),(0,r.kt)("h3",{id:"do-steth-rewards-compound"},"Do stETH rewards compound?"),(0,r.kt)("p",null,"stETH holders receive staking rewards, but those don't compound. Actual APR diminishes slightly over time for two main reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Beacon chain rewards don't compound. To get more rewards one should withdraw funds and re-deposit them, skimming rewards. Until withdrawals are enabled, that isn't technically possible. So, while the Lido's beacon chain balance increases over time, the yield bearing asset amount remains equal to deposited ether amount."),(0,r.kt)("li",{parentName:"ol"},"stETH holders receive rewards proportionally to their share in the stETH total supply. This share diminishes slightly over time because of the protocol fee on rewards eating up from other holders' shares eventually.")),(0,r.kt)("h2",{id:"wsteth"},"wstETH"),(0,r.kt)("p",null,"Due to the rebasing nature of stETH, the stETH balance on holder's address is not constant, it changes daily as oracle report comes in.\nAlthough rebasable tokens are becoming a common thing in DeFi recently, many dApps do not support rebasing. For example, Maker, UniSwap, and SushiSwap are not designed for rebasable tokens. Listing stETH on these apps can result in holders not receiving their daily staking rewards which effectively defeats the benefits of liquid staking. To integrate with such dApps, there's another form of Lido staking derivative called wstETH (wrapped staked ether)."),(0,r.kt)("h3",{id:"what-is-wsteth"},"What is wstETH"),(0,r.kt)("p",null,"wstETH is an ERC20 token that represents the account's share of the total supply of stETH total supply (stETH token wrapper with static balances). For wstETH, 1 wei in ",(0,r.kt)("a",{parentName:"p",href:"#steth-internals-share-mechanics"},"shares")," equals to 1 wei in balance. The wstETH balance and can only be changed upon transfers, minting, and burning. wstETH balance does not rebase, wstETH's price denominated in stETH changes instead.",(0,r.kt)("br",{parentName:"p"}),"\n","At any given time, anyone holding wstETH can convert any amount of it to stETH at a fixed rate, and vice versa. The rate is the same for everyone at any given moment. Normally, the rate gets updated once a day, when stETH undergoes a rebase. The current rate can be obtained by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"wstETH.stEthPerToken()"),"  "),(0,r.kt)("h4",{id:"wsteth-shortcut"},"wstETH shortcut"),(0,r.kt)("p",null,"Note, that WstETH contract includes a shortcut to convert ether to wstETH under the hood, which allows to effectively skip the wrapping step and stake ether for wstETH directly. Keep in mind that when using the shortcut, ",(0,r.kt)("a",{parentName:"p",href:"#staking-rate-limits"},"the staking rate limits")," still apply."),(0,r.kt)("h3",{id:"rewards-accounting"},"Rewards accounting"),(0,r.kt)("p",null,"Since wstETH represents the holder's share in the total amount of Lido-controlled ether, rebases don't affect wstETH balances, but change the wstETH price denominated in stETH."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic example"),":"),(0,r.kt)("p",null,"1) User wraps 1 stETH and gets 0.9803 wstETH (1 stETH = 0.9803 wstETH)\n2) A rebase happens, the wstETH price goes up by 5%\n3) User unwraps 0.9803 wstETH and gets 1.0499 stETH (1 stETH = 0.9337 wstETH)"),(0,r.kt)("h3",{id:"wrap--unwrap"},"Wrap & Unwrap"),(0,r.kt)("p",null,"When wrapping stETH to wstETH, the desired amount of stETH is being locked on the WstETH contract balance, and the wstETH is being minted according to the ",(0,r.kt)("a",{parentName:"p",href:"#bookkeeping-shares"},"shares bookeeping")," formula."),(0,r.kt)("p",null,"When unwrapping, wstETH gets burnt and the corresponding amount of stETH gets unlocked."),(0,r.kt)("p",null,"Thus, amount of stETH unlocked when unwrapping is different from what has been initially wrapped (given a rebase happened between wrapping and unwrapping stETH)."),(0,r.kt)("h2",{id:"erc20permit"},"ERC20Permit"),(0,r.kt)("p",null,"wstETH token implements the ERC20 Permit extension allowing approvals to be made via signatures, as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2612"},"EIP-2612"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"permit")," method allows users to modify the allowance using a signed message, instead of through ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender"),". By not relying on ",(0,r.kt)("inlineCode",{parentName:"p"},"approve")," method, wrapping can be done in one transaction instead of two."),(0,r.kt)("h2",{id:"staking-rate-limits"},"Staking rate limits"),(0,r.kt)("p",null,"As there\u2019s a high probability of the staking surge post-Merge, the Lido protocol implemented staking rate limits aimed at reducing the surge's impact on the staking queue & Lido\u2019s socialized rewards distribution model.\nthere is a sliding window limit that is parametrized with ",(0,r.kt)("inlineCode",{parentName:"p"},"_maxStakingLimit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_stakeLimitIncreasePerBlock"),". This means it is only possible to submit this much ether to the Lido staking contracts within a 24 hours timeframe. Currently, the daily staking limit is set at 150,000 ether."),(0,r.kt)("p",null,"You can picture this as a health globe from Diablo 2 with a maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"_maxStakingLimit")," and regenerating with a constant speed  per block.\nWhen you deposit ether to the protocol, the level of health is reduced by its amount and the current limit becomes smaller and smaller.\nWhen it hits the ground, transaction gets reverted. "),(0,r.kt)("p",null,"To avoid that, you should check if ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentStakeLimit() >= amountToStake"),", and if it's not you can go with an alternative route.",(0,r.kt)("br",{parentName:"p"}),"\n","The staking rate limits are denominated in ether, thus, it makes no difference if the stake is being deposited for stETH or using ",(0,r.kt)("a",{parentName:"p",href:"#wsteth-shortcut"},"the wstETH shortcut"),", the limits apply in both cases."),(0,r.kt)("h4",{id:"alternative-routes"},"Alternative routes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wait for staking limits to regenerate to higher values and retry depositing ether to Lido later."),(0,r.kt)("li",{parentName:"ol"},"Consider swapping ETH for stETH on DEXes like Curve or Balancer. At specific market conditions stETH may effectively be purchased from there with a discount due to stETH price fluctuations.")),(0,r.kt)("h2",{id:"transfer-shares-function-for-steth"},"Transfer shares function for stETH"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-11.md"},"LIP-11")," introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferShares"),' function which allows to transfer stETH in a "rebase-agnostic" manner: transfer in terms of ',(0,r.kt)("a",{parentName:"p",href:"#steth-internals-share-mechanics"},"shares")," amount.  "),(0,r.kt)("p",null,"Normally, we transfer stETH using ERC-20 ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transferFrom")," functions which accept as input amount of stETH, not the amount of the underlying shares.",(0,r.kt)("br",{parentName:"p"}),"\n","Sometimes we'd better operate with shares directly to avoid possible rounding issues. Rounding issues usually could appear after a token rebase.\nThis feature is aimed to provide an additional level of precision when operating with stETH.\nRead more abut the function in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-11.md"},"LIP-11"),"."),(0,r.kt)("h2",{id:"general-integration-examples"},"General integration examples"),(0,r.kt)("h3",{id:"stethwsteth-as-collateral"},"stETH/wstETH as collateral"),(0,r.kt)("p",null,"stETH/wstETH as DeFi collateral is beneficial for a number of reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stETH/wstETH is almost as safe as ether, price-wise: barring catastrophic scenarios, its value tends to hold the ETH peg well;"),(0,r.kt)("li",{parentName:"ul"},"stETH/wstETH is a productive asset: earning rewards on collateral effectively lowers the cost of borrowing;"),(0,r.kt)("li",{parentName:"ul"},"stETH/wstETH is a very liquid asset with billions of liquidity locked in liquidity pools (",(0,r.kt)("a",{parentName:"li",href:"https://curve.fi/steth"},"Curve"),", ",(0,r.kt)("a",{parentName:"li",href:"https://app.balancer.fi/#/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080"},"Balancer v2"),")")),(0,r.kt)("p",null,"Lido's staked assets have been listed on major liquidity protocols:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Maker, ",(0,r.kt)("a",{parentName:"li",href:"https://daistats.com/#/collateral"},"wstETH collateral (scroll down to Dai from WSTETH-A section)")," can be used to mint DAI stablecoin. See ",(0,r.kt)("a",{parentName:"li",href:"https://blog.lido.fi/makerdao-integrates-lidos-staked-eth-steth-as-collateral-asset/"},"Lido's blog post")," for more details."),(0,r.kt)("li",{parentName:"ul"},"On AAVE, multiple assets can be ",(0,r.kt)("a",{parentName:"li",href:"https://app.aave.com/reserve-overview/?underlyingAsset=0xae7ab96520de3a18e5e111b5eaab095312d7fe84&marketName=proto_mainnet"},"borrowed against stETH"),". See ",(0,r.kt)("a",{parentName:"li",href:"https://blog.lido.fi/aave-integrates-lidos-steth-as-collateral/"},"Lido's blog post")," for more details. Please note: stETH is only supported on AAVE as lending collateral. Borrowing stETH on AAVE is not currently supported. However, any asset can be borrowed on AAVe via a flashloan. Due to a known ",(0,r.kt)("a",{parentName:"li",href:"#1-wei-corner-case"},"1 wei corner case")," there's a certain situation when a flashloan transaction can revert. Please visit ",(0,r.kt)("a",{parentName:"li",href:"https://docs.lido.fi/token-guides/steth-on-aave-caveats"},"stETH on AAVE caveats")," article for more details."),(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("a",{parentName:"li",href:"https://app.anchorprotocol.com/"},"Anchor"),", ether stakers can collateralise their stETH (in the form of bETH) on the Terra blockchain using Anchor protocol. This integration is covered in great detail in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/anchor-collateral-steth/blob/main/docs/spec.md"},"the spec"),".  ")),(0,r.kt)("p",null,"Robust price sources are required for listing on most money markets, with ChainLink price feeds being the industry standard. There're live ChainLink ",(0,r.kt)("a",{parentName:"p",href:"https://app.ens.domains/name/steth-usd.data.eth"},"stETH/USD")," and ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x86392dC19c0b719886221c78AB11eb8Cf5c52812"},"stETH/ETH")," price feeds on Ethereum."),(0,r.kt)("h3",{id:"wallet-integrations"},"Wallet integrations"),(0,r.kt)("p",null,"Lido's Ethereum staking services have been successfully integrated into most popular DeFi wallets, including Ledger, MyEtherWallet, ImToken and others.\nHaving stETH integrated can provide wallet users with great user experience of direct staking from the wallet UI itself."),(0,r.kt)("p",null,"Lido DAO runs a referral program rewarding wallets and other apps for driving liquidity to the Lido staking protocol. At the moment, the referral program is in ",(0,r.kt)("a",{parentName:"p",href:"https://research.lido.fi/t/switch-referral-program-to-whitelist-mode/1014"},"whitelist mode"),". Please contact Lido bizdev team to find out if your wallet might be eligible for referral program participation."),(0,r.kt)("p",null,"When adding stETH support to a DeFi wallet, it is important to preserve stETH's rebasing nature. Avoid storing cached stETH balance for extended periods of time (over 24 hours), and keep in mind it doesn't necessarily take a transaction to change stETH balance."),(0,r.kt)("h3",{id:"liquidity-mining"},"Liquidity mining"),(0,r.kt)("p",null,"stETH liquidity is mostly concentrated in two biggest liquidity pools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curve.fi/steth"},"stETH/ETH liquidity pool on Curve")," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/curvefi/curve-contract/blob/master/contracts/pools/steth/StableSwapSTETH.vy"},"contract code"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.balancer.fi/#/pool/0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080"},"wstETH/WETH MetaStable pool on Balancer v2")," (",(0,r.kt)("a",{parentName:"li",href:"https://docs.balancer.fi/products/balancer-pools/metastable-pools#the-lido-wsteth-weth-liquidity-pool"},"read more"),")")),(0,r.kt)("p",null,"Both pools are incentivised with Lido governance token (LDO) via direct incentives and bribes (veBAL bribes coming soon), and allow the liquidity providers to retain their exposure to earning Lido staking rewards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Curve pool allows providing liquidity in the form of any of the pooled assets or in both of them. From that moment on, all the staking rewards accrued by stETH go to the pool and not to the liquidity provider's address. However, when withdrawing the liquidity, the liquidity provider will be able to get more than they have initially deposited.\nPlease note, when depositing exclusively stETH to Curve, the tokens are split between ether and stETH, with the precise balances fluctuating constantly due to price trading. Thus, the liquidity provider will only be eligible for about a half of rewards accrued by the stETH deposited. To avoid that, provide stETH and ether liquidity in equal parts."),(0,r.kt)("li",{parentName:"ul"},"Unlike Curve, Balancer pool is wstETH-based. wstETH doesn't rebase, it accrues staking rewards by eventually increasing in price instead. Thus, when withdrawing liquidity form the Balancer pool, the liquidity providers get assets valued higher than what they have initially deposited.")),(0,r.kt)("h3",{id:"cross-chain-bridging"},"Cross chain bridging"),(0,r.kt)("p",null,"The Lido's liquid staking derivatives will eventually get bridged to various L2's and sidechains.",(0,r.kt)("br",{parentName:"p"}),"\n","Most cross chain token bridges have no mechanics to handle rebases. This means bridging stETH to other chains will prevent stakers from collecting their staking rewards. In the most common case, the rewards will naturally go to the bridge smart contract and never make it to the stakers.",(0,r.kt)("br",{parentName:"p"}),"\n","While working on full-blown bridging solutions, the Lido contributors encourage the users to only bridge the non-rebasable representation of staked ether, namely wstETH."),(0,r.kt)("h2",{id:"risks"},"Risks"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Smart contract security.\nThere is an inherent risk that Lido could contain a smart contract vulnerability or bug. The Lido code is open-sourced, audited and covered by an extensive bug bounty program to minimise this risk.",(0,r.kt)("br",{parentName:"li"}),"To mitigate smart contract risks, all of the core Lido contracts undergo multiple audits. Audit reports can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/audits#lido-protocol-audits"},"here"),".",(0,r.kt)("br",{parentName:"li"}),"Besides, Lido is covered with a massive ",(0,r.kt)("a",{parentName:"li",href:"https://immunefi.com/bounty/lido/"},"Immunefi bugbounty program"),"."),(0,r.kt)("li",{parentName:"ol"},"Beacon chain - Technical risk.",(0,r.kt)("br",{parentName:"li"}),"Lido is built atop experimental technology under active development, and there is no guarantee that Beacon chain has been developed error-free. Any vulnerabilities inherent to Beacon chain brings with it slashing risk, as well as stETH balance fluctuation risk."),(0,r.kt)("li",{parentName:"ol"},"Beacon chain - Adoption risk.",(0,r.kt)("br",{parentName:"li"}),"The value of stETH is built around the staking rewards associated with the Ethereum beacon chain. If Beacon chain fails to reach required levels of adoption we could experience significant fluctuations in the value of ether and stETH."),(0,r.kt)("li",{parentName:"ol"},"Slashing risk.",(0,r.kt)("br",{parentName:"li"}),"Beacon chain validators risk staking penalties, with up to 40% of staked funds at risk if validators fail. To minimise this risk, Lido stakes across multiple professional and reputable node operators with heterogeneous setups, with additional mitigation in the form of in-protocol cover that may be paid from Lido fees."),(0,r.kt)("li",{parentName:"ol"},"stETH price risk.",(0,r.kt)("br",{parentName:"li"}),"Users risk an exchange price of stETH which is lower than inherent value due to withdrawal restrictions on Lido, making arbitrage and risk-free market-making impossible. The Lido DAO is driven to mitigate above risks and eliminate them entirely to the extent possible. Despite this, they may still exist and, as such, it is our duty to communicate them.  "),(0,r.kt)("li",{parentName:"ol"},"DAO key management risk.",(0,r.kt)("br",{parentName:"li"}),"On early stages of Lido, slightly more than 600k ether became held across multiple accounts backed by a multi-signature threshold scheme to minimize custody risk. If signatories across a certain threshold lose their key shares, get hacked or go rogue, Lido risks these funds (<20% of total stake as of April 2022) becoming locked.")))}p.isMDXComponent=!0}}]);