def find_rectangle_overlap( rec1, rec2 ):
	"""
	**********************************************************************************************************************
	Write a function to find the rectangular intersection of two given love rectangles.

	As with the example above, love rectangles are always "straight" and never "diagonal."
	More rigorously: each side is parallel with either the x-axis or the y-axis.
	"""
	x_overlap = find_range_overlap( rec1.x, rec1.width, rec2.x, rec2.width )
	y_overlap = find_range_overlap( rec1.y, rec1.height, rec2.y, rec2.height )

	if !x_overlap[0] or !y_overlap[0]:
		return None

	return {
		'x': x_overlap[0],
		'y': y_overlap[0],
		'width': x_overlap[1],
		'height': y_overlap[1]
	}


def find_range_overlap( point1, range1, point2, range2 ):
	"""
	**********************************************************************************************************************
	Helper function to find the overlap in one dimension
	"""
	## all we need to know is if the right starting point is left of the left ending point ##
	right_start = max( point1, point2 )
	left_end = min( point1 + range1, point2 + range2 )

	if right_start > left_end:
		return [ None, None ]

	else:
		return [ right_start, left_end - right_start ]
