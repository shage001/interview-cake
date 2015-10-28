def riffle_check( deck, half1, half2 ):
	"""
	**********************************************************************************************************************
	I figured out how to get rich: online poker.
	I suspect the online poker game I'm playing shuffles cards by doing a single "riffle."
	
	To prove this, let's write a function to tell us if a full deck of cards shuffled_deck is a single 
	riffle of two other halves half1 and half2.
	
	We'll represent a stack of cards as an array of integers in the range 1..52 
	(since there are 5252 distinct cards in a deck).
	
	Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more
	informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy 
	cake obsession" (even though it's too late now because she let me go and she's never getting me back).
	"""