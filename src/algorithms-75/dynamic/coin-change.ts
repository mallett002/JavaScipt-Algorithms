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
