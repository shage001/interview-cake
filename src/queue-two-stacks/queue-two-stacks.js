/**********************************************************************************************************************
 * Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue function.
 * Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.
 * 
 * Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
 */
function queueTwoStacks()
{
	var stack1 = [];
	var stack2 = [];

	var enqueue = function( item )
	{
		stack1.unshift( item );
	};

	var dequeue = function()
	{
		if ( stack2.length === 0 ) {
			while ( stack1.length !== 0 ) {
				stack2.unshift( stack1.shift() );
			}
		}
		return stack2.shift();
	};

	return {
		enqueue: enqueue;
		dequeue: dequeue
	};
}