/**********************************************************************************************************************
 * Write a function to reverse a string in place.
 */
function reverseStringInPlace( str )
{
	/* split string into char arrays since strings are immutable */
	var chars = str.split();
	var len = str.length;
	var i = 0;
	var j = len - 1;
	/* swap first and last chars, second and second to last, etc. */
	while ( i < j )
	{
		var temp = chars[j];
		chars[j] = chars[i];
		chars[i] = temp;
	}
	return chars.join();
}