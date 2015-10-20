def max_profit( stock_prices_yesterday ):
	"""
	**********************************************************************************************************************
	Suppose we could access yesterday's stock prices as an array, where:

	- The indices are the time in minutes past trade opening time, which was 9:30am local time.
	- The values are the price in dollars of Apple stock at that time.
	
	For example, if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

	Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

	No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
	"""
	# have to buy before we can sell
	buy_price = stock_prices_yesterday[0]
	sell_price = stock_prices_yesterday[1]
	best_profit = sell_price - buy_price
	i = 0

	for price in stock_prices_yesterday:

		# skip first two
		if i < 2:
			i += 1
			pass

		# update best profit if it's current potential is higher
		potential_profit = price - buy_price
		if potential_profit > best_profit:
			sell_price = price
		
		# always want a lower buying price
		elif price < buy_price:
			buy_price = price

		# update best_profit
		best_profit = sell_price - buy_price

	return best_profit