/**
 * @param {string} val
 * @return {Object}
 */
class ValueChecker {
    constructor(value) {
        this.value = value;
    }
    toBe(value) {
        if (this.value === value) return true;
        else throw new Error('Not Equal');
    }
    notToBe(value) {
        if (this.value !== value) return true;
        else throw new Error('Equal');
    }
}
var expect = function(val) {
   return new ValueChecker(val);
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */