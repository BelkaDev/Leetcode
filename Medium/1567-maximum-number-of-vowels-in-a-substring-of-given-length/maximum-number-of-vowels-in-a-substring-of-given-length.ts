function maxVowels(s: string, k: number): number {
const vowels = new Set(["a","e","o","i","u"])
let L = 0, R = 0, max = 0, count = 0;
for (; R < s.length; ++R) {
 if (vowels.has(s[R])) ++count;
if (R -  L + 1 == k) {
    max = Math.max(count, max);
    if (vowels.has(s[L])) --count;
    ++L;
}
};
    return max;
};