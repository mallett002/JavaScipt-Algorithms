export const maxProfit = (prices: number[]): number => {
    // Find the lowest price
    const lowest = Math.min(...prices);
    const highest = Math.max(...prices);

    if (lowest === highest) {                       // all the same price
        return 0;
    }

    const iOfLowest = prices.indexOf(lowest);
    const iOfHighest = prices.indexOf(highest);

    if (iOfHighest > iOfLowest) {                  // if lowest comes before highest
        return highest - lowest;
    } else {
        let greatestProfit = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            const hopefulLowest = prices[i];
            const rest = prices.slice(i + 1, prices.length);
            const nextHighest = Math.max(...rest);
            const diff = nextHighest - hopefulLowest;

            if (diff > greatestProfit) {
                greatestProfit = diff;
            }
        }

        return greatestProfit;
    }
};
