/**********************************************************************************************************************
 * You created a game that is more popular than Angry Birds.
 * You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts 
 * in O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. 
 * You need a faster sorting algorithm.
 * 
 * Write a function that takes:
 * 
 * a list of unsorted_scores
 * the highest_possible_score in the game
 * and returns a sorted list of scores in less than O(nlgn) time.
 */
function fastSort( scores, highestPossibleScore )
{
	/* create array to count occurences of each score */
	var occurences = [];
	for ( var i = 0; i <= highestPossibleScore; i++ )
	{
		occurences.push( 0 );
	}
	scores.forEach( function( score )
	{
		occurences[score]++;
	});

	/* build sorted array from occurences data */
	var sortedScores = [];
	for ( var i = 0; i <= highestPossibleScore; i++ )
	{
		for ( var j = 0; j < occurences[j]; j++ )
		{
			sortedScores.push( i );
		}
	}
	return sortedScores;
}