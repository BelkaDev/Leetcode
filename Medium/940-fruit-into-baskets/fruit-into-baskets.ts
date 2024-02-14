
function totalFruit(fruits: number[]): number {   
    let L = 0;
    let maxBasket = 0;
    let M = new Map();
    
    for (let R = 0; R < fruits.length; ++R) {
        // Extend the Sliding Window
        let count = M.get(fruits[R]) || 0;
        M.set(fruits[R], ++count);
        
        // Shrink the Sliding window
        while (M.size > 2) {
         let count = M.get(fruits[L]);
         M.set(fruits[L], --count);
         if (count == 0) {
             M.delete(fruits[L])
         } 
         L++; // Shrink the window
        }
        
        maxBasket = Math.max(maxBasket, R - L + 1);
    }
    return maxBasket;
}