/**********************************************************************************************************************
 * Your company built an in-house calendar tool called HiCal. 
 * You want to add a feature to see the times in a day when everyone is available.
 * To do this, you’ll need to know when any team is having a meeting. 
 * In HiCal, a meeting is stored as tuples of integers (start_time, end_time). 
 * These integers represent the number of 30-minute blocks past 9:00am.
 *  
 * Write a function condense_meeting_times() that takes an array of meeting time ranges and returns 
 * an array of condensed ranges.
 */
function condenseMeetingTimes( arr )
{
	/* sort by meeting start time */
	arr.sort( function( a, b ) { return a[0] - b[0]; } );
	var condensedMeetings = [];
	var curStart = arr[0][0];
	var curEnd = arr[0][1];

	/* check all meetings and keep track of overlap */
	for ( meeting in arr )
	{
		/* next meeting is entirely contained in current */
		if ( curEnd > meeting[1] ) {
			continue;
		}
		/* next meeting extends current */
		else if ( curEnd > meeting[0] ) {
			curEnd = meeting[1];
		}
		/* meetings do not overlap */
		else {
			condensedMeetings.push( ( curStart, curEnd ) );
			curStart = meeting[0];
			curEnd = meeting[1];
		}
	}
	condensedMeetings.push( ( curStart, curEnd ) );

	return condensedMeetings;
}