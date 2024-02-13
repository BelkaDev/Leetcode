function twoSum(nums: number[], target: number): number[] {
    const M = new Map();
    for (let i  = 0; i < nums.length; ++i) {
        M.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; ++i) {
        const complimentary = target - nums[i];
        if (M.has(complimentary) && i != M.get(complimentary)) {
            return [i, M.get(complimentary)]
        }
    }
}