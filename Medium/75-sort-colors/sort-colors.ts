/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
let L= 0, R = nums.length-1
    for (let i = L; i <= R;) {
        if (nums[i] == 0) {
            [nums[i], nums[L]] = [nums[L], nums[i]];
            ++L;
        }
        else if (nums[i] == 2) {
            [nums[i], nums[R]] = [nums[R], nums[i]];
            --R;
            --i;
        }
        ++i;
    }
};