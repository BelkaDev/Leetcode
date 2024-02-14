function sumOfThree(num: number): number[] {
        if (num % 3 != 0) return [];
        let a = num/3 -1;
        return [a, a+1,a+2]
};