function groupAnagrams(strs: string[]): string[][] {
    let groups = new Map();
    
    for(const word of strs) {
        const charMap = new Array(26).fill(0);
        
        for (const char of word) {
            const mapIndex = char.charCodeAt(0) - "a".charCodeAt(0)
            charMap[mapIndex]+=1
        }
        
        const group = groups.get(charMap.toString()) ?? []
        groups.set(charMap.toString(), [...group, word])
    }
    
    return Array.from(groups.values())

}