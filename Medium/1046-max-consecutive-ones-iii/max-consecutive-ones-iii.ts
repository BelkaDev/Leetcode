function longestOnes(nums: number[], k: number): number {
let M = new Map();
let L = 0;
let maxFlips = 0;
    for (let R = 0; R < nums.length; ++R) {
        let maxSize = 0;
        let count = M.get(nums[R]) || 0;
        if (nums[R] == 1)
        M.set(nums[R], ++count);
        maxSize = Math.max(maxSize, M.get(1)) || 0;
        
        if(R - L + 1 - maxSize > k) {
            if (nums[L] == 1)
            M.set(nums[L], M.get(nums[L]) - 1);
            L++ ;
        }
          
          maxFlips = Math.max(R - L + 1, maxFlips); 
    }
    return maxFlips;
};

