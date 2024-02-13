function isIsomorphic(s: string, t: string): boolean {
    
    const encode = (str) => {
    const M = new Map();
        return str.split('').map((char, index) => {
        if (M.has(char)) {
            return M.get(char);
        } else {
            M.set(char, index);
            return index;
        }
    }).join('_')          
    }
                                              
    console.log(encode(s), encode(t));
  
    return encode(s) == encode(t);    


};