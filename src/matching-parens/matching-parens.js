/**********************************************************************************************************************
 * Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, 
 * finds the corresponding closing parenthesis.
 *
 * Example: if the example string above is input with the number 10 (position of the first parenthesis), the output 
 * should be 79 (position of the last parenthesis).
 */
function matchingParens( str, firstParen )
{
	var len = str.length;
	if ( firstParen > len ) {
		throw new Error( "Index of first parenthesis is out of range" );
	}
	/* iterate through string keeping a count of opening parens */
	var numParens = 1;
	for ( var i = firstParen; i < len; i++ )
	{
		/* increment for opening parens */
		if ( str[i] === '(' ) {
			numParens++;
		}
		/* decrement for closing parens */
		if ( str[i] === ')' ) {
			numParens--;
		}
		/* if 0, we've found a match */
		if ( numParens === 0 ) {
			return i;
		}
	}
	return "No matching parenthesis found";
}