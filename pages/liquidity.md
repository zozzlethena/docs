import Bleed from 'nextra-theme-docs/bleed'

<Bleed>
  ![Velodrome Finance Launch](/velodrome_biker_hero.png)
</Bleed>

&nbsp;

# Liquidity Pools

The core functionality of Velodrome Finance is to allow users to trade
digital assets in a secure way, with very low fees and low slippage.

The slippage is the difference between the current market price of an asset and
the price at which the actual trade/transaction is executed. This difference
could result in a smaller (higher price paid) or higher (smaller price paid)
amount of desired tokens returned from a trade.

To provide access to best rates on the market we identified two types of assets:
 * correlated - for example _stable coins_ (`$USDC`, `$DAI`, etc.)
 * uncorrelated - for example `$LINK` and `$CRV`

Velodrome offers two different liquidity pool types based on token pair needs, _Stable 
Pools_ and _Votalite Pools_. 

The protocol router evaluates both pool types to determine the most efficient price quotation 
and trade execution route available. To protect against flash-loan attacks, the router will use 
30 minutes TWAPs (time-weighted average prices). The router doesn't require _upkeep_ (external maintenance).

## Stable Pools

Stable pools are designed to be used for assets which have little to no
volatility. This means that the formula used for pricing the assets allows
low slippage even on large traded volumes.

> x3y + y3x ≥ k


## Variable Pools

Variable pools are designed to be used for assets with high price volatility.
These pools use a generic AMM formula.

> x × y ≥ k

## A visual representation of the formulas

The formulas are used to keep the total pool liquidity always the same.

Below you can find a visual comparison, where:
 * `x` is the amount of first asset in the pool
 * `y` is the amount of second asset in the same pool
 * `k` is a fixed constant

&nbsp;

<iframe src="https://www.desmos.com/calculator/vri2vhdgbv?embed" width="100%" height="700"></iframe>

The new stable pool curve quoting is also available:

&nbsp;

<iframe src="https://www.desmos.com/calculator/fih9bpvmzq?embed" width="100%" height="700"></iframe>

The _deeper_ the liquidity of a given pool (higher value locked), the smaller the slippage it will offer.
