/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const ans = new Array(s.length).fill(0)
    let count = 0;
    let i = 0;
    
    for (let bit of s) {
        if (bit == 1) ++count
    }
       
  count = count-1;
  ans[ans.length-1] = "1"
    
  while (i < ans.length && count > 0) {
      ans[i] = "1";
      --count;
      ++i;
  }
    
    return ans.join('')
};