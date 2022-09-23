// Return an array of the number of 1 bits for each number countin up to "n"
export function countBits(n: number): number[] {
    return [0];
}

/*
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
---------------
My work:
2: 010

0: 0 ones -> [0]
1: 001  -> "one 1"  -> [0, 1]
2: 010  -> "one 1"  -> [0, 1, 1]
3: 011  -> "2 ones" -> [0, 1, 1, 2]
4: 100  -> "1 one"  -> [0, 1, 1, 2, 1]
5: 1100 -> "2 ones" -> [0, 1, 1, 2, 1, 2]
*/
