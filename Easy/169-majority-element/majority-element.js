/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
let bitArray = Array(32).fill(0);
let result = 0;
for (let num of nums) {
  for (bit in bitArray ) {
    bitArray[bit] += ((num >> bit) & 1)
  }
}
for (let i = 0; i < 32; ++i) {
  const bit = bitArray[i]
  if (bit > nums.length / 2) {
    result |=  1 << i;
  }
}
return result;
};