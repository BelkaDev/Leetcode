class ArrayWrapper {
    
    constructor(private readonly nums: number[]) {
    
    }
    
    valueOf(): number {
     return this.nums.reduce((acc,curr) => acc+curr,0);
    }
    
    toString(): string {
        return `[${String(this.nums)}]`
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */