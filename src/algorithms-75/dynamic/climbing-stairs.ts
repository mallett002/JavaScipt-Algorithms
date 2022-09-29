interface IMemo {
    number?: 0 | 1
}

export function climbStairs(n: number, memo: IMemo = {}): number {
    if (n in memo) return memo[n];
    
    if (n === 0) {
        memo[n] = 1;
        return 1;
    }

    if (n < 0) {
        memo[n] = 0;
        return 0;
    }

    let count = 0;

    for (let i = 1; i < 3; i++) {
        const result = climbStairs(n - i, memo);

        memo[n - i] = result;
        count += result;
    }

    return count;
}
