def get_products_of_all_ints_except_at_index( arr ):
	"""
	**********************************************************************************************************************
	You have an array of integers, and for each index you want to find the product of every
	integer except the integer at that index.

	Do not use division in your solution.
	"""
	length = len( arr )
	productArray = [1] * length
	product = 1
	
	for i in range ( length ):
		productArray[i] = product
		product *= arr[i]

	product = 1
	for i in range ( length - 1, 0, -1 ):
		productArray[i] *= product
		product *= arr[i]

	productArray[0] *= product
	return productArray


print( get_products_of_all_ints_except_at_index( [1, 7, 3, 4] ) )
# expected: [84, 12, 28, 21]