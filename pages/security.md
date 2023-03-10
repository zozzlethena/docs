import Bleed from 'nextra-theme-docs/bleed';


<Bleed>
<div align="center">
  ![Velocimeter Launch](/dome2.jpg)
  </div>
</Bleed>

&nbsp;

## Contract Addresses

| Contract Name | Contract Address | Network |
| --- | --- | --- |
| FLOW               | [0x2Baec546a92cA3469f71b7A091f7dF61e5569889](https://tuber.build/token/0x2Baec546a92cA3469f71b7A091f7dF61e5569889)   | Canto |
| GaugeFactory       | [0xA472b00DdCf03f099dB954c70133dD6F0c5Fcc26](https://tuber.build/address/0xa472b00ddcf03f099db954c70133dd6f0c5fcc26) | Canto |
| BribeFactory       | [0xa9fa811Cc3BDdF9ba8dAC435f26B77525Eb3B546](https://tuber.build/address/0xa9fa811Cc3BDdF9ba8dAC435f26B77525Eb3B546) | Canto |
| WrappedBribeFactory| [0x3a9238141a4655d0dC907e18BBf9c21b843F09c7](https://tuber.build/address/0x3a9238141a4655d0dC907e18BBf9c21b843F09c7) | Canto |
| PairFactory        | [0xb12aF64E128A1D4489D13314eB4Df81cBCE126aC](https://tuber.build/address/0xb12aF64E128A1D4489D13314eB4Df81cBCE126aC) | Canto |
| Router             | [0x9B2920e72dF6E1A7053bEa7235c65079F5104398](https://tuber.build/address/0x9B2920e72dF6E1A7053bEa7235c65079F5104398) | Canto |
| VelocimeterLibrary | [0x7517df74F63a440D5Fc7c6Ec8BC40560F32079a8](https://tuber.build/address/0x7517df74F63a440D5Fc7c6Ec8BC40560F32079a8) | Canto |
| VeArtProxy         | [0x0B8a83247aa14d4f94f4025db839D87A91817eE9](https://tuber.build/address/0x0B8a83247aa14d4f94f4025db839D87A91817eE9) | Canto |
| VotingEscrow       | [0x990efF367C6c4aece43c1E98099061c897730F27](https://tuber.build/address/0x990efF367C6c4aece43c1E98099061c897730F27) | Canto |
| RewardsDistributor | [0x19E1eef506eE61A58d1AAa11635361bBaE5D0676](https://tuber.build/address/0x19E1eef506eE61A58d1AAa11635361bBaE5D0676) | Canto |
| Voter              | [0xC5B58aE761a77fF16d548dE9b42933c8FBfe4c33](https://tuber.build/address/0xC5B58aE761a77fF16d548dE9b42933c8FBfe4c33) | Canto |
| Minter             | [0x0cEd59FF9BDe47b2F5F0EDD2FdFfA6a0116d91Cd](https://tuber.build/address/0x0cEd59FF9BDe47b2F5F0EDD2FdFfA6a0116d91Cd) | Canto |

Full list of Pairs and Gauges at the bottom.

## Differences from Solidly and Velodrome

Here is a list of key differences in the Velocimeter's contracts.

### Major changes

  - ***Use trading fees as external bribes.***
    In contrast to Velodrome, Velocimeter takes the trading fees of liquidity pools with gauges and sends them
    as external bribes for that respective pool. `USDC` and `FLOW` trading fees directly bribe upcoming
    voters to direct their votes to the `USDC:FLOW` pool. Velocimeter believes this creates a much better
    voting experience as voters clearly can see what they will get, rather than wait to see what trading fees
    they happen to accumulate in the week following their vote.
  - ***Trading fees without gauges.***
    With pairs that don't have a gauge, the trading fees are sent to the treasury.   
  - ***One vote per epoch.*** In Velocimeter, voters are only allowed to make "active"
    voting decisions (i.e. vote and reset) once per epoch. Voters must wait
    until the next epoch to change their votes. Voters can, however, _cast_
    their votes throughout the epoch.
  - ***Killable gauges.*** To dissuade emissions exploitation via dummy gauges, we're
    allowing the _Velocimeter Council of Velocimetry_ (akin to Curve's Emergency DAO) to kill
    any "bad" gauges. The Council is composed of individuals from varying
    parties meant to serve as a credibly neutral decision-maker for the broader
    ecosystem.

### Minor changes

  - ***Removed the LP boost for voters.*** The boost was removed that voters receive
    when staking their LPs with gauges they voted for. This removes the need
    for a veNFT aggregator (more on this later...).
  - ***Removed negative voting.*** Negative voting was considered zero-sum for
    Solidly, so it was removed.
  - ***Team emissions.*** 3% of new emissions will be sent to a team address, meant
    to cover on-going expenses and future development.

### Small changes

  - ***Modifiable fees.*** Fees on Velocimeter are 0.03% for stable pools and 0.25% for volatile pools.
  - ***Upgradeable veNFT art.*** Self-explanatory

# Security

Velocimeter is a fork of [Velodrome Finance](https://github.com/velodrome-finance) which was adapted from Solidly, which [codebase was open
sourced in full](https://github.com/solidlyexchange/) by Andre Cronje and his team in
March 2022. Since its release in February on Fantom network, no security
incidents related to Solidly smart contracts were reported.



  Before moving forward, we'd like to remind to our users that
  security audits do not eliminate risks completely and that
  every user should read and agree to our
  [legal disclaimer](/legal) before using Velocimeter!
  For security reports, please reach out to us on
  [Discord](https://discord.gg/qpue2s6VfJ), or to the contacts provided on our Github page.


## Audits

Solidly went through a partial (only the AMM part was sent for audit) security
audit in January 30, 2022. The audit was done by PeckShield and did reveal 5
low-severity and 1 informal findings.

The full audit is available for [download from Solidly git
repository](https://github.com/solidlyexchange/solidly/blob/master/audits/e456a816-3802-4384-894c-825a4177245a.pdf).

Velodrome went through a security audit and a peer review as part of the Code4rena bug bouncy contest.
Finally, a full MythX deep scan on Velodrome contracts found just a
handful of false-positive, low-severity issues reported.
!


Velocimeter has NOT gone through any form of audit or code review but rather adopts the following from the Velodrome security procedures. The following point of code was changed. 
 - **Removal of Internal Fees** Because the fees are now directed as external bribes, the need for many contracts became redundant, ie pairFees.sol, internalBribe.sol


### VELODROME Security Procedures

The Code4rena contest results were released on August 8, 2022 and are available [here](https://code4rena.com/reports/2022-05-Velocimeter/). All high- or medium-risk issues were either resolved pre-deploy, except for one known issue (users can claim eligible rewards from ExternalBribe contracts more than once) that's currently being addressed (via a wrapped contract solution). No user funds are at risk from this vulnerability, and protocols who wish to deposit external bribes should get in contact with the core team to discuss alternative solutions. More information about our C4 contest can be found [here](/c4report).

Lastly, we also engaged with Coelacanth ([@ImpossibleNFT](https://twitter.com/impossiblenft)) for an informal full audit. Reports from that audit are available [here](https://github.com/Velocimeter-finance/contracts/tree/master/audits/velo).

## Bug Bounty Programs

Velodrome ran a [bug bounty contest on 23rd to 30th of May 2022 with
awards up to $75,000 on Code4rena](https://code4rena.com/contests/2022-05-Velocimeter-finance-contest).
The main scope of the contest was to cover all the new changes to the new and
the original contracts.

Solidly's bug bounty program was launched in February 2022 on Immunefi.com.
There were no claims for any of the $200,000 rewards ([on their Github](https://github.com/solidlyexchange/solidly/blob/master/SECURITY.md)).


## Gauges and Pairs
Search them [here](https://tuber.build/)

|	Symbol	|	LP Address	|	Gauge Address	|
| --- | --- | --- |
|	sAMM-NOTE/USDC	|	0x94c1dffefa4eac0801e3af0ee7108d8a08cf5f9e	|	0x7a475831e2f4911287ddf3bace5146388974aba5	|
|	vAMM-CRE/WCANTO	|	0xa9b9ca189cb3f37f8f6a0fc960f895130e9b8e72	|	0x60e72e355b6a6eb7c58891e7bd190a61c77032da	|
|	vAMM-NOTE/CRE	|	0x9013fc852fe4112cc80a9086baa7285a0b5194c1	|	0xe43b540b2d28446174611887fa7044d89ad82cd1	|
|	sAMM-WCANTO/ATOM	|	0x4ab9525aa4d19d4de22d848d64c0550b285f5043	|		|
|	vAMM-INJ/NOTE	|	0x39abdd8cae805c0385f1f6b2ff8ace6de15fc3a5	|	0x51c9d5d59ff575d18acfa6289aac26602b6f5e5f	|
|	sAMM-NOTE/WCANTO	|	0xc78e5644561b5cf5635851225f895fa1b7a57941	|		|
|	vAMM-CMDX/WCANTO	|	0x6de5cb9eaa9089352927d2ab2f168332ffdcc627	|	0x6ebbe3f168d9787c244bd928770a3976a53dc432	|
|	vAMM-UP/WCANTO	|	0xb2484d1bf4a26202245a7670f871bfa377bc771e	|		|
|	vAMM-cOHM/WCANTO	|	0xade82a510da243c263fb65077106c83608a5eaf1	|	0x6af54888ca657c78e16809aaf1d3425d5ddf19c2	|
|	vAMM-NOTE/KAVA	|	0x18a508ea8829c75507e2d8957a9475faa4272c16	|	0x9d5329e6daa0cbcf848bfef713be67c91c73e160	|
|	vAMM-NOTE/AKT	|	0x198127874cbf3a9fbf1ecd8cfe07d364d126f892	|	0x586b86e3c7b4ffe933e47ccc00ab326b4804d60f	|
|	vAMM-WCANTO/ATOM	|	0xa87b17fc81becf329860097b20073aad86baca9d	|	0xba6118e533eb9012c8125c604d19485639e14096	|
|	vAMM-OSMO/WCANTO	|	0x5bab63856bca4a3c682ac64cf6b37f209b791d82	|	0xc8db5c954a123ee6414c7bd9326f2a308f4e09af	|
|	vAMM-NOTE/WCANTO	|	0xe5a5a9699d75536cec2fc0c682c16a56df811ed9	|	0x8c58052eb6263db1623390202adb3390f40e2258	|
|	vAMM-WCANTO/WAIT	|	0x776fd660ed1138350f9d1f17e55a7f266ad5fedb	|		|
|	vAMM-AKT/WCANTO	|	0xbaa70fca9089ce737f89d690106a5cacbcbd7165	|	0x991441e539776c605557863854021ae9d55a5487	|
|	vAMM-CMDX/NOTE	|	0xfc79e6df47242a4f367912f3169fdb7b89be556a	|	0xa141785f8669593a58a962655c15266c04af48cd	|
|	vAMM-cINU/WCANTO	|	0x886e3779fba30b87037b4731a3dea0b119bacb76	|	0x8fceaaf4770efe7ca8fe4b0efd6454ad25c882fd	|
|	vAMM-NOTE/USDC	|	0x0afbc62d7911ea5a6902ffe5c4216b91028fdd51	|		|
|	vAMM-WCANTO/GRAV	|	0x1ab57f064318a55d9961f90dbbe4ab4a47d5bdbe	|	0x7695b756e714ca31b8d5469993063ad44dbe0001	|
|	vAMM-NOTE/GRAV	|	0x9afe631835cdbced9d6159c7ba9083000f3042b3	|	0xee364d444350683589481d9cef5c4048f591fbb0	|
|	vAMM-NOTE/SOMM	|	0x534846012ecfa631b7f84c2804cebdf388d3aaf4	|	0xb0ae5338f3a5d668ad395e9515fb76d184e96afe	|
|	vAMM-FLOW/NOTE	|	0xa694b9527bc94d99f8c382d942c1d992166c4434	|	0x31faa19b132ef9c5978fda13ac5c6bfd8c2fc279	|
|	vAMM-FLOW/WCANTO	|	0x862050752be9f4ae310fc8a58c9208ee3fa22148	|	0xfd2f8bd82b0ecacbe42bd9097c36ea667b66a023	|
|	vAMM-OSMO/NOTE	|	0x7726804f1a9fe067b3695ca6fad8f8a2522ded33	|	0xcd02bd3e1bc131c999fbbb9b681e29cc18838134	|
|	sAMM-FLOW/WCANTO	|	0xf344f85dbd2dd37fe1f2899ca8c059d2bfab0164	|	0xcb1ed406eb436056f5d12b4981ac5f5cc76ca377	|
|	vAMM-WCANTO/KAVA	|	0x206dd5d0cf5f4394381adab7fb6f36835e6ba760	|	0x1d2699c8259f97b3adc9e82e361b35532e55aa88	|
|	vAMM-USDC/WCANTO	|	0xa4ed386124c023aca6aa89b184f90e1375ee677c	|	0x82ffffdb581eb28448ba1ab0a3c8ba553981e3ad	|
|	vAMM-INJ/WCANTO	|	0x85d93692285c6d6304dc4c62975c351ce6d494a2	|	0xf4e0544aab42fcd7ed385c4a6719f3480f9aede9	|
|	vAMM-CBONK/WCANTO	|	0xf17264bb1f0d91eee3c2857076f40f147c223197	|		|
|	vAMM-WCANTO/SOMM	|	0xaf705d0b8f514f54523cf61594f7e6b521a82b25	|	0x1095cc24806ef89df8ba42d33e601cdfaeffacea	|
|	vAMM-FLOW/USDC	|	0x572255db686352e110b79b846c76dcf255f9b4dc	|	0xaafb0a7ef4d7be3ba87d1d55c8a3e85db1ddfb40	|