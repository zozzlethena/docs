import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
<div align="center">
![Velocimeter Problem Statement](/dome.jpg)
</div>

</Bleed>


&nbsp;

# Protocol Overview

## Problems with Liquidity Incentivization

Almost every protocol in DeFi needs to have a certain amount of liquidity for one reason or another.

| Liquidity    | Example   | Benefit                                        |
| ------------ | --------- | ---------------------------------------------- |
| Native token | OP-USDC   | Treasury access to capital markets             |
| Stablecoins  | DAI-USDC  | Ensure stability by minimizing depeg risk      |
| Pegged asset | ETH-stETH | Minimize opportunity cost of converting assets |

However, current solutions for incentivizing liquidity come with their own tradeoffs and pitfalls:

- Pool 2 emissions (i.e. attaching a reward to staked LPs) can be costly to maintain, and often times result in a "farm and dump" resulting in "unsticky" liquidity.

- Protocol owned liquidity can be costly to bootstrap, and liquidity may only be needed occasionally, instead of on-going basis.

- Bribing voters in the CRV/CVX system can be costly as incumbents already have a sizeable lead. Additionally, the universe of pool types here are limited.

## Introducing Velocimeter

Velocimeter addresses these issues and presents an attractive alternative by addressing the core issues in Solidly and adding its own improvements. To recall, the key innovation of Solidly was to align protocol emissions with fees generated, not simply liquidity. To do this, it would allow protocols and other large stakeholders to become veNFT "voters", using their locked voting power to direct future emissions and collecting fees (termed bribes in Solidly) from the pools they voted for.

Velocimeter has made several improvements to the Solidly codebase, all of which were thoughtfully chosen to ensure that the protocol would carry out the original intended mechanism of allowing voters to _fairly compensate_ LPs for impermanent loss.

Solidly had several key issues that prevented its success in the Fantom ecosystem:

## Improvement: Tying Rewards with Emissions

**In Solidly, voting rewards (i.e. bribes) were claimable _before_ the emissions from that vote were committed.** Velocimeter addresses this with new mechanisms:

- First, we allow voters to make only one "active" voting decision (i.e. `Voter.vote()`, `Voter.reset()`) every epoch (note: this does not include the `Voter.poke()` function).
- Additionally, bribes from fees (_internal_) and external sources (_external_) are treated differently.
  Internal bribes function more or less the same way as they did in Solidly, streamed to voters who vote for them.
  External bribes, however, are rewarded _per epoch_ rather than streamed, and are claimable only after the next epoch starts.
  This means that a bribe sent at the last minute of an epoch will accrue to all voters of that epoch, and be claimable once the epoch flips.

The goal of these changes is to ensure a healthy equilibrium between voters and external bribers. Bribers are incentivized to get their bribes early in that week, as to attract early voters. They also benefit from bribing later, as to have more information on competing bribes. Voters face a similar dilemma, as voting too early means forgoing potentially lucrative bribes that come later, and voting too late means voting with a lower (`$FLOW`) balance. Note that this latter affect is especially pronounced for voters who have locked for shorter time periods (e.g. voters who have locked for weeks rather than months/years will experience larger differences in the bribes they receive from voting later vs. earlier in the epoch).

## Improvement: Ensuring Productive Gauges

**In Solidly, exploitive voters were able to direct emissions towards unproductive gauges, including those for pools 100% owned by those voters.** Velocimeter addresses this in three ways:

- First, we've added an [on-chain governor](https://optimistic.etherscan.io/address/0x64DD805aa894dc001f8505e000c7535179D96C9E) to whitelist pairs used in gauges. Voters will need at least 0.02% to submit a proposal, and 4% to reach quorum. To ensure that those who whitelist gauges are economically aligned economically with our system, we've also removed the ability to whitelist by paying a whitelisting fee. Note that the on-chain governor is currently not live, as we're still working with Tally to get the process set up.
- Second, we've also added an Emergency ["Commissaire"](https://optimistic.etherscan.io/address/0xcc2d01030ec2cd187346f70bfc483f24488c32e8), which has the ability to kill any gauge it deems unproductive to the broader ecosystem. This Commissaire consists of folks from both the Velocimeter core team, and the broader Arbitrum and DeFi ecosystems. The Commissaire multisig is available here, and signers include:

| Signer      | Affiliation      | Address                                    |
| ----------- | ---------------- | ------------------------------------------ |
| Jack Anorak | Velocimeter        | 0x9eBd10B46B43351097caB2D3c03Ccf440957A2a9 |
| pooltypes   | Velocimeter        | 0xc0DE1436C4E247F8652476A0B9ff55699801e1d0 |
| Nick        | Velocimeter        | 0x53e0b897eae600b2f6855fce4a42482e9229d2c2 |
| vfat        | Hundred Finance  | 0xeF0Ca09fbf9a5f61E657Fb208b46b8685c1d4766 |
| 0xHamZ      | DeFi Independent | 0x698c3619f9ecB540cEc21E056ae4A900Bca1649C |
| Arbitrum    | Arbitrum         | TBD                                        |

- Third, we've doubled the initial swap fee from 0.01% to 0.02% to ensure that voters have more twice the incentive to direct emissions towards productive liquidity. Note that this rate is still much lower than alternative exchanges (e.g. Curve at 0.04%). Stable and volatile pairs also have different fees, both modifiable up to 0.05%.

## Improvement: Prolonged Emissions Decay

**In Solidly, protocol emissions decayed too quickly, leading to minimal incentives for late entrants.** Obviously early adopters should be rewarded for the risks they're taking, but we observed that the emissions decayed too quickly in the Solidly model. As a result, we made a few small tweaks to ensure that while early adopters would still be rewarded, the protocol would still be an attractive opportunity for future protocols.

- First, we modified the emissions growth function to

    > (FLOW.totalSupply ÷ VELO.totalsupply)³ × 0.5 × Emissions

- Second, we removed negative voting, as we found it too zero-sum.
- Third, we removed the LP emissions "boost" for voters. Those emissions are instead reallocated towards all LPs, regardless of veNFT ownership status, to ensure voters are able to incentivize outside liquidity.
- Fourth, we adjusted the initial distribution to skew much heavier towards retail: the veDAO community and other sophisticated DeFi ecosystem participants. This was done to avoid an fleeting TVL race, and is implemented with both a standard MerkleClaim airdrop contract that dynamically mints VELO for eligible addresses, and a cross-chain WeVE burn contract powered by LayerZero.

## Improvement: White-Glove Support

**In Solidly, the lack of a "team" meant lack of support post-launch.**
In line with the veDAO ethos, we want to ensure that our protocol has white-glove support for our partners and other stakeholders. To ensure that our team has sufficient resources to pay contributors an expand on our product offering, 3% of perpetual emissions will be directed towards our team multisig.
