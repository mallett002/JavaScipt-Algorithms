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

function buildCountOfTotalOnes(n: number): number {
    let count = 0;
    
    // determine if last digit is a 1: (n % 2)
    while (n) {
        count += (n % 2);      // determine if last digit is a one
        n = Math.floor(n / 2); // move to the right to look at the next digit
    }
    
    return count;
}

// https://www.youtube.com/watch?v=RyBM56RIWrM
export function bruteForce(n: number): number[] {
    let result: number[] = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result.push(0);
        } else {
            const total = buildCountOfTotalOnes(i);
            result.push(total);
        }
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
Dynamic programming way to solve:
1 + dp[n - offset]
offset is the most significant digit yet
0:    000   just zero           ->  0
1:    001   (1)     1 + dp[0]   ->  1 + dp[1 - 1]
2:    010   (2)     1 + dp[0]   ->  1 + dp[2 - 2]
3:    011   (2)     1 + dp[1]   ->  1 + dp[3 - 2]
4:    100   (4)     1 + dp[0]   ->  1 + dp[4 - 4]
5:    101   (4)     1 + dp[1]   ->  1 + dp[5 - 4]
6:    110   (4)     1 + dp[2]   ->  1 + dp[6 - 4]
7:    111   (4)     1 + dp[3]   ->  1 + dp[7 - 4]
8:   1000   (8)     1 + dp[0]   ->  1 + dp[8 - 8]
9:   1001   (8)     1 + dp[1]   ->  1 + dp[9 - 8]
10:  1010   (8)     1 + dp[2]   ->  1 + dp[10 - 8]
11:  1011   (8)     1 + dp[3]   ->  1 + dp[11 - 8]
12:  1100   (16)    1 + dp[4]   ->  1 + dp[12 - 8]
13:  1101   (16)    1 + dp[5]   ->  1 + dp[13 - 8]
...
*/
export function fastSolution(number: number): number[] {
    let bits = [0];         // start at 0, we'll always have a 0 to start bc has 0 1's in it.
    let significantDigit = 1;    // most significantDigit ex: 010 is 2 and 100 is 4 and 1000 is 8

    for (let i = 1; i <= number; i++) {
        if (significantDigit * 2 === i) {    // if we have reached a new significantDigit
            significantDigit = i;
        }

        // assign the number of ones at this number (i)
        // will be 1 + its counterpart (n - significantDigitDigit)
        bits[i] = 1 + bits[i - significantDigit];
    }

    return bits;
}


