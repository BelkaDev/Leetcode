function rearrangeArray(nums: number[]): number[] {
    const positives = []
    const negatives = []
    const result = [];
    for (const num of nums) {
        if (num > 0) positives.push(num)
        else negatives.push(num);
    }
    
    let i = 0;
    let k = 0;
    while (k < nums.length/2) {
        nums[i] = positives[k];
        nums[i+1] = negatives[k];
        i+=2;
        ++k;
    }
    
    return nums;
};