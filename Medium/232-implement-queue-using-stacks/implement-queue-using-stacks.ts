/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

class Stack {
    private _list: Array<number> = []
    
    push(...elements) {
        this._list.push(...elements)
    }

    pop() {
        return this._list.pop()
    }

    peek() {
        return this._list[this._list.length-1]
    }

    isEmpty() {
        return this._list.length == 0
    }

    get size() {
        return this._list.length;
    }
}

class MyQueue {
    private _stack1 = new Stack();
    private _stack2 = new Stack();
    push(x: number): void {
    this._stack1.push(x);
    }

    pop(): number {
    this.swap(this._stack1, this._stack2)
    const element = this._stack2.pop();
    this.swap(this._stack2, this._stack1)
    return element;
    }

    peek(): number {
    this.swap(this._stack1, this._stack2)
    const element = this._stack2.peek();
    this.swap(this._stack2, this._stack1)
    return element;
    }

    empty(): boolean {
    return this._stack1.isEmpty();
    }

    swap(stack1, stack2) {
        while(!stack1.isEmpty()) {
            const element = stack1.pop()
            stack2.push(element)
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

