/**********************************************************************************************************************
 * Write a function to see if a binary tree is "superbalanced" (a new tree property we just made up).
 * A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
 */
function isSuperBalanced( treeRoot )
{
	/* do a DFS of the tree, recording leaf depths as we encounter them */
	var stack = [];
	var leafDepths = [];

	stack.unshift( [treeRoot, 0] );
	while ( stack.length !== 0 )
	{
		var node = stack.shift();
		/* check if leaf and add depth if appropriate */
		if ( !node[0].leftChild && !node[0].rightChild ) {
			/* only add if unique depth */
			if leafDepths.indexOf( node[1] ) !== -1 {
				leafDepths.push( node[1] );
			}
			/* check depths */
			if ( leafDepths.length > 2 || leafDepths.length === 2 && Math.abs( leafDepths[0] - leafDepths[1] > 1 ) ) {
				return false;
			}
		}
		/* add children and depths as appropriate */
		if ( node[0].leftChild ) {
			stack.unshift( [node[0].leftChild, node[1] + 1] );
		}
		if ( node[0].rightChild ) {
			stack.unshift( node[0].rightChild, node[1] + 1] );
		}
	}
	return true;
}