function findMatrix(nums: number[]): number[][] {
const M = new Map();
const ans = [[]];
    for (let i = 0; i < nums.length; ++i) {
        let count = M.get(nums[i]) || 0;
        M.set(nums[i], ++count);
    }
    for (let i = 0; i < nums.length; ++i) {
        let k = 0;
        while (M.get(nums[i]) > 0) {
            if (!ans[k]) ans[k] = []
            ans[k].push(nums[i])
            M.set(nums[i], M.get(nums[i]) - 1)
            ++k;
        }
    }
    return ans;
};