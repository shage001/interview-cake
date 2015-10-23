/**********************************************************************************************************************
 * Delete a node from a singly-linked list, given only a variable pointing to that node.
 */
function deleteNode( node )
{
	if ( node.next ) {
		var nextNode = node.next;
	}
	else {
		throw new Error( 'Last item' );
	}

	if ( nextNode.next ) {
		var nextNextNode = nextNode.next;
		node.value = nextNode.value;
		node.next = nextNextNode;
	}
}