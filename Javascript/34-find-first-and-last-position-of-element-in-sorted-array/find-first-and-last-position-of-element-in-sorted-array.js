/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
 let L = 0, R = nums.length -1;
 while (L <= R) {
     const mid = L + Math.floor((R - L )/2)
     if (nums[mid] < target) {
         L = mid +1;
     } else if (nums[mid] > target) {
         R = mid - 1;
     }     
     if (nums[mid] === target) {
         let l = r = mid
         while (nums[l] == target) {--l}
         while (nums[r] == target) {++r}
         return [l+1,r-1]
     }
 }
    return [-1,-1];
};