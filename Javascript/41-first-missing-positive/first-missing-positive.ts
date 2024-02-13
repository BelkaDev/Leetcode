function firstMissingPositive(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i < len;) {
        const j = nums[i];       
        if (nums[i] > 0 && nums[i] != nums[j])  {
            [nums[j], nums[i]] = [nums[i], nums[j]];
        } else ++i;
    }
    for (let i = 1; i < nums.length; ++i ){
        if (nums[i] != i) return i;
    }
    return nums.length;
};