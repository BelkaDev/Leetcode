/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
nums.sort();
let i = 0;
const result = [];
for (const num of nums) {
    const current = num;
    let appearTimes = 0;
    while (nums[i] == current) {
        ++appearTimes
        ++i;
    }
    if (appearTimes == 2) result.push(num)
}
    return result;
};