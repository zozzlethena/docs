import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Velodrome Finance Launch](/velodrome_banner.jpg)
</Bleed>

&nbsp;

# Launch Details

Velodrome is launching on Monday, May 30th!

<Callout type="warning" emoji="⚠️">
  As with any launch, we'd like to warn our users about potential limitations
  with the first release. At launch, our dApp will render best in
  **desktop environments**.

  We anticipate having a mobile-optimized version of the dApp in future
  updates. Other functionality might not be fully optimized (e.g., error
  messages).

  If at any point you require assistance, please join our
  [Discord](https://discord.gg/bqzYruhX), where our community and we will be
  happy to help you!

  Thank you in advance for being patient with us as we progress through all
  the iterations in order to deliver a flawless and beautiful product.
</Callout>

## Getting Ready

Velodrome Finance is exclusively operating on the Optimism network (a
layer 2 of the Ethereum main network that uses Optimistic Rollups).

If you are unfamiliar with Optimism, you can find a lot of resources
about the network, its ecosystem, and its mission on their website
https://www.optimism.io

To set up your wallet, please go to https://chainlist.org and search for
_Optimism_. You can use the _Connect Wallet_ button to automatically configure
your default wallet to use Optimism. Use the _arrow down_ to expand for more
configuration options.

<Callout  emoji="🪂">
  Be sure to learn about the [Optimism
  Collective](https://app.optimism.io/governance) and see if you qualify for an
  OP token airdrop!
</Callout>

## Bridging

New Optimism users who want to participate in Velodrome should make sure they
have `$ETH` on Optimism in order to be able to pay for transaction/gas fees.

Bridging to Optimism is possible here: https://app.optimism.io/bridge

If you're bridging from a network other than Ethereum network, we recommend the
following services:
* https://stargate.finance/transfer &mdash; a multi-network bridge for stable
   coins
* https://www.bungee.exchange &mdash; an aggregator that shows the best
   available bridging options. Use their _Refuel_ service to deposit smaller
   amounts in case you run out of `$ETH` to pay transaction fees.
 * https://www.optimism.io/apps/bridges &mdash; for a full list of Optimism
   network bridging services.

<Callout emoji="⚠️">
  Some bridging services can take up to 20-30 minutes to complete a transfer of
  the assets.
</Callout>

Here's a walkthrough on how to use the Optimism Bridge on mobile:

<Bleed>
  <iframe width="100%" height="800"
  src="https://www.youtube.com/embed/pR31stuRejg?rel=0" frameborder="0"></iframe>
</Bleed>

## A message to the veDAO community

The members of the veDAO core team learned a tremendous amount about `ve(3,3)`
mechanics after receiving the 4th largest `$veNFT` in what's come to be called the
_Solidly Wars_.

This experience resulted in a passed veDAO governance proposal directing the
team to seek opportunities outside accruing Solidly voteshare on Fantom
network.

The veDAO core team team incubated Velodrome in accordance with DAO
governance for the benefit of the DAO. veDAO's final governance act was to make
good on this promise, distributing accumulated treasury in `$USDC` and `$VELO`
tokens to `$WEVE` holders.

The veDAO community stuck with us through a seemingly impossible number of
surprises, challenges, and disappointments. They're friends, allies, and, in
some cases, central team members. Everything we do with Velodrome from here is
rooted in the shared experience we've all had.

We believe that the veDAO members will be valuable, enthusiastic additions to
the Optimism community in the coming weeks and be instrumental in the long-term
success of Velodrome.

### Burning `$WEVE`

The redemption process uses [LayerZero](https://layerzero.network/) for a
seamless experience. The process will burn user provided `$WEVE` tokens on
Fantom network and will send `$USDC` and `$VELO` on Optimism network.

The tokens will be sent to the same address, as it happens with any bridging
experience.

The `$WEVE` bridging service is available at https://weve.velodrome.finance

### Initial Distribution

The initial distribution breakdown is available in the [Initial Distribution
section of the Tokenomics](/tokenomics#initial-distribution).

Below you can find all the details and on which premises the distribution
occurred.

### Community

An airdrop of `$VELO` tokens for the people who have played the biggest role in
incubating Velodrome and those most likely to contribute to its long term
success, including:
 * `$WEVE` holders (see above)
 * `$OP` network users
 * Cross-chain DeFi users:
   * 3500 `$VELO`/wallet &mdash; Curve Protocol wallets with 1450+ days
     (maximum) lock time
   * 3000 `$VELO`/wallet &mdash; Convex Protocol all `$vlCVX` lockers since new
     lock contract deployment
   * 3000 `$VELO`/wallet &mdash; Treasure DAO Genesis Mine `$MAGIC` stakers for
     1 and 3 month periods
   * 2000 `$VELO`/wallet &mdash; Platypus Protocol `$vePTP` stakers
   * 500 `$VELO`/wallet &mdash; Redacted Cartel participants in launch dutch
     auction who held their `$BTRFLY`
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
