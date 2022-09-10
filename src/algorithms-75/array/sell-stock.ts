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
        // start looping
    }
};