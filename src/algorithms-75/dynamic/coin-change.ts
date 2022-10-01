// Top down approach (Depth first search)
export function retrieveFewestCoins(coins: number[], amount: number, cache = {}): number {
    if (amount in cache) return cache[amount];
    if (amount === 0) return 0;

    let minCoins = Infinity;

    for (const coin of coins) {
        if (coin <= amount) {
            const result = retrieveFewestCoins(coins, amount - coin, cache);

            if (result !== -1) {
                minCoins = Math.min(minCoins, result + 1);
            }
        }
    }

    if (minCoins === Infinity) {
        cache[amount] = -1;
        return -1;
    }

    cache[amount] = minCoins;
    return minCoins;
}
