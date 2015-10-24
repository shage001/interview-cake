/**********************************************************************************************************************
 * Write a function kth_to_last_node() that takes an integer k and the head_node of a singly 
 * linked list, and returns the kth to last node in the list.
 */
function kthToLastNode( k, head )
{
	var node = head;
	var len = 0;
	while ( node )
	{
		len++;
		node = node.next;
	}
	var kthToLast = len - k;
	node = head;
	for ( var i = 0; i < kthToLast; i++ )
	{
		node = node.next;
	}
	return node;
}