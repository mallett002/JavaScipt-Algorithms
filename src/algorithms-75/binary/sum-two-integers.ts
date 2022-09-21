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

/**
<< Left shift operator
3 << 1 = "Move 3 one bit to the left" 
3 * (2 * 1) = 6

3 << 2: Move 3 two bits to the left
3 * (2 * 2) = 12
000000000000000011 -> 000000000000001100: "12"
*/

export const sumTwoIntegers = (a: number, b: number) => {
    if (b === 0) return a;
    if (a === 0) return b;

    const xor = a ^ b;
    const carry = (a & b) << 1;

    return sumTwoIntegers(xor, carry);
};

/*
 3 + 5:
 011 + 101
 xor: 110; &: 001; leftshift: 010 ->
 110 ^ 010: 100; &: 010; leftshift: 100; ->
 100 ^ 100: 000; &: 100; leftshift: 1000 ->
 000 ^ 1000: 1000; &: 0000; leftshift: 0000 (& and leftshift result in 0, we're done): answer is what xor gave us: 1000 (8)
*/

