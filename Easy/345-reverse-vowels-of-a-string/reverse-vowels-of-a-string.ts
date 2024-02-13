function reverseVowels(s: string): string {
    
    const isVowel = (letter) => {
        return  ["a","e","i", "o", "u"].includes(letter.toLowerCase());
    }
    const answer = s.split('');
    let L = 0;
    let R = s.length - 1;
    
    while(L < R) {
        if (!isVowel(s[L])) {
            answer[L] = s[L]
        ++L;
        }
               if (!isVowel(s[R])) {
            answer[R] = s[R]
        --R;
        }
        
        if (isVowel(s[L]) && isVowel(s[R])) {
            answer[L] = s[R];
            answer[R] = s[L];
            ++L;
            --R;
        } 
        
    };
    
    return answer.join('')
    
}