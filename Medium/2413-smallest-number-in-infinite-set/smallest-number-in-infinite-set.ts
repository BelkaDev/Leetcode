class SmallestInfiniteSet {
    set = new Array(1000).fill(1);
    constructor() {
        this.set[0] = null;
        this.set[1] = 1;
    }

    popSmallest(): number {
        let i = 0;
        while (!this.set[i] && i < this.set.length) ++i
        this.set[i] = null;
        return i;
    }

    addBack(num: number): void {
        this.set[num] = 1;
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */