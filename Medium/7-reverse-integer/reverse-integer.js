var reverse = function(x) {
    let negative = x < 0;
    x = parseInt(String(Math.abs(x)).split("").reverse().join(""));
    return x > 0x7FFFFFFF ? 0 : negative ? -x : x;
};