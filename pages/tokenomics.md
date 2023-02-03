import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

# Tokenomics

<Bleed>
<div align="center">
  ![Velocimeter Tokenomics](/dome6.jpg)
</div>
</Bleed>

&nbsp;



Velocimeter uses two tokens to manage its utility and governance:

 * `FLOW` &mdash; ERC-20 utility token of the protocol
 * `veFLOW` &mdash; ERC-721 governance token in the form of an NFT
   (non-fungible token)

`FLOW` is used for rewarding liquidity providers through emissions.

`veFLOW` is used for governance. Any `FLOW` holder can vote-escrow their tokens and
receive a `veFLOW` (also known as veNFT) in exchange. Additional tokens can be
added to the `veFLOW` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:
 * 100 `FLOW` locked for 4 years will become 100 `veFLOW`
 * 100 `FLOW` locked for 1 year will become 25 `veFLOW`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `veFLOW` holder receives.

## ve(3,3) Mechanics

Velocimeter mechanics reflect a combination of two DeFi concepts:
 * Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
 * Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velocimeter's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `FLOW` emissions,
and `veFLOW` holders receive protocol fees, bribes, rebases, and governance power.

![image](/dome3.jpg)

Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most ideal liquidity pools.

## Initial Distribution

At launch we distributed `veFLOW` to
users and protocols we believe will contribute to our
mission to become the liquidity base layer of the Arbitrum ecosystem.


### Distribution

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Protocol Owned NFT", 60 ],
      [ "Protocol Controlled Liquidity", 16],
      [ "Presale", 4],
      [ "Velocimeter Team", 72],
      [ "Tribute", 8],
      [ "Partner Protocol/DAOs", 140],
      [ "Partner Boost", 60],
      [ "Amplify Awareness Campaign", 40]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#79F8DB', '#027FFF', '#FDBF40', '#FF1301', '#F1EBE2', '#FBBF42', '#EDE7DB', '#EDE7DB' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

<Callout>
No loose `FLOW` tokens were given to anyone. The team doesn't get any vesting `FLOW` tokens. The only loose tokens minted were for initial liquidity and for Amplify Campaigns. The latter will all be used to create new `veFLOW` before being dispersed.
</Callout>

### Protocol Owned NFT

60M `FLOW` tokens were four year locked as an `veFLOW` and used to vote solely on core liquidity pools such as the `FLOW/USDC` LP. Any and all fees earned through these actions will be used to build up Protocol Owned Liquidity (POL) to ensure healthy trading of the `FLOW` token.

### Protocol Controlled Liquidity

16M `FLOW` tokens were set aside to add to initial liquidity for the `FLOW` token and is referred to as Protocol Controlled Liquidity (PCL). The amount of `FLOW` utilized for this was dependant on the amount of right side tokens *ie `USDC`* that were raised in the presale. As POL is developed this liquidity can be dismantled at the team discretion.

### Presale

4M `FLOW` tokens were sold as `veFLOW` to initial investors. This raise was used solely for the PCL

### Velocimeter Team

72M `FLOW` tokens were four year locked as `veFLOW` and given to the team. The individuals in the team are able to vote at their own personal discretion. This is considered the method of cash flow for those team members.

### Tribute

8M `FLOW` tokens were set aside to pay tribute to both Andre Cronje and Anton Nell, as well as, to the team at Velodrome. These tokens were four year locked in as many `veFLOW` as per requested by the respective recipients.

### Partners

140M `FLOW` tokens were four year locked in `veFLOW` NFTs of various sizes, ranging from 0.25% to 1%, and given to projects and DAOs in the ecosystem that the team felt would direct value to the Velocimeter ecosystem. As projects are selected and given their shares, this section will be updated.

### Partner Boost

60M `FLOW` tokens were set aside and used to mint 60 x 0.25% `veFLOW`. These NFTs will be granted, 5 per month, to the protocols that have the most positive impact on Velocimeter. This allocation will be done via a Snapshot vote with the `veFLOW` holding as a requisite for voting. 

### Amplifi and Airdrop

