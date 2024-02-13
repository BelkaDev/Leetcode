/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const array = Array.isArray(obj) ? obj : Object.keys(obj);
    return array.length == 0;
};