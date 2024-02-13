function singleNumber(nums: number[]): number {
    let bitmask;
    for (let i = 0; i < 32; i++) {
    let count = 0;
    const bit = 0b1 << i;
        for (const num of nums) {
            if (Number(num & bit) !== 0) { 
                ++count;
            }
        }
        if (count%3==1) bitmask|=bit;
    }
    return bitmask;
}

/* 
bit: 001
--> 2: 010
--> 3: 011
=> count = 001

bit: 010
--> 2: 010
--> 3: 011
=> count = 



/* 
[1,1,1,2,2,2,3]

[001,001,001,010,010,010, 011]

[044]

[011]
*/