/**********************************************************************************************************************
 * You've implemented a Stack class, but you want to be able to access the largest element in a stack.
 *
 * Use your Stack class to implement a new class MaxStack with a function get_max() that returns the 
 * largest element in the stack. get_max() should not remove the item.
 */
function largestStack()
{
	var stack = [];
	var max = Math.negativeInfinity;

	var push = function( value )
	{
		if ( value > max ) {
			max = value;
		}
		var node = [value, max];
		stack.unshift( node );
	};

	var pop = function()
	{
		node = stack.shift();
		max = node[1];
		return node[0];
	};

	var getMax = function()
	{
		return max;
	};

	return {
		push: push,
		pop: pop,
		getMax: getMax
	};
}