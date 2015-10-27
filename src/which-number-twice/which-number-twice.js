/**********************************************************************************************************************
 * I have an array where every number in the range 1..n appears once except for one number which appears twice.
 * Write a function for finding the number that appears twice.
 */
function whichNumberTwice( arr )
{
	/* sum all elements */
	var n = arr.length;
	var sum = 0;
	arr.forEach( function( elem )
	{
		sum += elem;
	});

	/* compute closed form sum */
	var target = n * ( n+ 1 ) / 2; 

	/* difference is the number that appears twice */
	return target - sum;
}