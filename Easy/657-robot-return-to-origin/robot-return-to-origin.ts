function judgeCircle(moves: string): boolean {
    const result = moves.split('').map(move => {
      switch(move) {
             case "U": return [0, -1]; break;
              case "D": return [0, 1]; break;
              case "L": return [-1, 0]; break;
              case "R": return [1, 0]; break;
      }
  }).reduce((prev, curr) => {
         return [curr[0]+prev[0], curr[1]+prev[1]]
     }, [0,0]);
    
    return result[0] == 0 && result[1] == 0;
};