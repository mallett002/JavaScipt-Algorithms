const doTheThing = () => {

}

module.exports = doTheThing;


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Sum up inputs and try to divide by 4
function solution(A, B = 0) {
    let sum = A + B;

    if (sum < 4) return 0; // Can't make 4 sides of 1, then we can't make a square
    if (sum % 4 === 0) return sum / 4; // 4 equal sides

    return solution(sum - 1);
}

// My idea is to sum up the inputs and try to divide by 4. If we can divide by 4 we can make a square.
// Also, if we can't, just take away 1 from the sum, and try again, recursively.
