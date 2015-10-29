def two_movies( flight_length, movie_lengths ):
	"""
	**********************************************************************************************************************
	You've built an in-flight entertainment system with on-demand movie streaming.
	Users on longer flights like to start a second movie right when their first one ends, but they 
	complain that the plane usually lands before they can see the ending. So you're building a feature 
	for choosing two movies whose total runtimes will equal the exact flight length.

	Write a function that takes an integer flight_length (in minutes) and an array of integers movie_lengths 
	(in minutes) and returns a boolean indicating whether there are two numbers in movie_lengths whose 
	sum equals flight_length.

	When building your function:

	Assume your users will watch exactly two movies
	Don't make your users watch the same movie twice
	Optimize for runtime over memory
	"""