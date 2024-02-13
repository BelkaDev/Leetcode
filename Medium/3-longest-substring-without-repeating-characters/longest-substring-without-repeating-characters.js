function lengthOfLongestSubstring(s) {
 let L = 0;
 let result = 0;
 let S = new Set();
    for (let R = 0; R < s.length; ++R) {
        while (S.has(s[R])) {
            S.delete(s[L]);
            L++
        }
        S.add(s[R]);
        result = Math.max(R - L + 1, result)
        }
    return result;
}
