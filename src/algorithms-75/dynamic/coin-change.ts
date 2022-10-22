// Top down approach (Depth first search)
export function retrieveFewestCoins(coins: number[], amount: number): number {
    if (amount === 0) return 0;

    let minCoins = Infinity;

    for (const coin of coins) {                 // for each coin
        if (coin <= amount) {                   // if you can successfuly take money without taking more than amount
            let result = retrieveFewestCoins(coins, amount - coin);

            if (result !== -1) {                // if we were able to take money down to 0 (result !== -1)
                result += 1;                    // add one coin to the result since we used it
                if (result < minCoins) {        // if our result is less than current minCoins, set new minCoins
                    minCoins = result;
                }
            }
        }
    }

    if (minCoins === Infinity) {                // if we made it here without finding new mincoins, we didn't get to 0 deducting
        return -1;                              // and never able to set a new min coins.           
    }

    return minCoins;                            // return result of minCoins at the end
}

export function fastest(coins: number[], amount: number): number {
    const dp = [0];

    for (let i = 1; i <= amount; i++) {     // build up the tabulation dp
        dp[i] = Infinity; // Set default value as Infinity for each i 
        // (Could use amount + 1 ^^ here also. Just needs to be higher than the highest possibility so we can compare against the min down below)

        for (const coin of coins) {
            // previous dp[n]
            // diff = (n - coin) + 1
            const diff = i - coin;

            if (diff >= 0) {
                // dp[i] starts as Infinity. If already found one that reaches zero, would get reset
                dp[i] = Math.min(dp[i], dp[diff] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

/*
[1, 3, 4, 5]

dp[0]    -> 0
dp[1]    -> dp[0] + 1
dp[2]    -> dp[1] + 1
dp[3]    -> dp[0] + 1
dp[4]    -> dp[0] + 1
dp[5]    -> dp[0] + 1
dp[6]    -> dp[5] + 1
*/
