/**********************************************************************************************************************
 * Write a function to find the second largest element in a binary search tree.
 */
function getSecondLargestInBST( treeRoot )
{
	var node = treeRoot;
	while ( true )
	{
		/* if left child but no right child, second largest is largest in left tree */
		if ( node.leftChild && !node.rightChild ) {
			return getLargestInBST( node.leftChild );
		}
		/* we're at parent of largest and it has no left subtree */
		else if ( node.rightChild && !node.rightChild.leftChild && !node.rightChild.rightChild ) {
			return node.value;
		}
		/* otherwise continue on */
		else {
			return getSecondLargestInBST( node.rightChild );
		}
	}
}

/**********************************************************************************************************************
 * Helper function to find the largest element in a BST
 */
function getLargestInBST( treeRoot )
{
	var node = treeRoot;
	while ( true )
	{
		if ( !node.rightChild ) {
			return node.value;
		}
		else {
			node = node.rightChild;
		}
	}
}