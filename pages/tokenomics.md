import Bleed from 'nextra-theme-docs/bleed'
import { Chart } from "react-google-charts";

<Bleed>
  ![Velodrome Finance Tokenomics](/velodrome_tokenomics_hero.jpg)
</Bleed>

&nbsp;

# Tokenomics

Velodrome Finance uses two tokens to manage its utility and governance:

 * `$VELO` &mdash; ERC-20 utility token of the protocol
 * `$veVELO` &mdash; ERC-721 governance token in the form of an NFT
   (non-fungible token)

`$VELO` is used for rewarding liquidity providers through emissions.

`$veVELO` is used for governance. Any `$VELO` holder can vote-escrow their tokens and
receive a `$veVELO` (also known as veNFT) in exchange. Additional tokens can be
added to the `$veVELO` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:
 * 100 `$VELO` locked for 4 years will become 100 `$veVELO`
 * 100 `$VELO` locked for 1 year will become 25 `$veVELO`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `$veVELO` holder receives.

## ve(3,3) Mechanics

Velodrome Finance mechanics reflect a combination of two DeFi concepts:
 * Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
 * Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velodrome's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `$VELO` emissions,
and `$veVELO` holders receive protocol fees, bribes, rebases, and governance power.

Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most valuable of the ecosystem
liquidity pools.

## Initial Distribution

Upon launch we will kick off with an airdrop of `$VELO` and `$veVELO` for
users and protocols we believe are likeliest to contribute to our
mission to become the liquidity base layer of the Optimism ecosystem.

To see if you qualify for the airdrop, check https://velodrome.finance

The distribution will be meaningful but will also leave enough room for new
players to join and capture voting share through emissions and/or
token acquisition.

This should also ensure that Velodrome Finance as a protocol is able to
successfully bootstrap and retain a team for its own success.

