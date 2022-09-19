/*
  0         0         1         1
+ 0        +1       + 0       + 1
----      ----      ----      ----
  0         1         1         0 (with a carry 1)

^^ looks similar to the XOR table vv

a b | XOR
- - | - -
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 0

^^ This is the same as adding with base 2 (binary)
1 + 1 = 10 (1 is the carry, and it reached the base, so the right column gets a 0)
"Just like 5 + 5 = 10, reached the base (10), so the right column gets a zero"
*/

export const sumTwoIntegers = (a: number, b: number) => {
    while (b != 0) { // Once there's nothing to carry (we assign b to be the carry)
        let carry = (a & b) << 1; // if a AND b then left shift by one
        a = a ^ b; // a XOR b (ones digit)
        b = carry; // carry to next bit
    }

    return a;
};
