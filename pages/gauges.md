# Gauges
As mentioned in protocol overview, in order to get an active gauge, a token requires whitelisting. Partners will all have various gauges for the tokens of their ecosystems on a token by token based consideration. Other "core" tokens (wETH, wBTC...) may also have gauges setup at the discretion of the team. 

# Fees and Gauges
Velocimeter takes the trading fees of liquidity pools with gauges and sends them
as external bribes for that respective pool. `USDC` and `FLOW` trading fees directly bribe upcoming
voters to direct their votes to the `USDC:FLOW` pool. Velocimeter believes this creates a much better
voting experience as voters clearly can see what they will get, rather than wait to see what trading fees
they happen to accumulate in the week following their vote. Get your votes in before the epoch clock flips.

# Fees and Gauge-less LPs
Trading fees from LPs that are not granted gauges are sent to the treasury. Velocimeter found this to be best for the protocol as it was found that some projects could
make trading pairs, avoid the gauge application process, and get the benefit of the protocol without returning any benefit. Once a gauge it produced, all fees going forward will be sent as bribe to voters. Because of this, it is recommended that projects attempt to follow the directions above.


# Future Partners

At Genesis, we have whitelisted our genesis partners, however we do hold in reserve `veFLOW` NFTs for future partner protocols. Negotiations with potential projects will distinguish how they can get an veNFT. That being said, some ideas of the type of requirement for future partners would be:

* a requirement to bribe some gauges, their own or core.
* a token swap
* integrations
* marketing campaigns


# Future Gauges
On the Velocimeter road map some ideas to introduce new gauge types exist. At this time, we are not ready to share any of them, but will if and when new code is ready.

