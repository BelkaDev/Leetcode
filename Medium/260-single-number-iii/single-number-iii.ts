function singleNumber(nums: number[]): number[] {
let num1,num2;
let n1n2 = nums.reduce((prev,curr) => prev^curr);
let bit = 1;
while (Number(n1n2 & bit) === 0) {
    bit = bit << 1
}
for (let num of nums) {
    if (Number(num & bit) !== 0) {
        num1^=num
    }
    else num2^=num
}
    return [num1,num2]
};

