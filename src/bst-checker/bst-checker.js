/**********************************************************************************************************************
 * Write a function to check that a binary tree is a valid binary search tree
 */
function isValid( root )
{
	/* keep track of lower and upper bound for each node */
	var upperBound = Number.POSITIVE_INFINITY;
	var lowerBound = Number.NEGATIVE_INFINITY;

	/* perform depth first search while checking each node */
	var stack = [ [ root, upperBound, lowerBound ] ];
	while ( stack[0] )
	{
		var node = stack.pop();
		if ( node[0].value > node[1] || node[0].value < node[2] ) {
			return false;
		}
		if ( node[0].leftChild ) {
			stack.push( [ node[0].leftChild, node[0].value, node[2] ] );
		}
		if ( node[0].rightChild ) {
			stack.push( [ node[0].rightChild, node[1], node[0].value ] );
		}
	}
	return true;
}