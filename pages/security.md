import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

<Bleed>
<div align="center">
  ![Velocimeter Launch](/dome2.jpg)
  </div>
</Bleed>

&nbsp;

## Contract Addresses

| Contract Name | Contract Address | Network |
| --- | --- | --- |
| FLOW               | [????](URL) | Arbitrum |
| GaugeFactory       | [????](URL) | Arbitrum |
| BribeFactory       | [????](URL) | Arbitrum |
| WrappedBribeFactory| [[????](URL) | Arbitrum |
| PairFactory        | [????](URL) | Arbitrum |
| Router             | [????](URL) | Arbitrum |
| VelocimeterLibrary   | [????](URL) | Arbitrum |
| VeArtProxy         | [????](URL) | Arbitrum |
| VotingEscrow       | [????](URL) | Arbitrum |
| RewardsDistributor | [????](URL) | Arbitrum |
| Voter              | [????](URL) | Arbitrum |
| Minter             | [????](URL) | Arbitrum |

## Tokenlist

In addition to the [official Arbitrum tokens
list](https://tokenlists.org/token-list?url=https://static.Arbitrum.io/Arbitrum.tokenlist.json),
we maintain one as well
with our partner tokens:
https://docs.Velocimeter.finance/tokenlist.json

## Differences from Solidly

As of August 2022, we've compiled a list of key differences between Velocimeter's contracts and Solidly's.

### Major changes

  - **Treat external bribes differently than internal bribes (i.e. fees).**
    The Bribe contracts are spilt into two separate contracts, `InternalBribe` and
    `ExternalBribe`. `InternalBribe` functions essentially the same way as `Bribe`
    did, but `ExternalBribe` ensures that rewards are eliglble to be claimed by
    any voter who votes for the underlying gauge during the epoch, instead of
    only voters who vote after the rewards are sent. `ExternalBribe` also ensures
    that rewards can only be claimed after the epoch ends.`ExternalBribe`
    rewards must also be _whitelisted_ via on-chain governance.
  - **One vote per epoch.** In Velocimeter, voters are only allowed to make "active"
    voting decisions (i.e. vote and reset) once per epoch. Voters must wait
    until the next epoch to change their votes. Voters can, however, _cast_
    their votes throughout the epoch.
  - **Killable gauges.** To dissuade emissions exploitation via dummy gauges, we're
    allowing the _Velocimeter Council of Velocimetry_ (akin to Curve's Emergency DAO) to kill
    any "bad" gauges. The Council is composed of individuals from varying
    parties meant to serve as a credibly neutral decision-maker for the broader
    ecosystem.

### Minor changes

  - **Removed the LP boost for voters.** The boost was removed that voters receive
    when staking their LPs with gauges they voted for. This removes the need
    for a veNFT aggregator (more on this later...).
  - **Removed negative voting.** Negative voting was considered zero-sum for
    Solidly, so it was removed.
  - **Team emissions.** 3% of new emissions will be sent to a team address, meant
    to cover on-going expenses and future development.

### Small changes

  - **Modifiable fees.** Fees are now doubled to 0.02%, modifiable up to 0.05%, and
    tracked differently for volatile vs stable pairs.
  - **Upgradeable veNFT art.** Self-explanatory
  - **Initial distribution.** Initial distribution(ID) or `SOLID` was based on TVL brought
  to the Fantom Network. ID of `VELO` had holders of `WEVE` being granted `VELO`. ID of `FLOW` is completely fresh.
  More on the ID of `FLOW` can be found in the [Tokenomics section](/tokenomics#initial-distribution).

# Security

Velocimeter is a direct fork of [Velodrome Finance](https://github.com/velodrome-finance) which was adapted from Solidly, which [codebase was open
sourced in full](https://github.com/solidlyexchange/) by Andre Cronje and his team in
March 2022. Since its release in February on Fantom network, no security
incidents related to Solidly smart contracts were reported.

Velocimeter smart contracts can be found on Optimistic Etherscan at the links above.

<Callout emoji="⚠️">
  Before moving forward, we'd like to remind to our users that
  security audits do not eliminate risks completely and that
  every user should read and agree to our
  [legal disclaimer](/legal) before using Velocimeter!

  For security reports, please reach out to us on
  [Discord](https://discord.gg/qpue2s6VfJ), or to the contacts provided on our Github page.
</Callout>

## Audits

Solidly went through a partial (only the AMM part was sent for audit) security
audit in January 30, 2022. The audit was done by PeckShield and did reveal 5
low-severity and 1 informal findings.

The full audit is available for [download from Solidly git
repository](https://github.com/solidlyexchange/solidly/blob/master/audits/e456a816-3802-4384-894c-825a4177245a.pdf).

Velodrome went through a security audit and a peer review as part of the Code4rena bug bouncy contest.
Finally, a full MythX deep scan on Velodrome contracts found just a
handful of false-positive, low-severity issues reported.

<Callout emoji="⚠️">
Velocimeter has NOT gone through any form of audit or code review but rather adopts the following from the Velodrome security procedures. None of the code was changed other than the naming of a few contracts. ALL the following, applies directly only to the Velodrome contracts. 

 Users of Velocimeter should take note of this, and accept this risk if they wish to interact with the Velocimeter contracts. 
</Callout>

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

