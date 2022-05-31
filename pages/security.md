import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

<Bleed>
  ![Velodrome Finance Launch](/biker_hero.png)
</Bleed>

&nbsp;

# Security

As a commitment towards the safety of our users and partners, we want to
be transparent about the changes and the status of the security audits of our
smart contracts.

Velodrome Finance was adapted from Solidly, which [codebase was open
sourced in full](https://github.com/solidlyexchange/) by Andre Cronje and his team in
March 2022. Since its release in February on Fantom network, no security
incidents related to Solidly smart contracts were reported.

Velodrome Finance open-source repositories can be found at:
https://github.com/velodrome-finance

<Callout emoji="⚠️">
  Before moving forward, we'd like to remind to our users that
  security audits do not eliminate risks completely and that
  every user should read and agree to our
  [legal disclaimer](/legal) before using Velodrome Finance!

  For security reports, please reach out to us on
  [Discord](https://discord.gg/eGgYPGczaf), or to the contacts provided on our Github page.
</Callout>

## Changelog

As of May 2022, we've compiled a changelog of the Velodrome smart contracts.

### Major changes

  - **Treat external bribes differently than internal bribes (i.e. fees).**
    We split Bribe into two separate contracts, `InternalBribe` and
    `ExternalBribe`. `InternalBribe` functions essentially the same way as `Bribe`
    did, but `ExternalBribe` ensures that rewards are eliglble to be claimed by
    any voter who votes for the underlying gauge during the epoch, instead of
    only voters who vote after the rewards are sent. `ExternalBribe` also ensures
    that rewards can only be claimed after the epoch ends.`ExternalBribe`
    rewards must also be _whitelisted_ via on-chain governance.
  - **One vote per epoch. In Velodrome, voters are only allowed to make "active"
    voting decisions (i.e. vote and reset) once per epoch.** Voters must wait
    until the next epoch to change their votes. Voters can, however, _poke_
    their votes throughout the epoch.
  - **On-chain governance.** To handle protocol-wide decisions (such as eligible
    tokens for external bribes), we introduce an on-chain Governor. This will
    likely be Tally's first on-chain governor on Optimism following their
    support for the network.
  - **Killable gauges.** To dissuade emissions exploitation via dummy gauges, we're
    allowing the _Velodrome Commissaire_ (akin to Curve's Emergency DAO) to kill
    any "bad" gauges. The Commissaire is composed of individuals from varying
    parties meant to serve as a credibly neutral decision-maker for the broader
    ecosystem.

### Minor changes

  - **Removed the LP boost for voters.** We removed the boost that voters receive
    when staking their LPs with gauges they voted for. This removes the need
    for a veNFT aggregator (more on this later...).
  - **Removed negative voting.** We found negative voting to be zero-sum for
    Solidly, so we decided to remove it.
  - **Team emissions.** 3% of new emissions will be sent to a team address, meant
    to cover on-going expenses and future development.

### Small changes

  - **Modifiable fees.** Fees are now doubled to 0.02%, modifiable up to 0.05%, and
    tracked differently for volatile vs stable pairs.
  - **Upgradeable veNFT art.** Self-explanatory
  - **Velodrome specific.**
  - **Initial distribution.** Initial distribution will be handled in two ways: a
    redemption process that uses LayerZero to burn `$WEVE` for `$USDC` and
    `$VELO` on Optimism, and a Merkle airdrop contract. Unclaimed `$VELO` is
    never minted to ensure emissions aren't affected.

### Areas of Concern

As we're not changing any of the core swap logic, the bulk of our security
concerns relate to the native token emissions, governance, and distribution:

 * `Gauge.sol` and `ExternalBribe.sol`, which introduce new logic related to how
   external bribes and voting work
 * `VotingEscrow.sol`, which adds compatibility with _OZ_ / _Compound_-style
   governance tools like Tally
 * `RedemptionSender.sol` and `RedemptionReceiver.sol` both use LayerZero for
   cross-chain messaging

## Audits

Solidly went through a partial (only the AMM part was sent for audit) security
audit in January 30, 2022. The audit was done by PeckShield and did reveal 5
low-severity and 1 informal findings.

The full audit is available for [download from Solidly git
repository](https://github.com/solidlyexchange/solidly/blob/master/audits/e456a816-3802-4384-894c-825a4177245a.pdf).

We also ran a full MythX deep scan on Velodrome contracts and found just a
handful of false-positive, low-severity issues reported.

## Bug Bounty Programs

Velodrome Finance run a [bug bounty contest on 23rd to 30th of May 2022 with
awards up to $75,000 on Code4rena](https://code4rena.com/contests/2022-05-velodrome-finance-contest).
The main scope of the contest was to cover all the new changes to the new and
the original contracts.

This is the second bug bounty program for Solidly. First program
was launched in February 2022 on Immunefi.com. At the moment, there are no
claims for any of the $200,000 rewards ([on their
Github](https://github.com/solidlyexchange/solidly/blob/master/SECURITY.md)).
