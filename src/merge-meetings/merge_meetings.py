def condense_meeting_times( arr ):
	"""
	**********************************************************************************************************************
	Your company built an in-house calendar tool called HiCal. 
	You want to add a feature to see the times in a day when everyone is available.
	To do this, you’ll need to know when any team is having a meeting. 
	In HiCal, a meeting is stored as tuples of integers (start_time, end_time). 
	These integers represent the number of 30-minute blocks past 9:00am.

	Write a function condense_meeting_times() that takes an array of meeting time ranges and returns 
	an array of condensed ranges.
	"""
	arr.sort()
	condensed_meetings = []
	cur_start = arr[0][0]
	cur_end = arr[0][1]

	for meeting in arr:
		if cur_end > meeting[1]:
			pass
		elif cur_end > meeting[0]:
			cur_end = meeting[0]
		else:
			condensed_meetings.append( ( cur_start, cur_end ) )
			cur_start = meeting[0]
			cur_end = meeting[1]

	condensed_meetings.append( ( cur_start, cur_end ) )

	return condensed_meetings