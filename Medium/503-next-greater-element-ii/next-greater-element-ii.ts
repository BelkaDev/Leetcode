function nextGreaterElements(nums: number[]): number[] {
let L = 0;
const  ans = [];
    for (; L < nums.length; ++L) {
        let R = (L+1)%nums.length
        while (nums[R] <= nums[L] && R != L) {
            R=(R+1)%nums.length
        }
        ans[L] = R == L ? -1 : nums[R] > nums[L] ? nums[R] : -1
    }
    return ans;
};