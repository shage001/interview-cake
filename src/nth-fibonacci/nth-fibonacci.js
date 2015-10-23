/**********************************************************************************************************************
 * Write a function fib() that a takes an integer n and returns the nth fibonacci number.
 */
function fib( n )
{
	if ( n < 0 ) {
		throw new Error( 'Number cannot be negative' );
		return;
	}
	if ( n < 2 ) {
		return n;
	}
	var prev = 1;
	var prev_prev = 0;
	for ( var i = 0; i < n; i++ )
	{
		var current = prev + prev_prev;
		prev_prev = prev;
		prev = current;
	}
	return current;
}