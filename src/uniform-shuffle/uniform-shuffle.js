/**********************************************************************************************************************
 * Write a function for doing an in-place shuffle of an array.
 * The shuffle must be "uniform," meaning each item in the original 
 * array must have the same probability of ending up in each spot in the final array.
 */
function shuffle( arr )
{
	/* pick a random element to go in the ith index from all (n-i) elements */
	var len = arr.length;
	for ( var i = 0; i < len; i++ )
	{
		var targetIndex = getRandom( i, len + 1 );
		var temp = arr[i];
		arr[i] = arr[targetIndex];
		arr[targetIndex] = temp;
	}
	return arr;
}

/* helper function for shuffle */
function getRandom( floor, ceiling )
{
	return Math.random() * ( ceiling - floor ) + floor;
}