/*
Explanation:
    - Subtract one and compare it with bitwise AND.
    - This just looks at the 1's that exist but just deleting the next 1 bit
    - Deleting 1 can create a bunch of ones to the right, but they cancel out because of the AND
    - You will only loop as many 1's as there are.

hammingWeight(11):
11 & 10:
    1011
    1010 (11 minus 1 "ten")
    ----
    1010: (ten)

10 & 9:
    1010
    1001 (10 minus 1 "nine")
    ----
    1000: (eight)

8 & 7:
    1000
    0111 (8 minus 1 "seven")
    ----
    0000: (zero)
*/

export const hammingWeight = (n: number): number => {
    let count = 0;

    while (n !== 0) {
        const newN = n - 1; // Get rid of the next 1 bit that exists to the right
        n = n & newN;// and it with prev n
        count++;// increment the count
    }

    return count;
};

// Other way of doing it is using strings:
const hammingWeightString = (n: number): number => {
    const binary = n.toString(2);

    return binary.split('').filter((it) => it !== '0').length;
};
