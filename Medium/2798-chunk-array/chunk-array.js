/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        const group = [];
        for (let j = 0; j < size; ++j) {
            if (arr[i] != undefined) {
            group.push(arr[i])
            }
            ++i
        }
        result.push(group)
    }
    return result;
};
