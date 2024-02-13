function numSubarrayProductLessThanK(nums: number[], k: number): number {
let L = 0, R = 0, ans = 0, product = 1;
    if (k <= 1) return 0
    for(; R < nums.length; ++R) {
        product*=nums[R];
        while (product >= k){
            product/=nums[L]
            ++L;            
        }
       ans+=R-L+1
    }
    return ans;
};