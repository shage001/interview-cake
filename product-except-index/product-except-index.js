/**********************************************************************************************************************
 * You have an array of integers, and for each index you want to find the product of every
 * integer except the integer at that index.
 *
 * Do not use division in your solution.
 */
 function getProductsOfAllIntsExceptAtIndex( arr )
 {
 	// copy input array
 	var productArray = arr.slice();
 	// make two passes over array: front to back and back to front
 	var len = arr.length;
    var productSoFar = 1;
 	for ( var i = 0; i < len; i++ )
 	{
 		productArray[i] = productSoFar;
        productSoFar *= arr[i];
 	}
   	productSoFar = 1;
 	for ( var i = len - 1; i >= 0; i-- )
 	{
 		productArray[i] *= productSoFar;
        productSoFar *= arr[i];
 	}
   return productArray;
 }