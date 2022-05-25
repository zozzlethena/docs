import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Velodrome Finance Launch](/velodrome_banner.jpg)
</Bleed>

&nbsp;

# Launch Details

Velodrome is launching on Monday, May 30th!

<Callout emoji="⚠️">
  As with any launch, we'd like to warn our users about potential limitations
  with the first releases. At launch, the Velodrome dApp will render best in **desktop environments**. 
  We anticipate having a mobile-optimized version of the dApp in future updates.
  Other functionality might not be fully
  optimized (e.g., error messages which are not easy
  to understand).

  If at any point you require assistance, please join our
  [Discord](https://discord.gg/bqzYruhX), where someone from the community will
  be happy to help you!

  Thank you in advance for being patient with us as we progress through all
  the iterations in order to deliver a flawless and beautiful product.
</Callout>

## Getting Ready

Velodrome Finance is exclusively operating on the Optimism network (a
layer 2 of the Ethereum main network that uses Optimistic Rollups). If you are
unfamiliar with Optimism, this may be a good time to familiarize yourself with
the network, which you can find at https://www.optimism.io

To set up your wallet, please go to https://chainlist.org and search for
_Optimism_. You can use the _Connect Wallet_ button to automatically configure
your default wallet to use Optimism. Use the _arrow down_ to expand for more
configuration options.

<Callout emoji="⚠️">
  Alpha Alert: Be sure to learn about the [Optimism Collective](https://app.optimism.io/governance) and see if you qualify for an OP token airdrop!
</Callout>

## Bridging

New Optimism users who want to participate in Velodrome should make sure they have `$ETH` on Optimism for gas fees. Bridging to Optimism is possible here: https://app.optimism.io/bridge

If you're bridging from a network other than Mainnet, we recommend the following services:
* https://stargate.finance/transfer &mdash; a multi-network bridge for stable
   coins
* https://www.bungee.exchange &mdash; an aggregator that shows the best
   available bridging options. Use their _Refuel_ service to deposit smaller
   amounts in case you run out of `$ETH` to pay fees.
 * https://www.optimism.io/apps/bridges &mdash; for a full list of Optimism
   network bridging services.

Here's a walkthrough on how to use the Optimism Bridge on mobile:

<Bleed>
  <iframe width="80%" height="800"
  src="https://www.youtube.com/embed/pR31stuRejg?rel=0"
  frameborder="0" allowfullscreen></iframe>
</Bleed>
 
 <Callout emoji="⚠️">
  Some bridging services can take up to 20-30 minutes to complete a transfer of
  the assets.
</Callout>


## A message to the veDAO community

Velodrome Finance was incubated within veDAO by many of its core members. We
believe that `$WEVE` holders from the community that have stuck with veDAO
during its many twists and turns have demonstrated that they will be very
valuable members of the Optimism community and instrumental in the long-term
success of Velodrome Finance.

To reward the `$WEVE` holders for their loyalty and commitment, `$WEVE` tokens
can be exchanged (burned) for `$VELO` tokens.

We believe that by encouraging the veDAO community to be part of the Velodrome
community, the new holders will play and remain an active part of the Optimism
community!

### Burning `$WEVE`

The redemption process uses [LayerZero](https://layerzero.network/) for a
seamless experience. The process will burn user provided `$WEVE` tokens on
Fantom network and will send `$USDC` and `$VELO` on Optimism network.

The tokens will be sent to the same address, as it happens with any bridging
experience.

The `$WEVE` bridging service is available at https://weve.velodrome.finance


## How to get VELO

Upon launch we will kick off with an airdrop of `$VELO` and `$veVELO` for
users and protocols we believe are most likely to contribute our
mission to become the liquidity base layer of the Optimism ecosystem.

Check to see if you qualify for the airdrop [HERE](https://www.velodrome.finance)

The distribution will be meaningful but will also leave enough room for new
players to join and capture a voting share through emissions and/or
token acquisition.

This should also ensure that Velodrome Finance as a protocol is able to
successfully bootstrap and retain a team for its own success.

### Initial Distribution (M VELO)

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "WEVE Holders", 108 ],
      [ "Cross-Chain DeFi Users", 60 ],
      [ "Optimism Active Users", 72 ],
      [ "Optimism Protocols/DAOs", 60 ],
      [ "Protocol Grants", 24 ],
      [ "Velodrome Team", 40 ],
      [ "Optimism Team", 20 ],
      [ "Genesis Liquidity Pool", 4 ]
    ]}
    options={{
      backgroundColor: '#111111',
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#871000', '#59BFD8', '#0281FF', '#FBBF42', '#EDE7DB'],
      legend: {position: 'bottom', textStyle: {color: 'white'}},
      pieHole: 0.4
    }}
    width={"80%"}
    height={"600px"}
  />
</Bleed>

### Community

An airdrop of `$VELO` tokens for the people who have played the biggest role in
incubating Velodrome and those most likely to contribute to its long term
success, including:
 * `$WEVE` holders (see above)
 * `$OP` network users 
 * Cross-chain DeFi users:
   * 3500 `$VELO`/wallet &mdash; Curve Protocol wallets with 1450+ days (maximum) lock time
   * 3000 `$VELO`/wallet &mdash; Convex Protocol all `$vlCVX` lockers since new lock contract deployment
   * 3000 `$VELO`/wallet &mdash; Treasure DAO Genesis Mine `$MAGIC` stakers for 1 and 3 month periods
   * 2000 `$VELO`/wallet &mdash; Platypus Protocol `$vePTP` stakers
   * 500 `$VELO`/wallet &mdash; Redacted Cartel participants in launch dutch auction who held their `$BTRFLY`
   * 500 `$VELO`/wallet &mdash; Eminence Finance affected wallets

### Protocols

We will consider a variety of metrics in assessing the available protocols,
including TVL, transaction volume, unique wallets, and just Optimism team input.

The airdrop is aimed at attracting and engaging 10-15 protocols most
likely to contribute to Velodrome and Optimism's long term success.

The airdropped amount as `$veVELO` will give just enough power to familiarize
the protocols with the ecosystem and get a head start, but it will leave space
for value to accrue from acquiring `$VELO` for long term liquidity provision.

### Grants

We reserved a certain amount of `$veVELO` to distribute to partner protocols
after the launch. This will be used to engage partners in the ecosystem through
grants.

### Team

The team will receive an initial allocation that it will use to vote
to drive emissions to key protocol pairs such as `$VELO-$USDC` and to support
ongoing protocol development.

The team will vest 25% of its initial allocation in the form of a
`$veVELO` and use it to vote for `$VELO` pairs in perpetuity.

While a fully autonomous and immutable protocol is an admirable objective, it
comes at a cost. Velodrome Finance will ensure its long-term sustainability by
employing a dedicated team focused on supporting the product, documentation,
community, and ecosystem. As the protocol evolves, the Velodrome team will
consider introducing more immutability or DAO components where appropriate.

Upcoming allocations are considered for:
 * The team to support a product roadmap beyond base-layer AMM
 * Key functions such as marketing, product support, and community management
 * Ability to govern key protocol parameters to drive optimal performance and
   liquidity to core protocol pairs (e.g., `$VELO-$USDC`).

### Genesis Pool

A genesis liquidity pool will be established to emit VELO to a few key pairs
(i.e., `$VELO-$USDC`) in the five day period before the epoch 1 votes begin.
