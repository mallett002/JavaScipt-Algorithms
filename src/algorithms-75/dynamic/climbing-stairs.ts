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

export function tabulationClimbStairs(n: number): number {
    const dp = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

/*
DP solution:
  0
  1 => (1)  dp[1] = 1
  2 => (2)  dp[2] = 2
  3 => (3)  dp[3 - 1] + dp[3 - 2]
  4 => (5)  dp[4 - 1] + dp[4 - 2]
  5 => (8)  dp[5 - 1] + dp[5 - 2]

*/
