import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'
import { Chart } from "react-google-charts";

<Bleed>
  ![Velocimeter Launch](/Velocimeter_banner.jpg)
</Bleed>

&nbsp;

# Launch Details

Velocimeter launched on Thursday, June 2, 2022.

<Callout type="warning" emoji="⚠️">
  As with any launch, we'd like to warn our users about the potential limitations
  of the first release. At launch, our dApp will render best in
  **desktop environments**.
  
  If at any point you require assistance, please join our
  [Discord](https://discord.gg/eGgYPGczaf), where our community and we will be
  happy to help you!
</Callout>

## Getting Ready

Velocimeter operates exclusively on the Optimism network (a
layer 2 of the Ethereum main network that uses Optimistic Rollups).

If you are unfamiliar with Optimism, you can find a lot of resources
about the network, its ecosystem, and its mission on the Optimism website
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

New Optimism users who want to participate in Velocimeter should make sure they
have `$ETH` on Optimism in order to be able to pay for transaction/gas fees.

Bridging to Optimism is possible here: https://app.optimism.io/bridge

If you're bridging from a network other than the Ethereum network, we recommend the
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

Here's a walkthrough for how to use the Optimism Bridge on mobile:

<Bleed>
  <iframe width="100%" height="800"
  src="https://www.youtube.com/embed/pR31stuRejg?rel=0" frameborder="0"></iframe>
</Bleed>

## A message to the veDAO community

The members of the veDAO core team learned a tremendous amount about `ve(3,3)`
mechanics after receiving the 4th largest `$veNFT` in what's come to be called the
_Solidly Wars_.

This experience resulted in a veDAO governance proposal, which passed, directing the
team to seek opportunities outside of accruing Solidly vote share on the Fantom
network.

The veDAO core team incubated Velocimeter in accordance with DAO
governance principles for the benefit of the DAO. veDAO's final governance act was to make
good on this promise, distributing accumulated treasury in `$USDC` and `$VELO`
tokens to `$WEVE` holders.

The veDAO community stuck with us through a seemingly impossible number of
surprises, challenges, and disappointments. They're friends, allies, and, in
some cases, central team members. Everything we do with Velocimeter from here is
rooted in our shared experience.

We believe that the veDAO members will be valuable, enthusiastic additions to
the Optimism community in the coming weeks and will be instrumental in the long-term
success of Velocimeter.

### Burning `$WEVE`

The redemption process uses [LayerZero](https://layerzero.network/) for a
seamless experience. The process will burn user-provided `$WEVE` tokens on the
Fantom network and will send `$USDC` and `$VELO` on the Optimism network.

The tokens will be sent to the same address, as with any bridging experience.

The `$WEVE` bridging service will be available at https://weve.Velocimeter.finance
on May 31st and will be available until the 30th of June. Unclaimed `$USDC` and `$VELO` will
be transferred back into the treasury.

### Burning via Block Explorer

NOTE: There is currently a small UI issue with this process. TLDR the frontend is overestimating the amount of WeVE a user has to burn, which causes the contract call to fail.

Below are the steps you'll need to take in order to burn from the block explorer:

1. **Figure out how much WeVE you have to burn.** Go to https://ftmscan.com/address/0x911da02c1232a3c3e1418b834a311921143b04d7#readContract and navigate to Function #2, balanceOf. Enter in your address "0xabcd..." and click Query. Copy that value.
2. **Burn WeVE.** Navigate to the RedemptionSender (https://ftmscan.com/address/0x9809fB94eED086F9529df00d6f125Bf25Ee84A93#writeContract). NOTE Please double, triple check that this is the right address. Then enter the following arguments for Function #1, redeemWEVE

*redeemWEVE*: 30 (note that this value changes as gas on Optimism increases/decreases. Any leftover unused gas will be refunded by LayerZero)

*amount*: ANY value less than your balance found in Step 1

*zroPaymentAddress*: 0x0000000000000000000000000000000000000000

*zroTransactionParams*: 0x

Then click "Write" and your transaction should be good to go!

### Initial Distribution

Velocimeter will launch with initial distribution of 400M VELO airdropped to
DeFi community members, protocols, and DAOs likeliest to play an active role in the Optimism
ecosystem.

Details of the initial distribution and token emissinos are available in the
[Initial Distribution section of the Tokenomics](/tokenomics#initial-distribution).
