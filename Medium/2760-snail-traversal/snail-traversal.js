/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    function getIndex(i,j) {
        if (j%2 == 0) {
            return j*rowsCount + i;
        } else {
            return (j+1)* rowsCount - (i+1);
        }
    }
	
	const result = [];
    if (rowsCount*colsCount !== this.length) return result;

    for (let i = 0; i < rowsCount; ++i) {
    result[i] = [];
    for (let j = 0; j < colsCount; ++j) {
    const k = getIndex(i,j);
    result[i][j] = this[k];
    }
    }
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */ 


// [0, 0] => 0
// [0, 1] => 9 
// [0, 2] => 10
// [0, 3] => 19

// [1,0] ==> 1
// [1, 1] => 8
// [1, 2] => 11
// [1, 3] => 18
