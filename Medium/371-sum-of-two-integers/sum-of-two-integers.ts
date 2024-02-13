function getSum(a: number, b: number): number {
  while (b !== 0) { // we loop over the carry bits. 
  // XOR operation to find the different bits
  let sum_bits = a ^ b;

  // AND operation to find the same bits
  let carry_bits = (a & b) << 1;

  // Update the values of a and b for the next iteration
  a = sum_bits;
  b = carry_bits;
}
    return a
};

/*
E.g: no carry bits
1 + 2 = 001 + 010
001
010
----
010



E.g: w/ carry bits
5 + 9 = 14
0101
1001
------


0



*/