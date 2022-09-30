// Top down approach (Depth first search)
export function retrieveFewestCoins(coins: number[], amount: number, cache = {}): number {
    if (amount < 0) return Infinity;
    if (amount === 0) return 0;
    if (amount in cache) return cache[amount];

    let min = Infinity;

    for (const coin of coins) {
        const leftOver = amount - coin;
        const result = retrieveFewestCoins(coins, leftOver, cache) + 1;

        if (result < min) min = result;
    }

    cache[amount] = min;
    return cache[amount] === Infinity ? -1 : cache[amount];
}
