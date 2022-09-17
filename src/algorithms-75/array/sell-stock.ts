export const maxProfit = (prices: number[]): number => {
    let largestProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const price = prices[i];
        const smallest = Math.min(...prices);
        const rest = prices.slice(i + 1);
        const largest = Math.max(...rest);
        const diff = largest - price;

        if (price === smallest && diff > largestProfit) {
            return diff;
        }

        if (diff > largestProfit) {
            largestProfit = diff;
        }
    }

    return largestProfit;
};
