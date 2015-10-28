/**********************************************************************************************************************
 * In order to win the prize for most cookies sold, my friend Alice and I are going to merge our 
 * Girl Scout Cookies orders and enter as one unit. Each order is represented by an "order id" (an integer).
 * 
 * We have our lists of orders sorted numerically already, in arrays. Write a function to 
 * merge our arrays of orders into one sorted array.
 */
function mergeArrays( arr1, arr2 )
{
	/* keep pointers for each array then add and increment the correct one */
	var pointer1 = 0;
	var pointer2 = 0;
	var mergedArray = [];

	while( arr1[pointer1] || arr2[pointer2] )
	{
		if ( arr1[pointer1] && arr1[pointer1] < arr2[pointer2] ) {
			mergedArray.push( arr1[pointer1] );
			pointer1++;
		}
		else if ( arr2[pointer2] && arr2[pointer2] <= arr1[pointer1] ) {
			mergedArray.push( arr2[pointer2] );
			pointer2++;
		}
		else if ( !arr1[pointer1] ) {
			mergedArray.push( arr1[pointer1] );
			pointer1++;
		}
		else if ( !arr2[pointer2] ) {
			mergedArray.push( arr2[pointer2] );
			pointer2++;
		}
	}
	return mergedArray;
}