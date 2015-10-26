/**********************************************************************************************************************
 * Your team is scrambling to decipher a recent message, worried it's a plot to break into a major 
 * European National Cake Vault. The message has been mostly deciphered, but all the words are backwards!
 * Your colleagues have handed off the last step to you.
 *
 * Write a function reverse_words() that takes a string message and reverses the order of the words in place.
 */
function reverseWords( message )
{
	var chars = message.split(); // strings are immutable, so we'll fake it
	var len = chars.length;
	/* reverse all characters with reverseString(). this will order the words correctly, but they'll be backwards */
	chars = reverseString( message, 0, len - 1 );

	/* call reverseString() on each word to correct it */
	var wordStart = 0;
	for ( var i = 0; i < len; i++ )
	{
		if ( chars[i] === ' ' || chars[i] === len ) {
			chars = reverseString( chars.join(), wordStart, i - 1 );
		}
		wordStart = i + 1;
	}
	return chars.join();
}

/**********************************************************************************************************************
 * Helper function for reverseWords()
 */
function reverseString( str, i, j )
{
	var chars = str.split(); // strings are immutable, so we'll fake it
	while ( i < j )
	{
		var temp = chars[i];
		chars[i] = chars[j];
		chars[j] = temp;
		i++;
		j--;
	}
	return chars;
}