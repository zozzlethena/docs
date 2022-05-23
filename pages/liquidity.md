# Liquidity Pools

The core functionality of Velodrome Finance is to allow users to trade
digital assets in a secure way, with very low fees and low slippage.

The slippage is the difference between the current market price of an asset and
the price at which the actual trade/transaction is executed. This difference
could result in a smaller (higher price paid) or higher (smaller price paid)
amount of desired tokens returned from a trade.

To provide access to best rates on the market we identified two types of assets:
 * correlated - think of _stable coins_ like `$USDC` and `$DAI`
 * uncorrelated - think of `$LINK` and `$CRV`

Based on these two types, we provide two different liquidity pool types. These
pools use different mathematical formulas and are used by our router for
price quotations and execution of the actual trades.

The _deeper_ the liquidity of the pools (the larger the amount of
assets is in the liquidity pools), the smaller will be the slippage.

The router was also designed to route through both, stable and volatile pools
when trading pairs of assets, it does not need _upkeep_ (external maintenance)
and uses 30 minutes TWAPs (time-weighted average prices) which makes it
resistant to flash-loan attacks.

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
