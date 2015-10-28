/**********************************************************************************************************************
 * I figured out how to get rich: online poker.
 * I suspect the online poker game I'm playing shuffles cards by doing a single "riffle."
 * 
 * To prove this, let's write a function to tell us if a full deck of cards shuffled_deck is a single 
 * riffle of two other halves half1 and half2.
 * 
 * We'll represent a stack of cards as an array of integers in the range 1..52 
 * (since there are 5252 distinct cards in a deck).
 * 
 * Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more
 * informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy 
 * cake obsession" (even though it's too late now because she let me go and she's never getting me back).
 */
function riffleCheck( deck, half1, half2 )
{
	deckPointer = 0;
	half1Pointer = 0;
	half2Pointer = 0;

	while ( deckPointer < 52 )
	{
		var curCard = deck[deckPointer];
		if ( half1[half1Pointer] && curCard === half1[half1Pointer] ) { // card is from the first half
			half1Pointer++;
		}
		else if ( half2[half2Pointer] && curCard === half2[half2Pointer] ) { // card is from the second half
			half2Pointer++;
		}
		else { // card doesn't match either or one of the halves is empty
			return false;
		}
		deckPointer++;
	}
	return true;
}