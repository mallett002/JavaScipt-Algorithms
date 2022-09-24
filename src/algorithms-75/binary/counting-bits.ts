// Return an array of the number of 1 bits for each number countin up to "n"
export function firstTryCountBits(n: number): number[] {
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

// https://www.youtube.com/watch?v=RyBM56RIWrM
export function bruteForce(n: number): number[] {
    // start at n
    // figure out how many 1s: (n % 2)
        // put that in the result array
    // move to left one: (n / 2)

    let result: number[] = [];

    while (n) {
        const amountOfOnes = (n % 2);
        console.log({amountOfOnes});
        
        result.unshift(amountOfOnes);

        n = Math.floor(n / 2);
    }

    return result;
}
/*
Brute force solution
3: 011
    3 % 2 = 1 (How many ones in the 1's spot), put it in the array [1]
    3 / 2 = 1 (move to the next ones spot) 1 is new number

    1 % 2 = 1 (How many ones in the 1's spot), put it in the array [1, 1]
    1 / 2 = 0 (move to the next ones spot) 0 is new number

    0 % 2 = 0 (How many ones in the 1's spot), put it in front of the array [0, 1, 1]
    0 / 2 = 0 (we're done)
*/

/*
0 through 7 in binary:
0:  000  
1:  001  
2:  010  
3:  011  
4:  100  
5:  101  
6:  111  
7:  1000 

*/

