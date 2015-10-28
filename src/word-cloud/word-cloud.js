/**********************************************************************************************************************
 * Write code that takes a long string and builds its word cloud data in a hash map, 
 * where the keys are words and the values are the number of times the words occured.
 */
function wordCloud( str )
{	
	var map = {};

	/* actually performs the work of adding the words to the hash map */
	var addWordsToMap = function()
	{
		var len = str.length;
		var word = '';
		for ( var i = 0; i < len; i++ )
		{
			if ( isLetter( str[i] ) ) {
				word += str[i];
			}
			else {

				word = word.lower();
				/* increment count or add word for the first time */
				if ( map[word] ) {
					map[word]++;
				}
				else {
					map[word] = 1;
				}
				word = '';
			}
		}
	};

	/* function to determine if a character is part of a word */
	var isLetter = function( character )
	{
		var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-\''; // hyphenated words and apostrophes count
		return letters.includes( character );
	};
}