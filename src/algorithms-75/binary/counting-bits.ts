// Return an array of the number of 1 bits for each number countin up to "n"
export function countBits(n: number): number[] {
    let bits: number[] = [];

    while (n >= 0) {
        const numOfOnesForBinaryNum: number = n.toString(2)
            .split('')
            .reduce((accum, curr) => accum + parseInt(curr), 0);
        
        bits = [numOfOnesForBinaryNum, ...bits];
        n--;
    }

    return bits;
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
5: 101 -> "2 ones" -> [0, 1, 1, 2, 1, 2]
6: 110 -> "2 ones" -> [0, 1, 1, 2, 1, 2, 2]
7: 111 -> "3 ones" -> [0, 1, 1, 2, 1, 2, 2, 3]
8: 1000

*/

