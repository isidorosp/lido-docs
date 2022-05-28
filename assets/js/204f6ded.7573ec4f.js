"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Protocol levers",p={unversionedId:"guides/protocol-levers",id:"guides/protocol-levers",title:"Protocol levers",description:"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires",source:"@site/docs/guides/protocol-levers.md",sourceDirName:"guides",slug:"/guides/protocol-levers",permalink:"/guides/protocol-levers",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/protocol-levers.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Multisig deployment",permalink:"/guides/multisig-deployment"},next:{title:"DAO voting with Etherscan",permalink:"/guides/etherscan-voting"}},u=[{value:"A note on upgradeability",id:"a-note-on-upgradeability",children:[],level:3},{value:"Lido",id:"lido",children:[{value:"Burning stETH tokens",id:"burning-steth-tokens",children:[],level:3},{value:"Protocol contracts",id:"protocol-contracts",children:[],level:3},{value:"Fee",id:"fee",children:[],level:3},{value:"Fee distribution",id:"fee-distribution",children:[],level:3},{value:"ETH 2.0 withdrawal Credentials",id:"eth-20-withdrawal-credentials",children:[],level:3},{value:"Deposit loop iteration limit",id:"deposit-loop-iteration-limit",children:[],level:3},{value:"Pausing",id:"pausing",children:[],level:3},{value:"Execution layer rewards",id:"execution-layer-rewards",children:[],level:3},{value:"Staking rate limiting",id:"staking-rate-limiting",children:[],level:3},{value:"TODO",id:"todo",children:[],level:3}],level:2},{value:"NodeOperatorsRegistry",id:"nodeoperatorsregistry",children:[{value:"Node Operators list",id:"node-operators-list",children:[],level:3},{value:"Deactivating a node operator",id:"deactivating-a-node-operator",children:[],level:3},{value:"Managing node operator\u2019s signing keys",id:"managing-node-operators-signing-keys",children:[],level:3},{value:"Reporting new stopped validators",id:"reporting-new-stopped-validators",children:[],level:3}],level:2},{value:"LidoOracle",id:"lidooracle",children:[{value:"Lido",id:"lido-1",children:[],level:3},{value:"Members list",id:"members-list",children:[],level:3},{value:"The quorum",id:"the-quorum",children:[],level:3},{value:"Sanity check",id:"sanity-check",children:[],level:3},{value:"Beacon report receiver",id:"beacon-report-receiver",children:[],level:3},{value:"Current reporting status",id:"current-reporting-status",children:[],level:3},{value:"Expected epoch",id:"expected-epoch",children:[],level:3},{value:"Version of the contract",id:"version-of-the-contract",children:[],level:3},{value:"Beacon specification",id:"beacon-specification",children:[],level:3},{value:"Current epoch",id:"current-epoch",children:[],level:3},{value:"Supplemental epoch information",id:"supplemental-epoch-information",children:[],level:3},{value:"Last completed epoch",id:"last-completed-epoch",children:[],level:3},{value:"Supplemental rewards information",id:"supplemental-rewards-information",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"protocol-levers"},"Protocol levers"),(0,i.kt)("p",null,"The protocol provides a number of settings controllable by the DAO. Modifying each of them requires\nthe caller to have a specific permission. After deploying the DAO, all permissions belong to the DAO\n",(0,i.kt)("inlineCode",{parentName:"p"},"Voting")," app, which can also manage them. This means that, initially, levers can only be changed by\nthe DAO voting, and other entities can be allowed to do the same only as a result of the voting."),(0,i.kt)("p",null,"All existing levers are listed below, grouped by the contract."),(0,i.kt)("h3",{id:"a-note-on-upgradeability"},"A note on upgradeability"),(0,i.kt)("p",null,"The following contracts are upgradeable by the DAO voting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/lido"},(0,i.kt)("inlineCode",{parentName:"a"},"Lido"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/node-operators-registry"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeOperatorsRegistry"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/lido-oracle"},(0,i.kt)("inlineCode",{parentName:"a"},"LidoOracle")))),(0,i.kt)("p",null,"Upgradeability is implemented by the Aragon kernel and base contracts. To upgrade an app, one needs\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"dao.APP_MANAGER_ROLE")," permission provided by Aragon. All upgradeable contracts use the\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.openzeppelin.com/upgradeability-using-unstructured-storage"},"Unstructured Storage pattern")," in order to provide stable storage structure across upgrades."),(0,i.kt)("h2",{id:"lido"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/lido"},"Lido")),(0,i.kt)("h3",{id:"burning-steth-tokens"},"Burning stETH tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"burnShares(address _account, uint256 _sharesAmount)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"BURN_ROLE"))))),(0,i.kt)("p",null,"DAO members can burn token shares via DAO voting to offset slashings using insurance funds.\nE.g. protocol was slashed by 5 Ether; by burning the amount of shares corresponding to 5 stETH\nthe stakers can be made whole."),(0,i.kt)("h3",{id:"protocol-contracts"},"Protocol contracts"),(0,i.kt)("p",null,"The addresses of the oracle, treasury, and isurance fund contracts."),(0,i.kt)("p",null,"Oracle contract is allowed to make periodical updates of beacon stats by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"handleOracleReport"),".\nTreasury contract is used to accumulate the protocol treasury fee.\nInsurance fund contract is used to accumulate the protocol insurance fee."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setProtocolContracts(address _oracle, address _treasury, address _insuranceFund)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_PROTOCOL_CONTRACTS")))),(0,i.kt)("li",{parentName:"ul"},"Accessors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getOracle() returns (address)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTreasury() returns (address)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getInsuranceFund() returns (address)"))))),(0,i.kt)("p",null,"The oracle contract serves as a bridge between ETH 2.0 -> ETH oracle committee members and the rest of the protocol,\nimplementing quorum between the members. The oracle committee members report balances controlled by the DAO\non the ETH 2.0 side, which can go up because of reward accumulation and can go down due to slashing."),(0,i.kt)("h3",{id:"fee"},"Fee"),(0,i.kt)("p",null,"The total fee, in basis points (",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"100%"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setFee(uint16)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_FEE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getFee() returns (uint16)"))),(0,i.kt)("p",null,"The fee is taken on staking rewards and distributed between the treasury, the insurance fund, and\nnode operators."),(0,i.kt)("h3",{id:"fee-distribution"},"Fee distribution"),(0,i.kt)("p",null,"Controls how the fee is distributed between the treasury, the insurance fund, and node operators.\nEach fee component is in basis points; the sum of all components must add up to 1 (",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," basis points)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setFeeDistribution(uint16 treasury, uint16 insurance, uint16 operators)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_FEE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getFeeDistribution() returns (uint16 treasury, uint16 insurance, uint16 operators)"))),(0,i.kt)("h3",{id:"eth-20-withdrawal-credentials"},"ETH 2.0 withdrawal Credentials"),(0,i.kt)("p",null,"Credentials to withdraw ETH on ETH 2.0 side after phase 2 is launched."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setWithdrawalCredentials(bytes)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_WITHDRAWAL_KEY")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getWithdrawalCredentials() returns (bytes)"))),(0,i.kt)("p",null,"The protocol uses these credentials to register new ETH 2.0 validators."),(0,i.kt)("h3",{id:"deposit-loop-iteration-limit"},"Deposit loop iteration limit"),(0,i.kt)("p",null,"Controls how many ETH 2.0 deposits can be made in a single transaction."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A parameter of the ",(0,i.kt)("inlineCode",{parentName:"li"},"depositBufferedEther(uint256)")," function"),(0,i.kt)("li",{parentName:"ul"},"Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},"16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/test/scenario/lido_deposit_iteration_limit.js"},"Scenario test"))),(0,i.kt)("p",null,"When someone calls ",(0,i.kt)("inlineCode",{parentName:"p"},"depositBufferedEther"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," tries to register as many ETH 2.0 validators\nas it can given the buffered Ether amount. The limit is passed as an argument to this function and\nis needed to prevent the transaction from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/smart-contract-best-practices/blob/8f99aef/docs/known_attacks.md#gas-limit-dos-on-a-contract-via-unbounded-operations"},"failing due to the block gas limit"),", which is possible\nif the amount of the buffered Ether becomes sufficiently large."),(0,i.kt)("h3",{id:"pausing"},"Pausing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"stop()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"PAUSE_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"resume()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"RESUME_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"isStopped() returns (bool)"))),(0,i.kt)("p",null,"When paused, ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," doesn't accept user submissions, doesn't allow user withdrawals and oracle\nreport submissions. No token actions (burning, transferring, approving transfers and changing\nallowances) are allowed. The following transactions revert:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plain Ether transfers;"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"submit(address)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"depositBufferedEther(uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"withdraw(uint256, bytes32)")," (withdrawals are not implemented yet)."),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"pushBeacon(uint256, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"burnShares(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"transferFrom(address, address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"approve(address, uint256)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"increaseAllowance(address, uint)"),";"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"decreaseAllowance(address, uint)"),".")),(0,i.kt)("h3",{id:"execution-layer-rewards"},"Execution layer rewards"),(0,i.kt)("p",null,"Lido implements an architecture design which was proposed in the Lido Improvement Proposal ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-12.md"},"#12")," to collect the execution level rewards (starting from the Merge hardfork) and distribute them as part of the Lido Oracle report."),(0,i.kt)("p",null,"These execution layer rewards are initially accumulated on the dedicated ",(0,i.kt)("a",{parentName:"p",href:"/contracts/lido-execution-layer-rewards-vault"},(0,i.kt)("inlineCode",{parentName:"a"},"LidoExecutionLayerRewardsVault"))," contract and consists of priority fees and MEV."),(0,i.kt)("p",null,"There is an additional limit to prevent drastical token rebase events.\nSee the following issue: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/issues/405"},(0,i.kt)("inlineCode",{parentName:"a"},"#405"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"setELRewardsVault()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_EL_REWARDS_VAULT_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"setELRewardsWithdrawalLimit()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_EL_REWARDS_WITHDRAWAL_LIMIT_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessors:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getELRewardsVault()"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getELRewardsWithdrawalLimit()"),".")))),(0,i.kt)("h3",{id:"staking-rate-limiting"},"Staking rate limiting"),(0,i.kt)("p",null,"Lido features a safeguard mechanism to prevent huge APR losses facing the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.lido.fi/modelling-the-entry-queue-post-merge-an-analysis-of-impacts-on-lidos-socialized-model/"},"post-merge entry queue demand"),"."),(0,i.kt)("p",null,"New staking requests could be rate-limited with a soft moving cap for the stake amount per desired period."),(0,i.kt)("p",null,"Limit explanation scheme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    * \u25b2 Stake limit\n    * \u2502.....  .....   ........ ...            ....     ... Stake limit = max\n    * \u2502      .       .        .   .   .      .    . . .\n    * \u2502     .       .              . .  . . .      . .\n    * \u2502            .                .  . . .\n    * \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Time\n    * \u2502     ^      ^          ^   ^^^  ^ ^ ^     ^^^ ^     Stake events\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"p"},"resumeStaking()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"setStakingLimit(uint256, uint256)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removeStakingLimit()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"STAKING_CONTROL_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"p"},"pauseStaking()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"STAKING_PAUSE_ROLE")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accessors:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isStakingPaused()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentStakeLimit()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStakeLimitFullInfo()"))))),(0,i.kt)("p",null,"When staking is paused, ",(0,i.kt)("inlineCode",{parentName:"p"},"Lido")," doesn't accept user submissions. The following transactions revert:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plain Ether transfers;"),(0,i.kt)("li",{parentName:"ul"},"calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"submit(address)"),".")),(0,i.kt)("p",null,"For details, see the Lido Improvement Proposal ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-14.md"},"#14"),"."),(0,i.kt)("h3",{id:"todo"},"TODO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transfer to vault (",(0,i.kt)("inlineCode",{parentName:"li"},"transferToVault()"),")")),(0,i.kt)("h2",{id:"nodeoperatorsregistry"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/node-operators-registry"},"NodeOperatorsRegistry")),(0,i.kt)("h3",{id:"node-operators-list"},"Node Operators list"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"addNodeOperator(string _name, address _rewardAddress, uint64 _stakingLimit)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_NODE_OPERATOR_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorName(uint256 _id, string _name)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_NAME_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorRewardAddress(uint256 _id, address _rewardAddress)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_ADDRESS_ROLE")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorStakingLimit(uint256 _id, uint64 _stakingLimit)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_LIMIT_ROLE"))))),(0,i.kt)("p",null,"Node Operators act as validators on the Beacon chain for the benefit of the protocol. Each\nnode operator submits no more than ",(0,i.kt)("inlineCode",{parentName:"p"},"_stakingLimit")," signing keys that will be used later\nby the protocol for registering the corresponding ETH 2.0 validators. As oracle committee\nreports rewards on the ETH 2.0 side, the fee is taken on these rewards, and part of that fee\nis sent to node operators\u2019 reward addresses (",(0,i.kt)("inlineCode",{parentName:"p"},"_rewardAddress"),")."),(0,i.kt)("h3",{id:"deactivating-a-node-operator"},"Deactivating a node operator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setNodeOperatorActive(uint256 _id, bool _active)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_NODE_OPERATOR_ACTIVE_ROLE"))))),(0,i.kt)("p",null,"Misbehaving node operators can be deactivated by calling this function. The protocol skips\ndeactivated operators during validator registration; also, deactivated operators don\u2019t\ntake part in fee distribution."),(0,i.kt)("h3",{id:"managing-node-operators-signing-keys"},"Managing node operator\u2019s signing keys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"addSigningKeys(uint256 _operator_id, uint256 _quantity, bytes _pubkeys, bytes _signatures)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_SIGNING_KEYS")))),(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"removeSigningKey(uint256 _operator_id, uint256 _index)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_SIGNING_KEYS"))))),(0,i.kt)("p",null,"Allow to manage signing keys for the given node operator."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Signing keys can also be managed by the reward address of a signing provider by calling\nthe equivalent functions with the ",(0,i.kt)("inlineCode",{parentName:"p"},"OperatorBH")," suffix: ",(0,i.kt)("inlineCode",{parentName:"p"},"addSigningKeysOperatorBH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removeSigningKeyOperatorBH"),".")),(0,i.kt)("h3",{id:"reporting-new-stopped-validators"},"Reporting new stopped validators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"reportStoppedValidators(uint256 _id, uint64 _stoppedIncrement)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"REPORT_STOPPED_VALIDATORS_ROLE"))))),(0,i.kt)("p",null,"Allows to report that ",(0,i.kt)("inlineCode",{parentName:"p"},"_stoppedIncrement")," more validators of a node operator have become stopped."),(0,i.kt)("h2",{id:"lidooracle"},(0,i.kt)("a",{parentName:"h2",href:"/contracts/lido-oracle"},"LidoOracle")),(0,i.kt)("h3",{id:"lido-1"},"Lido"),(0,i.kt)("p",null,"Address of the Lido contract."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLido() returns (address)"))),(0,i.kt)("h3",{id:"members-list"},"Members list"),(0,i.kt)("p",null,"The list of oracle committee members."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"li"},"addOracleMember(address)"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"removeOracleMember(address)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_MEMBERS")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getOracleMembers() returns (address[])"))),(0,i.kt)("h3",{id:"the-quorum"},"The quorum"),(0,i.kt)("p",null,"The number of exactly the same reports needed to finalize the epoch."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setQuorum(uint256)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_QUORUM")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getQuorum() returns (uint256)"))),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"quorum")," number of the same reports is collected for the current epoch,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the epoch is finalized (no more reports are accepted for it),"),(0,i.kt)("li",{parentName:"ul"},"the final report is pushed to the Lido,"),(0,i.kt)("li",{parentName:"ul"},"statistics collected and the ",(0,i.kt)("a",{parentName:"li",href:"#sanity-check"},"sanity check")," is evaluated,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#beacon-report-receiver"},"beacon report receiver")," is called.")),(0,i.kt)("h3",{id:"sanity-check"},"Sanity check"),(0,i.kt)("p",null,"To make oracles less dangerous, we can limit rewards report by 0.1% increase in stake and 15%\ndecrease in stake, with both values configurable by the governance in case of extremely unusual\ncircumstances."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutators: ",(0,i.kt)("inlineCode",{parentName:"li"},"setAllowedBeaconBalanceAnnualRelativeIncrease(uint256)")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"setAllowedBeaconBalanceRelativeDecrease(uint256)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_REPORT_BOUNDARIES")))),(0,i.kt)("li",{parentName:"ul"},"Accessors: ",(0,i.kt)("inlineCode",{parentName:"li"},"getAllowedBeaconBalanceAnnualRelativeIncrease() returns (uint256)")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"getAllowedBeaconBalanceRelativeDecrease() returns (uint256)"))),(0,i.kt)("h3",{id:"beacon-report-receiver"},"Beacon report receiver"),(0,i.kt)("p",null,"It is possible to register a contract to be notified of the report push to Lido (when the quorum is\nreached). The contract should provide\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-dao/blob/develop/contracts/0.4.24/interfaces/IBeaconReportReceiver.sol"},"IBeaconReportReceiver")," interface."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setBeaconReportReceiver(address)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_BEACON_REPORT_RECEIVER")))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getBeaconReportReceiver() returns (address)"))),(0,i.kt)("p",null,"Note that setting zero address disables this functionality."),(0,i.kt)("h3",{id:"current-reporting-status"},"Current reporting status"),(0,i.kt)("p",null,'For transparency we provide accessors to return status of the oracle daemons reporting for the\ncurrent "',(0,i.kt)("a",{parentName:"p",href:"#expected-epoch"},"expected epoch"),'".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentOraclesReportStatus() returns (uint256)")," - returns the current reporting bitmap,\nrepresenting oracles who have already pushed their version of report during the ",(0,i.kt)("a",{parentName:"li",href:"#expected-epoch"},"expected"),"\nepoch, every oracle bit corresponds to the index of the oracle in the current members list,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentReportVariantsSize() returns (uint256)")," - returns the current reporting variants\narray size,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentReportVariant(uint256 _index) returns (uint64 beaconBalance, uint32 beaconValidators, uint16 count)")," - returns the current reporting array element with the given\nindex.")))),(0,i.kt)("h3",{id:"expected-epoch"},"Expected epoch"),(0,i.kt)("p",null,"The oracle daemons may provide their reports only for the one epoch in every frame: the first\none. The following accessor can be used to look up the current epoch that this contract expects\nreports."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getExpectedEpochId() returns (uint256)"),".")),(0,i.kt)("p",null,"Note that any later epoch, that has already come ",(0,i.kt)("em",{parentName:"p"},"and")," is also the first epoch of its frame, is\nalso eligible for reporting. If some oracle daemon reports it, the contract discards any results of\nthis epoch and advances to the just reported one."),(0,i.kt)("h3",{id:"version-of-the-contract"},"Version of the contract"),(0,i.kt)("p",null,"Returns the initialized version of this contract starting from 0."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getVersion() returns (uint256)"),".")),(0,i.kt)("h3",{id:"beacon-specification"},"Beacon specification"),(0,i.kt)("p",null,"Sets and queries configurable beacon chain specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutator: ",(0,i.kt)("inlineCode",{parentName:"li"},"setBeaconSpec( uint64 _epochsPerFrame, uint64 _slotsPerEpoch, uint64 _secondsPerSlot, uint64 _genesisTime )"),",",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Permission required: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_BEACON_SPEC"),","))),(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getBeaconSpec() returns (uint64 epochsPerFrame, uint64 slotsPerEpoch, uint64 secondsPerSlot, uint64 genesisTime)"),".")),(0,i.kt)("h3",{id:"current-epoch"},"Current epoch"),(0,i.kt)("p",null,"Returns the epoch calculated from current timestamp."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentEpochId() returns (uint256)"),".")),(0,i.kt)("h3",{id:"supplemental-epoch-information"},"Supplemental epoch information"),(0,i.kt)("p",null,"Returns currently reportable epoch (the first epoch of the current frame) as well as its start and\nend times in seconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentFrame() returns (uint256 frameEpochId, uint256 frameStartTime, uint256 frameEndTime)"),".")),(0,i.kt)("h3",{id:"last-completed-epoch"},"Last completed epoch"),(0,i.kt)("p",null,"Return the last epoch that has been pushed to Lido."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLastCompletedEpochId() returns (uint256)"),".")),(0,i.kt)("h3",{id:"supplemental-rewards-information"},"Supplemental rewards information"),(0,i.kt)("p",null,"Reports beacon balance and its change during the last frame."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessor: ",(0,i.kt)("inlineCode",{parentName:"li"},"getLastCompletedReportDelta() returns (uint256 postTotalPooledEther, uint256 preTotalPooledEther, uint256 timeElapsed)"),".")))}c.isMDXComponent=!0}}]);