40M `FLOW` tokens were set aside to be earned, as `veFLOW`, by community members for different campaigns that are launched via Amplify Affiliate Campaigns. Follow their [twitter](https://twitter.com/AmpliFiDAO) to see announcements on how you can take part and earn `veFLOW`

## Emissions

The initial supply of `FLOW` is 400M.

Weekly emissions start at 15M `FLOW` (3.75% of the initial supply)
and decay at 1% per week (epoch).

`veFLOW` holders receive a rebase proportional to epoch LP emissions
and the ratio of `veFLOW` to `FLOW` supply, thus reducing vote power
dilution for `veFLOW`!

The weekly rebase amount is calculated with the following formula:
> (FLOW.totalSupply ÷ FLOW.totalsupply)³ × 0.5 × Emissions

`veFLOW` supply does not affect weekly LP emissions.

### Emission Schedule

<Bleed>
  <Chart
    chartType="LineChart"
    data={[
      ["Week", "LP Emissions", "veRebase (@50% locking rate)", "Total Supply"],
      ["1", 15, 0, 400],
      ["50", 9.1, 2, 1000],
      ["100", 5.5, 1.5, 1500],
      ["150", 3.3, 1, 1700],
      ["200", 2, 0.5, 1800]
    ]}
    options={{
      title: "FLOW Emissions (M)",
      curveType: 'function',
      aggregationTarget: 'series',
      selectionMode: 'multiple',
      legend: { position: "top", textStyle: {color: 'white'}},
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 },
      },
      vAxes: {
        1: { title: "Total Supply", titleTextStyle: { color: 'white' }},
        0: { title: "Epoch Distribution", titleTextStyle: { color: 'white' }}
      },
      hAxis: {
        title: "Week", titleTextStyle: { color: 'white' },
      },
      backgroundColor: '#111111',
      lineWidth: 3,
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#59BFD8', '#0281FF'],
      legend: {textStyle: {color: 'white'}},
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Gauge Voting

`veFLOW` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `FLOW` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for. 

More information on voting can be found the [Voting Section](/voting) section of this document.


## Rewards

There are 4 types of rewards on Velocimeter.

### Emissions

`FLOW` is distributed to liquidity pool stakers. The amount of
`FLOW` distributed towards every pool is proportional to the voting power
received from the voters every epoch.

These rewards are streaming and are available for claim as they accrue.

### Fees

Liquidity pool trading fees are distributed to voters in pool tokens (
e.g., if the pool voted on is `vAMM-FLOW/USDC` the distributed tokens are `FLOW` and
`$USDC`) in proportion to the activity of trading in the pool. These will likely not be evenly balanced.

The tokens are streaming proportionally to the voting power cast by a voter and
the accrued amount of trading fees.

These rewards are available for claim as they accrue. They do not need to be claimed each epoch.

### Bribes

In addition to the fees, liquidity pools allow external rewards from anyone
(known as _bribes_). Bribes can be added to _whitelisted_ pools and are distributed 
_only_ to voters on that pool, proportionally to their share of pool votes.

These rewards are available for claim after the epoch flips 
(after Wednesday 23:59 UTC), and are proportional to the voting power cast by a
voter (`veFLOW`).

### Rebases

Represent `veFLOW` distributed to `veFLOW` holders in order to reduce the
voting power dilution from the inflationary rewards given to LP stakers.

## Rewards claim

Rebase rewards claim is available one full epoch after tokens are locked.
External bribe rewards are claimable after a new epoch has started (epochs increment right after 23:59 UTC each Wednesday).

An example of bribes, voting, and rewards claim timeline:
 * A new epoch starts Thursday (00:00 UTC)
 * Bribes are deposited at any point in the epoch
 * Voters vote for their preferred pools
 * Once the next epoch arrives (the following Thursday), users are able to claim rewards from the UI or the corresponding `WrappedExternalBribe` contract

<Bleed>
  <Chart
    chartType="Timeline"
    data={[
      [
        { type: "string", id: "Voting Round" },
        { type: "string", id: "Action" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
      ],
      ["Round #1", "Bribes Deposited, Votes Cast", new Date(2022, 5, 2), new Date(2022, 5, 8, 23, 59)],
      ["Round #1", "Rewards Claimable", new Date(2022, 5, 9), new Date(2022, 5, 30)],

      ["Round #2", "Bribes Deposited, Votes Cast", new Date(2022, 5, 9), new Date(2022, 5, 15, 23, 59)],
      ["Round #2", "Rewards Claimable", new Date(2022, 5, 16), new Date(2022, 5, 30)],

      ["Round #3", "Bribes Deposited, Votes Cast", new Date(2022, 5, 16), new Date(2022, 5, 22, 23, 59)],
      ["Round #3", "Rewards Claimable", new Date(2022, 5, 23), new Date(2022, 5, 30)],
    ]}
    options={{
      title: "Bribing, Voting and Rewards Timeline",
      legend: { position: 'top'},
      colors: [
        '#79F8DB', '#2180DF', '#EA1000', '#871000', '#59BFD8', '#0281FF',
        '#FBBF42', '#EDE7DB'
      ],
    }}
    width={"100%"}
  />
</Bleed>

## Whitelisting

While Velocimeter supports permissionless liquidity pool. Gauge creation can
only include _whitelisted_ tokens. Part of the partner onboarding program will include whitelisting of their tokens where needed.

Partners can request additional tokens to be _whitelisted_. 
There is a complete list of all the whitelisted tokens in the [Gauges Section](/gauges)


## Council of Velocimetry

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the Council of Velocimetry (similar to the Curve.Finance _Emergency DAO_)
will have the right to disable hostile gauges.

An example of a hostile gauge would be one that has two tokens that cannot be obtained public via any route either inside Velocimeter or in other protocols. 

The Council of Velocimetry will initially consist of members from the Velocimeter team but community members will be recruited to bolster this role.
