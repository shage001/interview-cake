/**********************************************************************************************************************
 * Write an efficient function that checks whether any permutation of an input string is a palindrome.
 */
function palindrome( str )
{
	var table = {};
	/* store each letter of the string in a hash table */
	/* true for even number of appearances, false for odd */
	for ( letter in str )
	{
		if ( table[letter] !== undefined ) {
			table[letter.charCodeAt(0)] = !table[letter.charCodeAt(0)];
		}
		else {
			table[letter.charCodeAt(0)] = false;
		}
	}
	/* check for at most one odd-numbered letter */
	var odd = false;
	for ( item in Object.keys( table ) )
	{
		if ( !table[item] ) { // this is an odd-numbered letter
			if ( odd ) { // already seen an odd-numbered so we're in trouble
				return false;
			}
			else { // first odd-numbered
				odd = true;
			}
		}
	}
	return true;
}