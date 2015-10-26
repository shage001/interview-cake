def bracket_validator( str ):
	"""
	**********************************************************************************************************************
	Let's say:

	'(', '{', '[' are called "openers."
	')', '}', ']' are called "closers."

	Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

	Examples:

	"{ [ ] ( ) }" should return True
	"{ [ ( ] ) }" should return False
	"{ [ }" should return False
	"""