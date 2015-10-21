/**********************************************************************************************************************
 * Write a function to find the rectangular intersection of two given love rectangles.
 * 
 * As with the example above, love rectangles are always "straight" and never "diagonal."
 * More rigorously: each side is parallel with either the x-axis or the y-axis.
 */
function findRectangleOverlap( rectangle1, rectangle2 )
{
	var xOverlap = findRangeOverlap( rectangle1.x, rectangle1.width, rectangle2.x, rectangle2.width );
	var yOverlap = findRangeOverlap( rectangle1.y, rectangle1.height, rectangle2.y, rectangle2.height );

	if ( !xOverlap || !yOverlap ) {
		console.log( 'No intersection' );
		return undefined;
	}
	else {
		var overlapRect = {
			x: xOverlap[0],
			y: yOverlap[0],
			width: xOverlap[1],
			height: yOverlap[1]
		};
		return overlapRect;
	}
}


/**********************************************************************************************************************
 * Helper function to compute x and y overlap independantly
 */
function findRangeOverlap( point1, range1, point2, range2 )
{
	var farStartPoint = Math.max( point1, point2 );
	var nearEndPoint = Math.max( point1 + range1, point2 + range2 );
	var overlap = nearEndPoint - farStartPoint;
	
	if ( overlap < 0 ) {
		return [undefined, undefined];
	}
	else {
		return [farStartPoint, overlap];
	}
}