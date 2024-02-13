function longestConsecutive(nums: number[]): number {
    let S = new Set()
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
            S.add(nums[i]);
    }
    for (let i = 0; i < nums.length; i++){
        if (!S.has(nums[i] - 1)) {
            let j =  0;
            while (S.has(nums[i] + j)) {
                j++;
            }
            max = Math.max(max, j);
        }
    }
    return max;
    
};