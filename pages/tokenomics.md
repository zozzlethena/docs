import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

# Tokenomics

<Bleed>
<div align="center">
  ![The FLOW Token](/Flow-circle-aqua.png)
</div>
</Bleed>

&nbsp;

Velocimeter uses two tokens to manage its utility and governance:

- `FLOW` &mdash; ERC-20 utility token of the protocol
- `veFLOW` &mdash; ERC-721 governance token in the form of an NFT
  (non-fungible token)

`FLOW` is used for rewarding liquidity providers through emissions.

`veFLOW` is used for governance. Any `FLOW` holder can vote-escrow their tokens and
receive a `veFLOW` (also known as veNFT) in exchange. Additional tokens can be
added to the `veFLOW` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:

- 100 `FLOW` locked for 4 years will become 100 `veFLOW`
- 100 `FLOW` locked for 1 year will become 25 `veFLOW`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `veFLOW` holder receives.

## ve(3,3) Mechanics

Velocimeter mechanics reflect a combination of two DeFi concepts:

- Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
- Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velocimeter's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `FLOW` emissions,
and `veFLOW` holders receive protocol fees, bribes, rebases, and governance power.


Below, we will walk through the components of the mechanism in order to
explain how it helps the incentives flow to the most ideal liquidity pools.

## Initial Distribution for Canto

At launch 630M `FLOW` were minted. 
### Locked As NFTs
470M `FLOW` were locked for 4 years in `veFLOW` of various sizes. 1M, 4M, 6M These veNFT are described below. 
* 60M of 470M were allocated for Velocimeter (PONFT)
* 112M of 470M were allocated for the team
* 298M of 470M are allocated for project partners and public sales

### Loose tokens
* ~90M `FLOW` Tokens were pre-minted for the gauges and this current balance can be seen [here](https://evm.explorer.canto.io/address/0x0cEd59FF9BDe47b2F5F0EDD2FdFfA6a0116d91Cd)
* ~70M `FLOW` Token were left loose for adding to initial liquidity, bribes, Community veFLOW boosts, adding to POL

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Protocol Owned NFT", 60 ],
      [ "Velocimeter Team", 112],
      [ "Partner Protocol/DAOs", 298],
      [ "Gauge Premint", 90],
      [ "Protocol FLOW Fund", 70]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#58FF33', '#43CD24', '#37A220', '#297818', '#CCFF2C' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
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






