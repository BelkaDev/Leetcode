function frequencySort(s: string): string {
    // Should use heap instead.
    
    const freqMap = new Map();
    const reverseMap = new Map();
    
    let maxFreq = 0;
    let ans = "";
    
    for (const c of s) {
        let frequency = freqMap.get(c) || 0;
        freqMap.set(c, ++frequency);
        
        const prevSet = reverseMap.get(frequency-1) ?? new Set()
        prevSet.delete(c);
        
        reverseMap.set(frequency-1, prevSet)
        
        const currSet = reverseMap.get(frequency) ?? new Set()
        currSet.add(c);
        reverseMap.set(frequency, currSet);
        
        maxFreq = Math.max(maxFreq, frequency)
    }
    
    for (let i = maxFreq; i > 0; --i) {
        const set = reverseMap.get(i);
        for (const c of [...set]) {
            const freq = freqMap.get(c);
            for (let j = 0;  j < freq; j++) {
                ans+=c
            }
        }
    }

    
    return ans;

};