### Distribution

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Community", 240 ],
      [ "Partner Protocol/DAOs", 96 ],
      [ "Velodrome Team", 40 ],
      [ "Optimism Team", 20 ],
      [ "Genesis Liquidity Pool", 4 ]
    ]}
    options={{
      title: "$VELO Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#79F8DB', '#027FFF', '#F1EBE2', '#FF1301', '#871000', '#FBBF42', '#EDE7DB'],
      legend: {textStyle: {color: 'white'}},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

### Community

An airdrop of 240M (60%) `$VELO` tokens will be distributed to the people who have played the biggest role in
incubating Velodrome and those likeliest to contribute to its long-term
success, including:
 * `$WEVE` holders (27%, 108M `$VELO`)
 * `$OP` network users (18%, 72M `$VELO`)
 * Cross-chain DeFi users (15%, 60M `$VELO`):
   * 3500 `$VELO`/wallet &mdash; Curve Protocol wallets with 1450+ days (maximum) lock time
   * 3000 `$VELO`/wallet &mdash; Convex Protocol all `$vlCVX` lockers since new lock contract deployment
   * 3000 `$VELO`/wallet &mdash; Treasure DAO Genesis Mine `$MAGIC` stakers for 1- and 3-month periods
   * 2000 `$VELO`/wallet &mdash; Platypus Protocol `$vePTP` stakers
   * 500 `$VELO`/wallet &mdash; Redacted Cartel participants in the launch of the Dutch auction who held their `$BTRFLY`
   * 500 `$VELO`/wallet &mdash; Eminence Finance-affected wallets

### Protocols

We will consider a variety of metrics in assessing the available protocols,
including TVL, transaction volume, unique wallets, and Optimism team input.

The airdrop of 72M (18%) `$veVELO` is aimed at attracting and engaging 10-15 protocols most
likely to contribute to Velodrome and Optimism's long-term success.

The amount of `$veVELO` airdropped will provide just enough voting power to familiarize
the protocols with the ecosystem and give them a head start, but it will leave space
for the protocols to accrue value by acquiring `$VELO` for long-term liquidity provision.

### Grants

We have reserved 24M (6%) `$veVELO` to distribute to partner protocols
after the launch. This will be used to engage partners in the ecosystem through
grants.

### Team

The team will receive an initial allocation that it will use to vote
to drive emissions to key protocol pairs such as `$VELO-$USDC` and to support
ongoing protocol development. The total team allocation is 40M (10%) in `$VELO` and `$veVELO`.

The team will vest 25% of its initial allocation in the form of a
`$veVELO` and use it to vote for `$VELO` pairs in perpetuity.

While a fully autonomous and immutable protocol is an admirable objective, it
comes at a cost. Velodrome Finance will ensure its long-term sustainability by
employing a dedicated team focused on supporting the product, documentation,
community, and ecosystem. As the protocol evolves, the Velodrome team will
consider introducing more immutability or DAO components where appropriate.

The team vesting compensation breakdown:
 * 15,520,816 `$VELO` vesting for 12 months, 6-month lock in a `$veVELO` followed
   by a linear 6-month unlock period. 0.5% of total emissions, taken from
   emissions to treasury, will be added to this bucket for dilution control.
 * 7,200,000 `$VELO` vesting for 24 months, 12-month lock in a `$veVELO` followed
   by a linear 12-month unlock period.
 * All ongoing payments made to the team members in `$VELO` will vest for 6
   months, 3-month lock in a `$veVELO` followed by a linear 3-month unlock period.

### Optimism Team

The Optimism team has a vested interest in ensuring that Velodrome achieves its
mission of serving as an ecosystem public good. The team will receive 20M (5%) `$veVELO` in the initial
distribution, to support that interest.

### Genesis Liquidity Pools

Genesis Pools will distribute 4M (1%) `$VELO` to liquidity providers of foundational token pairs to
provide better liquidity and user experience from launch day. Genesis emissions will begin
a few days before the first epoch votes are counted and LP emissions start.

Genesis pairs will include `$VELO`, `$OP`, `$USDC`, and `$ETH`.

## Emissions

The initial supply of `$VELO` is 400M.

Weekly emissions start at 15M `$VELO` (3.75% of the initial supply)
and decay at 1% per week (epoch).

`$veVELO` holders receive a rebase proportional to epoch LP emissions
and the ratio of `$veVELO` to `$VELO` supply, thus reducing vote power
dilution for `$veVELO`!

The weekly rebase amount is calculated with the following formula:
> (veVELO.totalSupply ÷ VELO.totalsupply)³ × 0.5 × Emissions

`$veVELO` supply does not affect weekly LP emissions.

### Emission Schedule

<Bleed>
  <Chart
    chartType="LineChart"
    data={[
      ["Weeks", "LP Emissions", "veRebase (@50% locking rate)", "Total Supply"],
      ["1", 15, 0, 400],
      ["50", 12, 2, 1000],
      ["100", 10, 1.5, 1500],
      ["150", 5, 1, 1700],
      ["200", 2, 0.5, 2000]
    ]}
    options={{
      title: "$VELO Emissions (M)",
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
        0: { title: "Epoch Distribution", titleTextStyle: { color: 'white' }},
      hAxis: {title: "Week", titleTextStyle: { color: 'white' }},
      },
      backgroundColor: '#111111',
      lineWidth: 5,
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#59BFD8', '#0281FF'],
      legend: {textStyle: {color: 'white'}},
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Gauge Voting

`$veVELO` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `$VELO` tokens will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive the trading fees and bribes collected through the liquidity pool they
vote for.

## Bribes

In addition to the fees, liquidity pools allow external rewards from anyone
(known as _bribes_). These bribes are distributed only to the voters on the
incentivized pool proportionally to the votes they cast.

The bribes can be added in each epoch to _whitelisted_ tokens, before any voting is
done. Bribes can be collected 24–48 hours after votes are cast (snapshot is taken).

Rewards not collected will accrue to future epochs.

Below is an example of bribes, voting, and rewards claim timeline:
 * Bribes are deposited from Saturday &mdash; Thursday
 * Votes are collected on Friday
 * A snapshot is taken at the end of Friday (11:59 UTC)
 * Rewards claim is available 24–48 hours after the snapshot

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
      ["Round #1", "Bribes", new Date(2022, 5, 4), new Date(2022, 5, 9, 11, 59)],
      ["Round #1", "Votes", new Date(2022, 5, 9, 12, 0), new Date(2022, 5, 10, 11, 59)],
      ["Round #1", "Snapshot", new Date(2022, 5, 10, 11, 59), new Date(2022, 5, 11)],
      ["Round #1", "Rewards Distributed", new Date(2022, 5, 11), new Date(2022, 5, 12)],

      ["Round #2", "Bribes", new Date(2022, 5, 11), new Date(2022, 5, 16, 11, 59)],
      ["Round #2", "Votes", new Date(2022, 5, 16, 12, 0), new Date(2022, 5, 17, 11, 59)],
      ["Round #2", "Snapshot", new Date(2022, 5, 17, 11, 59), new Date(2022, 5, 18)],
      ["Round #2", "Rewards Distributed", new Date(2022, 5, 18), new Date(2022, 5, 19)],

      ["Round #3", "Bribes", new Date(2022, 5, 17), new Date(2022, 5, 23, 11, 59)],
      ["Round #3", "Votes", new Date(2022, 5, 23, 12, 0), new Date(2022, 5, 24, 11, 59)],
      ["Round #3", "Snapshot", new Date(2022, 5, 24, 11, 59), new Date(2022, 5, 25)],
      ["Round #3", "Rewards Distributed", new Date(2022, 5, 25), new Date(2022, 5, 26)],
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

While Velodrome supports permissionless liquidity pool and gauge creation, these can
only include _whitelisted_ tokens. The protocol will launch with an extensive list of
pre-whitelisted tokens, including those from partner protocols.

Any `$veVELO` holder with 0.1% or more `$veVELO` supply can request additional tokens by
creating a _whitelist_ gauge. `$veVELO` voters will vote to approve or reject
the proposed request.

This process is necessary to avoid situations where a holder of 100% supply of
a token receives 100% emissions for the same liquidity pool.

By default, a request is approved if the quorum (majority of the circulating `$veVELO`) is not met.

## Commissaire

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the Commissaire (a Curve-esque _Emergency DAO_)
will have the right to disable hostile gauges or vote down whitelisting requests.

The Commissaire will initially consist of seven members from the Velodrome team and
prominent figures from within the Optimism community.
