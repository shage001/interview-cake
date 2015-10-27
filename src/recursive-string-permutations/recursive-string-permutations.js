/**********************************************************************************************************************
 * Write a recursive function for generating all permutations of an input string. Return them as an array.
 * Don't worry about duplicates—assume every character is unique.
 */
function stringPermutations( str )
{
	if ( str.length < 2 ) {
		return [str];
	}
	else {

		var firstChar = str[0];
		var rest = str.slice( 1 );

		/* get all permutations on smaller string */
		var previousPermutations = stringPermutations( rest );
		var permutations = [];
		
		/* for every string in permutations add the first letter at all positions */
		for ( word in previousPermutations ) 
		{
			var len = word.length;
			for ( var i = 0; i <= len; i++ )
			{
				var newPermutation = word.slice( 0, i ) + firstChar + word.slice( i );
				permutations.push( newPermutation );
				console.log( newPermutation );
			}
		}
		return permutations;
	}
}