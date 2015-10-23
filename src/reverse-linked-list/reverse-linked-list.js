/**********************************************************************************************************************
 * Write a function for reversing a linked list. Do it in-place.
 * Your function will have one input: the head of the list.
 * Your function should return the new head of the list.
 */
function reverse( head )
{
	var current = head;
	var next = undefined;
	var previous = undefined;

	while ( current )
	{	
		/* set next to current and current to previous */
		next = current.next;
		current.next = previous;
		/* keep moving through the list */
		previous = current;
		current = previous;
	}
	return previous;
}