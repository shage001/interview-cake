/**********************************************************************************************************************
 * Write a function contains_cycle() that takes the first node in a singly-linked list and 
 * returns a boolean indicating whether the list contains a cycle.
 */
function containsCycle( head )
{
	/* single node is not a cycle */
	if ( !head.next ) {
		return false;
	}

	/* set up two pointers */
	var fast = head.next;
	var slow = head;

	while ( true )
	{
		/* list ends */
		if ( !fast.next ) {
			return false;
		}
		/* fast has lapped slow */
		if ( fast === slow || fast.next === slow ) {
			return true;
		}
		/* advance both pointers */
		fast = fast.next.next;
		slow = slow.next;
	}
}