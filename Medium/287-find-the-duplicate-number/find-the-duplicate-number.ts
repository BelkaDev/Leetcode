function findDuplicate(nums: number[]): number {
    for (let i = 0; i < nums.length;) {
        const j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[j],nums[i]] = [nums[i], nums[j]]
        } else ++i
    }
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] != i+1 ) return nums[i]
    }
    return -1;
};