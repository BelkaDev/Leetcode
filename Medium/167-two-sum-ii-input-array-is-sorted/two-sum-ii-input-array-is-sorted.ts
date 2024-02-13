function twoSum(numbers: number[], target: number): number[] {
    let L = 0, R = numbers.length - 1;
    while (L != R) {
        while (numbers[R] + numbers[L] < target) {
            ++L;
        }
        while (numbers[R] + numbers[L] > target) {
            --R
        }
        if ((numbers[R] + numbers[L] == target))
        return [++L,++R]
    }
    return [];
}




























/*function twoSum(numbers: number[], target: number): number[] {
    let L = 0;
    let R = numbers.length - 1;
    while (L != R) {
        if (numbers[L] + numbers[R] > target)  {
            R--
        } else if (numbers[L] + numbers[R] < target) {
            L++
        }
        else return [L+1,R+1];
    }
    return []; // just in case
};*/