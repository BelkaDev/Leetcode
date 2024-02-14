function rearrangeArray(nums: number[]): number[] {
    const result = [];
    let [pp, pn] = [0,1];
    for (const num of nums) {
        if (num > 0) {
            result[pp] = num;
            pp+=2;
        } else {
            result[pn] = num;
            pn+=2;
        }
    }
    return result;
};