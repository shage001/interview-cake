/**********************************************************************************************************************
 * Let's say:
 *
 * '(', '{', '[' are called "openers."
 * ')', '}', ']' are called "closers."
 *
 * Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
 * 
 * Examples:
 * 
 * "{ [ ] ( ) }" should return True
 * "{ [ ( ] ) }" should return False
 * "{ [ }" should return False
 */
function bracketValidator( str )
{
	/* we only care about bracket characters */
	var openers = [ '(', '[', '{' ];
	var closers = [ '}', ']', ')' ];
	var correspondance = {
		'(' : ')',
		'{' : '}',
		'[' : ']'
	};
	var len = str.length;
	var stack = [];
	/* iterate through the string - if we see an opener, push onto stack */
	/* if we see a closer, check for it's counterpart on the top of the stack */
	for ( var i = 0; i < len; i++ )
	{
		if ( openers.includes( str[i] ) ) {
			stack.unshift( str[i] );
		}
		if ( closers.includes( str[i] ) ) {
			var match = stack.shift();
			/* closer doesn't match opener or stack is empty */
			if ( !match || correspondance[match] !== str[i] ) {
				return false;
			}
		}
	}
	/* make sure everything has a match */
	return stack.length === 0;
}