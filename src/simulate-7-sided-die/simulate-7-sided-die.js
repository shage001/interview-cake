/**********************************************************************************************************************
 * You have a function rand7() that generates a random integer from 1 to 7. Use it to write a 
 * function rand5() that generates a random integer from 1 to 5.
 *
 * rand7() returns each integer with equal probability. rand5() must also return each integer 
 * with equal probability.
 */
function rand7()
{
	var rand = ( rand5() - 1 ) * 5 + rand5();
	while ( rand > 21 )
	{
		rand = ( rand5() - 1 ) * 5 + rand5();
	}
	return rand % 7 + 1;
}