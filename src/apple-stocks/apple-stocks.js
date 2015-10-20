/**********************************************************************************************************************
 * Suppose we could access yesterday's stock prices as an array, where:
 *
 *	- The indices are the time in minutes past trade opening time, which was 9:30am local time.
 *	- The values are the price in dollars of Apple stock at that time.
 *	
 *	For example, if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
 *
 *	Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 *	No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
 */
function maxProfit( stockPricesYesterday )
{
	// have to buy before we can sell
	var buyPrice = stockPricesYesterday[0];
	var sellPrice = stockPricesYesterday[1];
	var bestProfit = sellPrice - buyPrice;
	var len = stockPricesYesterday.length;

	for ( var i = 0; i < len; i++ )
	{
		// skip first two
		if ( i < 2 ) {
			continue;
		}
		// update best profit if current is better
		var curPrice = stockPricesYesterday[i];
		var potentialProfit = curPrice - buyPrice;
		if ( potentialProfit > bestProfit ) {
			sellPrice = curPrice;
		}
		// update buying price if current is better
		else if ( curPrice < buyPrice ) {
			buyPrice = curPrice;
		}
		bestProfit = sellPrice - buyPrice;
	}
	return bestProfit;
}