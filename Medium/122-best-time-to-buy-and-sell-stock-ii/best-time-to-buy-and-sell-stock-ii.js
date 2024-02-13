/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    for(let i = 0; i < prices.length - 1 ; i++){
        if (prices[i+1] > prices[i]) {
        prices[i] = prices[i] - prices[i+1]
        }
        else {
        prices[i] = prices[i]
        }
    }
    return prices.reduce((p,c) => {
    return (c < 0) ? p+(-1*c) : p
    },0)
};