/**********************************************************************************************************************
 * You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
 * Write a class TempTracker with these methods:
 * 
 * insert()—records a new temperature
 * get_max()—returns the highest temp we've seen so far
 * get_min()—returns the lowest temp we've seen so far
 * get_mean()—returns the mean of all temps we've seen so far
 * get_mode()—returns the mode of all temps we've seen so far
 * Optimize for space and time. Favor speeding up the getter functions (get_max(), get_min(), get_mean(), and get_mode()) 
 * over speeding up the insert() function.
 * 
 * get_mean() should return a float, but the rest of the getter functions can return integers. 
 * Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll 
 * all be in the range 0..110.
 * 
 * If there is more than one mode, return any of the modes.
 *
 * [This will be done using a closure]
 */
var createTempRecord = function()
{
	var min;
	var max;
	var numEntries;
	var temperatureSum = 0.0;
	var mode;
	var mostOccurences = 0;
	var occurences = [111];

	for ( var i = 0; i < 111; i++ )
	{
		occurences[i] = 0;
	}

	var insert = function( temperature )
	{
		if ( temperature > max ) {
			max = temperature;
		}
		if ( temperature < min ) {
			min = temperature;
		}
		numEntries++;
		temperatureSum += temperature;
		occurences[temperature]++;
		if ( occurences[temperature] > mostOccurences ) {
			mostOccurences = occurences[temperature];
			mode = temperature;
		}
	};

	var getMin = function()
	{
		return min;
	};

	var getMax = function()
	{
		return max;
	};

	var getMean = function()
	{
		return temperatureSum / numEntries;
	};

	var getMode = function()
	{
		return mode;
	};


	return {
		insert: insert,
		getMax: getMax,
		getMin: getMin,
		getMean: getMean,
		getMode: getMode
	};
}